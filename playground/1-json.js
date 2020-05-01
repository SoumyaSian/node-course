const fs = require('fs');


const infoBuffer = fs.readFileSync('1-json.json');
const infoJson = infoBuffer.toString();
const parsedInfo = JSON.parse(infoJson);

parsedInfo.name  = 'Soumya';
parsedInfo.age = 26;

const userJson = JSON.stringify(parsedInfo);
fs.writeFileSync('1-json.json',userJson);


// const book = {
//     title : 'Ego is the Enemy',
//     author : 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJson);
// console.log(bookJson);

// const databuffer  = fs.readFileSync('1-json.json');
// const dataJson = databuffer.toString();
// const parsedData = JSON.parse(dataJson);
// console.log(parsedData.title);


// const parsedBookJson = JSON.parse(bookJson);
// console.log(parsedBookJson);


