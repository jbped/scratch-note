const express = require("express");

const PORT = process.env.PORT || 3005; //I got your back, we can do this, hold up! ;)
const app = express();

// require routes here
const apiRoutes = require("./routes/apiRoutes/notes.js");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));

// link routes to the url snippet here
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server open on port ${PORT}!`)
});