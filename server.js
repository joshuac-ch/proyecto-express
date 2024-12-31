import express from "express"
import path from "path"
const app=express()
const port=3000
let users=[]
app.get("/users",(req,res)=>{
    res.json(users)
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello word is the principal</h1>")
})

//app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})
