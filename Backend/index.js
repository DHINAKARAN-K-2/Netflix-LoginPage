import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({extended:true}))
var email="dhina@gmail.com";
var pass="@123"
app.post("/",(req,res)=>{
    if(req.body.email == email && req.body.password == pass)
        res.send(true)
    else
        res.send(false) 
})
app.listen(5000, () => {
  console.log(`Server running on port 5000.....`);
});