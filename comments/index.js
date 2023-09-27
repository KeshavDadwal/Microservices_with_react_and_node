const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001; 

app.use(bodyParser.json());

const commentByPostId={};


app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentByPostId[req.params.id] || []);
})

app.post('/posts/:id/comments',(req,res)=>{
    const commentid = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentByPostId[req.params.id] || [];
    comments.push({id: commentid, content });

    commentByPostId[req.params.id]=comments;

    res.status(201).send(comments);
});

app.listen(PORT,()=>{
    console.log(`Listen on the port http://localhost:${PORT}`);
})
