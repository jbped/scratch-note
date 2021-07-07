const router = require("express").Router();
const db = require("../../db/db.json");
const { createNote, deleteNote } = require("../../lib/notes")

router.get("/notes", (req,res) => {
    let notes = db
    res.json(notes);
});

router.post("/notes", ({ body }, res) => {
    // add validation requirement for body.title and body.text
    body.id = db.length.toString();
    const note = createNote(body, db);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    let id = req.params.id
    deleteNote(id, db);
})

module.exports = router;