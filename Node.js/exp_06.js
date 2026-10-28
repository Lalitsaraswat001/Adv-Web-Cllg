const express=require('express')
const app=express();

//method->library

app.all('/library',(req,res,next)=>{
    if(req.query.card!='LIB123'){
        return res.status(401).send('show your library card');
    }
    next();
});

app.get('/library',(req,res)=>res.send("list of Books"))
app.post('/library',(req,res)=>res.send("Book is borrow"))
app.delete('/library',(req,res)=>res.send("book is returned"))

app.listen(2000,()=>{
     console.log("Server running on http://localhost:2000");
})