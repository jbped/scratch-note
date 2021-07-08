const fs = require("fs");
const path = require("path");

// get notes function
const getNotes = () => {
    let noteArr = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
    return JSON.parse(noteArr);
}

const createNote = (noteInfo) => {
    let newNote = noteInfo
    notesArr.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr, null, 2)
    )
    return newNote;
};

const deleteNote = (id) => {
    let notesArr = getNotes();
    console.log(notesArr);
    let newNotesArr = notesArr.filter(note => note.id !== id)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(newNotesArr, null, 2)
    )
    return newNotesArr;
};

module.exports = { createNote, deleteNote, getNotes }