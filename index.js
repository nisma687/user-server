const express=require('express');
const app=express();
const port=process.env.PORT || 5000;


const cors=require('cors');
// middle ware
app.use(cors());
app.use(express.json());

const users=[
    {id:1, name:'John', email:'saba@gmail.com'},
    {id:2, name:'Smith', email:'smith@gmail.com'},
    {id:3, name:'Sara', email:'sara@gmail.com'},

]
app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/',(req,res)=>{
    res.send('User Management System');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.post('/users',(req,res)=>{
    console.log('Data received',req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser);

})


 