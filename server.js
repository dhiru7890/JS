//console.log('hello')
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 5000;
// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all Contact"});
// });
// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:""});
// });
// app.post("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"post a contact"});
// });
// app.put("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"update contact"});
// });
// app.delete("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"delete contact"});
// });
// app.listen(port,()=>{
//     console.log(`Server running onn port ${port}`);
// })


app.use("/api/contacts",require("./middlewares/errorHandler"));

app.use(express.json());
app.use("/api/contacts",require("./routs/contactRoutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`running at port ${port}`);
});
