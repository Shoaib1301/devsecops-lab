const express=require("express"); 
 
require("dotenv").config(); 

const API_KEY=process.env.API_KEY; 
 
const app=express(); 
 
app.get("/",(req,res)=>{ 
 
res.send("DevSecOps Security Lab"); 
 
}); 
 
app.listen(3000);