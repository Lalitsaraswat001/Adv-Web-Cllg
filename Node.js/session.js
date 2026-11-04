
app.get('/profile',(req,res)=>{
    if(req.session.user){
        res.send('Welcome ' + req.session.username);
    } else {
        res.send('Please log in first.');
    }
});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.send('session destroyed');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
