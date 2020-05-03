// const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

// console.log(process.argv);
//customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true, //default value is false
            type : 'string'
        }
    },
    // handler: function (argv) {
    //     // console.log('Adding a new note'cls, argv);
    //     // console.log('My Note Title : ' + argv.title + '\nMy Note Body : '+argv.body);
    //     notes.addNote(argv.title,argv.body);
    // }
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
});

//Create Remove Command
yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder : {
        title :{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    // handler:function (argv){
    //     console.log('Removing a note');
    //     notes.removeNote(argv.title);
    // }

    handler(argv){
        console.log('Removing a note');
        notes.removeNote(argv.title);
    }
});

//Create list command
yargs.command({
    command:'list',
    describe:"List your notes",
    handler() {
        console.log('Listing out all notes');
        notes.listNotes();
    }
});

//Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder :{
        title :{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        console.log('Reading a note');
        notes.readNote(argv.title)
    }
});

yargs.parse();

// console.log(yargs.argv);
// const command = process.argv[2];
// if (command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

// const greenMsg = chalk.red.bold('Error!! ');
// console.log(greenMsg);

// const distinction = 'above 70%';
// const firstClass = '60%-70%';
// const secondClass = '50% - 60%'
// const thirdClass = '36%-50%'
// const fail = 'below 35%'

// const gradesDisplay = chalk`
// Grades are classified as bellow.
// {underline.black.bgBlue Distinction } -> {blueBright.bold ${distinction}}
// {bgKeyword('orange').black.underline First Class} -> {keyword('orange').bold ${firstClass}}
// {bgHex('#DEADED').underline.black Second Class} -> {hex('#DEADED').bold ${secondClass}}
// {rgb(255,255,0).inverse.underline Third Class} -> {rgb(255,255,0).bold ${thirdClass}}
// {bgRedBright.underline.black Fail} -> {redBright.bold ${fail}}
//  `
// console.log(gradesDisplay);


// const miles = 18;
// const calculateFeet = miles => miles * 5280;
// console.log(chalk`
//     There are {bold 5280 feet} in a mile.
//     In {bold ${miles} miles}
//     `);

// console.log(validator.isEmail('sample.com'));
// console.log(validator.isURL('https://www.google.com'))


// const add = require('./utils.js');
// const sum = add(5,-2);
// console.log(sum)