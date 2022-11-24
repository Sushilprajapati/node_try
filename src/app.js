
const express = require("express");
const app = express();
port = 8000;
path = require("path");
const static_path = path.join(__dirname, "../public");
console.log(static_path);
app.use(express.static(static_path));
app.get("/", (req , res)=>{
    res.send("Hello Bhai chal ja na  hanana ..");
} ) 
app.get("/", (req , res)=>{
    res.send("Hello Bhai chal ja na  hanana ..");
} ) 
app.get("/about", (req , res)=>{
    res.send("mai about page hoon");
} ) 
app.get("/weather", (req , res)=>{
    res.send("mai weather page hoon");
} ) 
app.get("*", (req , res)=>{
    res.send("Page not found !");
} ) 
app.listen(port , ()=>{
    (`Mai chal raha hoon na yaha  ${port} par`)
})