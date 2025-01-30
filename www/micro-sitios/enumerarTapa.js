const fs = require('fs');
const path = require('path');

// Ruta absoluta al archivo JSON
const filePath = path.join(__dirname, 'anunciantes.json');

try {
  // Leer el archivo JSON
  const data = fs.readFileSync(filePath, 'utf-8');

  // Dividir en líneas para procesar
  let lines = data.split('\n');

  // Inicializar variables para renumerar las claves consecutivas "tapa"
  let newLines = [];
  let index = 1;
  let insideGroup = false;

  lines.forEach(line => {
    console.log('Línea original:', line);

    const match = line.match(/"tapa\d+"/); // Detectar claves "tapa"
    if (match) {
      if (!insideGroup) {
        index = 1; // Reiniciar numeración al inicio de un nuevo grupo
        insideGroup = true;
      }
      line = line.replace(/"tapa\d+"/, `"tapa${index}"`);
      console.log('Línea modificada:', line);
      index++;
    } else {
      insideGroup = false; // Salir del grupo si no hay una clave "tapa"
    }
    newLines.push(line);
  });

  // Unir las líneas y escribir los cambios en el archivo
  const updatedContent = newLines.join('\n');
  fs.writeFileSync(filePath, updatedContent, 'utf-8');

  console.log('Claves consecutivas renumeradas correctamente.');
} catch (error) {
  console.error('Error procesando el archivo:', error.message);
}
