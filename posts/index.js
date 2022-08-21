const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.json());
var posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/createpost", (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title, content } = req.body;
    const post = { "id": id, "title": title, "content" : content };
    console.log(post);
    posts[id] = post;
    res.status(201).send(post);
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});