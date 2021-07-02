const express = require("express");

const PORT = process.env.PORT || 3005; //I got your back, we can do this, hold up! ;)
const app = express();

// require routes here

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));

// link routes to the url snippet here

app.listen(PORT, () => {
    console.log(`API server open on port ${PORT}!`)
});