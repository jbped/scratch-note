const router = require("express").Router();
const db = require("../../db/db.json");
const { createNote, deleteNote, getNotes } = require("../../lib/notes");

// =======================================
//                ROUTES
// =======================================
router.get("/notes", (req,res) => {
    let notesArr = getNotes();
    let notes = notesArr;
    res.json(notes);
});

router.post("/notes", ({ body }, res) => {
    const note = createNote(body);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    let id = req.params.id
    let noteArr = deleteNote(id);
    res.json(noteArr);
});

module.exports = router;