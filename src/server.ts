import express from 'express';
import cors from 'cors';
// console.log("Hello neha");

const app=express();

app.get("/",(req,res)=>{
     return res.send("Hello neha");
});
app.post("/add",(req,res)=>{
     console.log("the request is "+req);
     return res.status(200).send("Object is added successfully");

});
app.listen(5000,()=>{
     console.log("app is active at 5000");
     
})
