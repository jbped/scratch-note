const fs = require("fs");
const path = require("path");

// get notes function
const getNotes = () => {
    let noteArr = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
    return JSON.parse(noteArr);
}

// Create note logic
const createNote = (noteInfo) => {
    let newNote = noteInfo
    let notesArr = getNotes();

    // Existing note ID checker
    unallowedIds =  notesArr.map(note => parseInt(note.id));

    // If current arr length === an iten in the unallowedIds array find max item value add one, else id = arr length
    if (!unallowedIds.includes(notesArr.length)) {
        console.log("ID is unique, use array length");
        newNote.id = notesArr.length.toString()
    } else {
        console.log("ID is not unique, id = find max item value + 1");
        newNote.id = (Math.max(...unallowedIds) + 1).toString();
    }
    // Add new note to notesArr
    notesArr.push(newNote);

    // update db.json file
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr, null, 2)
    )
    return newNote;
};

// delete note logic
const deleteNote = (id) => {
    let notesArr = getNotes();
    let newNotesArr = notesArr.filter(note => note.id !== id)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(newNotesArr, null, 2)
    )
    return newNotesArr;
};

module.exports = { createNote, deleteNote, getNotes }