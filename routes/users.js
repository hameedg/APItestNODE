import express from "express";
import {v4 as uuidv4} from 'uuid';

const router= express.Router();//coming from express initialize thr router

let users=[];

//this is similar fashion as the app.get, app.use etc 
//this means that we ensure that router which is initialized is now set to use as use, get,post,delete,update
router.get('/',(req,res)=>{       //a big depth here is '/' here and '/' in index.js is not same coz it is homepage of app
    res.send(users);//whereas here it means homepage of USER

});

router.post('/',(req,res)=>{
    const user=req.body;



    console.log('Hurray!! Reaceived a new entry');
    users.push({...user,id:uuidv4()});
    res.send(`${user.firstName} is added now`);
});

router.get('/:id',(req,res)=>{
 const { id } =req.params;
 const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;

    users=users.filter((user)=>user.id !==id);
    res.send(`${id} is removed`)
})

export default router;