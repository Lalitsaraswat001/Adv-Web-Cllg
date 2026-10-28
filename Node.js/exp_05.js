const express=require('express');
const app=express()

const banned=['hacker1','spammer2'];

app.use((req,res,next)=>{
    const user=req.query.user;

    if(banned.includes(user)){
        return res.status(402).send('you are banned');
    }
    next();
});
app.get('/',(req,res)=>res.send('welcome'));



app.listen(3000,()=>{
     console.log("Server running on http://localhost:3000");
})

