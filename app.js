const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Ruta de la carpeta que quieres leer
const folderPath = path.join(__dirname, 'output'); // Cambia 'miCarpeta' por tu carpeta

// Middleware para servir archivos estáticos desde la carpeta
app.use('/images', express.static(folderPath));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Ruta del archivo HTML
});

// Endpoint para obtener la lista de imágenes con rutas relativas
app.get('/api/images', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta:', err);
            return res.status(500).send('Error al leer la carpeta');
        }

        // Filtrar solo imágenes
        const images = files.filter(file => /\.(png|jpg|jpeg|gif)$/.test(file));
        // Generar rutas relativas
        const relativePaths = images.map(image => ({
            name: image,
            url: `/images/${image}` // Rutas relativas a tu servidor
        }));

        res.status(200).json(relativePaths);
    });
});

// Endpoint para servir una imagen específica
app.get('/images/:filename', (req, res) => {
    const filename = req.params.filename;

    // Validar que el nombre del archivo no contenga rutas
    if (filename.includes('..')) {
        return res.status(400).send('Acceso denegado');
    }

    const filePath = path.join(folderPath, filename);

    // Verificar si el archivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('Archivo no encontrado:', filePath);
            return res.status(404).send('Archivo no encontrado');
        }

        // Si el archivo existe, envíalo
        res.sendFile(filePath);
    });
});

// Escucha en el puerto 3000
app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor en http://0.0.0.0:3000');
    console.log('Sustituya "0.0.0.0" por la direccion de su equipo');
    console.log('Presione CTRL+C para detener el servidor');
});
