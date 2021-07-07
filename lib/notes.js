const { writeFileSync } = require("fs");
const path = require("path");

const createNote = (noteInfo, notesArr) => {
    let newNote = noteInfo
    notesArr.push(newNote);
    writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr, null, 2)
    )
    return newNote;
};

const deleteNote = (id, notesArr) => {
    newNotesArr = notesArr.filter(note => note.id !== id)
    writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(newNotesArr, null, 2)
    )
}

module.exports = { createNote, deleteNote }