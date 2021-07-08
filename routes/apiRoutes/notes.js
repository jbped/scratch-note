const router = require("express").Router();
const db = require("../../db/db.json");
const { createNote, deleteNote, getNotes } = require("../../lib/notes");


router.get("/notes", (req,res) => {
    let notes = getNotes();
    console.log(notes)
    res.json(notes);
});

router.post("/notes", ({ body }, res) => {
    body.id = db.length.toString();
    const note = createNote(body, db);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    let id = req.params.id
    
    let noteArr = deleteNote(id);
    res.json(noteArr);
});

module.exports = router;