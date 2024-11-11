const fs = require('fs');
const path = require('path');
const PDFPoppler = require('pdf-poppler');

async function convertPdfToImages(pdfPath, outputDir, filePrefix) {
    // Asegúrate de que el directorio de salida existe
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const options = {
        format: 'png',
        out_dir: outputDir,
        out_prefix: filePrefix, // Prefijo único para cada archivo
        page: null, // Si es null, convertirá todas las páginas
    };

    try {
        await PDFPoppler.convert(pdfPath, options);
        console.log(`PDF convertido a imágenes en el directorio ${outputDir}`);
    } catch (error) {
        console.error("Error al convertir PDF:", error);
    }
}

async function processAllPdfs(inputDir) {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const filePath = path.join(inputDir, file);

        // Verifica si el archivo es un PDF
        if (path.extname(file).toLowerCase() === '.pdf') {
            // Usa el nombre del archivo como prefijo para las imágenes
            const filePrefix = path.basename(file, '.pdf');
            const outputDir = path.join(__dirname, 'output');
            await convertPdfToImages(filePath, outputDir, filePrefix);
        }
    }
}

// Directorio de entrada con los archivos PDF
const inputDir = path.join(__dirname, 'input');

// Procesa todos los archivos PDF en el directorio de entrada
processAllPdfs(inputDir).catch(err => console.error(err));


