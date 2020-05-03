const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    console.log('Your notes is....');
}

// const addNote = function (title, body) {
//     const notes = loadNotes();

//     //Remove the notes with same title
//     const duplicateNotes = notes.filter(function (note) {
//         return note.title === title;
//     });

//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         });

//         saveNotes(notes);
//         console.log(chalk.green.inverse('New note added !'));
//     }
//     else {
//         console.log(chalk.red.inverse('Note title Taken'));
//     }
// }

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title); //loop through all the array elts
    const duplicateNote = notes.find((note) => note.title === title); //return first match
    // if (duplicateNotes.length === 0) {
 
    debugger  //debugger which node provides if we use debugger we should add inspect while running the app
    
    //for Ex - node inspect app.js add --title='Groceries' --body='rice,wheet'
    //INcase of any wrror in windows replace inspect with --inspect-brk
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added !'));
    }
    else {
        console.log(chalk.red.inverse('Note title Taken'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // });
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note Removed !!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No Note Found !!'))
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.bold.red('Your Notes'));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title);

    if (foundNote) {
        console.log(chalk.green("Note Found!!!!"));
        console.log(chalk.bold.blue("Note Title --> " + foundNote.title));
        console.log("Notes Body ->", foundNote.body);
    } else {
        console.log(chalk.red("No Note Found!!!"));
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}



