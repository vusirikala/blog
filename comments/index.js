const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

var commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comment = { id: commentId, content };
    commentsByPostId[postId].push(comment);
    res.status(201).send(comment);
});

app.listen(4001, () => {
    console.log("Listening on port 4001");
});