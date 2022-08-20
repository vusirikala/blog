const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
var posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    const post = { "id": id, "title": title };
    posts[id] = post;
    res.status(201).send(post);
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});