const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    console.log('Your notes is....');
}

const addNote = function (title, body) {
    const notes = loadNotes();

    //Remove the notes with same title
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
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

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const removeNote = function (title){
    const notes = loadNotes();
    
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    });

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Note Removed !!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed('No Note Found !!'))
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote
}



