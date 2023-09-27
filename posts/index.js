const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const posts={};


app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id]={
        id,title
    }

    res.status(201).send(posts[id]);
});

app.listen(PORT,()=>{
    console.log(`Listen on the port http://localhost:${PORT}`);
})
