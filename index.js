import express from 'express';
import bodyParser from 'body-parser';//allows to incoming post requests by body
import userRoutes from './routes/users.js'; //here we can notice one thing that 'userRoutes' is used instead 'router',
                                              //so the reason is we can name it anything


const app = express(); //whole application dependent and be confined to it
const PORT=5000;

//here we initialize bodyParser middelware
app.use(bodyParser.json());//this tells that we are gonna use json data in our whole application through REST api
//this is a application use which gets request with path routing it
// syntax comprises two blocks one is path the other is call back function
//fyi browser can only receive a GET request

app.use('/users',userRoutes);
app.get('/',(req,res) => res.send("hello from me"));


//now we are allowing our applocation to listen our requests
app.listen(PORT, ()=> console.log(`Server is running on port: http://localhost:${PORT}`));



