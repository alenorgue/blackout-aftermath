// ¡El país te necesita!
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'subestaciones'); // Ruta a la carpeta 'subestaciones/' desde la raíz del proyecto

const files = fs.readdirSync(folderPath); // Leemos todos los archivos dentro de la carpeta


for (const file of files) {
    const filePath = path.join(folderPath, file);

    
    const content = fs.readFileSync(filePath, 'utf-8').trim(); // Leemos el contenido del archivo
    
    
    const [value1, value2] = content.split(',').map(Number);// Separar los dos valores

    
    const difference = Math.abs(value1 - value2); // Calcular diferencia absoluta

    if (difference === 15000) {
        console.log("📁 Archivo:", file);
        console.log("🔢 Valores:", value1, value2);
        console.log("📏 Diferencia:", difference);
        break; // Termina al encontrar la subestación
    }
}