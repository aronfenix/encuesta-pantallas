const XLSX = require('xlsx');

const wb = XLSX.readFile('C:/Users/alvar/Downloads/Resultados_encuesta_pantallas_hasta_6B_corregido.xlsx');
console.log('Sheets:', wb.SheetNames);

for (const name of wb.SheetNames) {
  const ws = wb.Sheets[name];
  const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
  console.log(`\n=== SHEET: ${name} === (${data.length} rows)`);
  for (let i = 0; i < data.length; i++) {
    console.log(`Row ${i}: ${JSON.stringify(data[i])}`);
  }
}
