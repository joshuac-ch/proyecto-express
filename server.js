import express from "express"
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("<h1>Hello word is the principal</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<p>Welcome a about</p>")
})
app.get("/form",(req,res)=>{
    res.send("<p>Rellenar el siguiente formulario</p>")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})