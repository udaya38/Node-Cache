import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app=express();
app.use(cors());

app.get('/list',async(req,res)=>{
        let jsonData=await fetch('https://jsonplaceholder.typicode.com/todos');
        let data=await jsonData.json();
        res.setHeader('Cache-Control', `max-age=20`);
        res.json(data);
})

app.listen(4000,()=>{
    console.log("app listening to 4000");
})