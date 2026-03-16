const fs = require('fs');
const pdfParse = require('pdf-parse');

async function readPDF(path) {
  const buf = fs.readFileSync(path);
  const data = await pdfParse(buf);
  console.log(`\n=== PDF: ${path} ===`);
  console.log(`Pages: ${data.numpages}`);
  console.log(data.text);
}

(async () => {
  await readPDF('C:/Users/alvar/Downloads/Encuesta_Pantallas_sexto.docx.pdf');
  await readPDF('C:/Users/alvar/Downloads/Encuesta_Pantallas_4o5o.docx.pdf');
})();
