# Este simple sistema permite mostrar documentos PDF con paginación automática a través de inernet.

### Justificación:
En ocasiones, una empresa requiere mostrar información actualizada como reportes, diapositivas o incluso hojas de cálculo en televisores o a través de cualquier computadora dentro de la intranet.
Lo común en estos escenarios es crear un video en formato compatible con un televisor agregando múltiples diapositivas a mostrar. Este enfoque no es óptimo para mostrar contenido actualizado a través de la intranet de la empresa.
Pero, ¿qué sucede cuando hay múltiples departamentos?

Este sistema pretende ser una solución pragmática al problema anterior, convirtiendo cualquier documento PDF a imágenes individuales que después serán mostradas en un navegador.
Actualmente, muchos televisores modernos cuentan con un navegador web, lo que significa que se puede visualizar información desde cualquier computadora dentro de la intranet.

Los unicos requisitos para el funcionamientos son:
- Usar windows (El sistema no se ha probado en otros sistemas operativos)
- Ingresar documentos PDF. Aplicaciones como Office Word, Excel o Power point permiten convertir documentos a PDF. Al igual que Google Docs, Sheets o Presentation

Instrucciones:
- Crear una carpeta llamada input en la raíz del proyecto
- Crear una carpeta llamda output en la raíz del proyecto
- Ingresar los documentos PDF en la carpeta input
- Ejecutar el archivo "convertir.bat" para generar las imagenes indivisuales de cada documentos PDF
- Ejecutar el archivo "iniciar.bat" para iniciar el servidor web
- En caso de agregar nuevos documentos PDF solo debe volver a ejecutar "convertir.bat"
