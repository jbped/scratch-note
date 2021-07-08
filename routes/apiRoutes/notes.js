const router = require("express").Router();
const db = require("../../db/db.json");
const { createNote, deleteNote, getNotes } = require("../../lib/notes");


router.get("/notes", (req,res) => {
    let notesArr = getNotes();
    let notes = notesArr;
    console.log(notes)
    res.json(notes);
});

router.post("/notes", ({ body }, res) => {
    let notesArr = getNotes();
    unallowedIds =  notesArr.map(note => parseInt(note.id));
    console.log(unallowedIds);
    console.log(notesArr.length);
    if (!unallowedIds.includes(notesArr.length)) {
        console.log(true)
        body.id = notesArr.length.toString()
    } else {
        body.id = (Math.max(...unallowedIds) + 1).toString();
        console.log(body.id)
    }
    // console.log(unallowedIds);
    // body.id = notesArr.length.toString();
    const note = createNote(body);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    let id = req.params.id
    let noteArr = deleteNote(id);
    res.json(noteArr);
});

module.exports = router;

// 