// server/index.js

const express = require("express");
const mysql = require("mysql2")
const PORT = 3001;
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"gym1234",
    database:"gym"
});
db.connect((err)=>{
    if(err)
    {
        throw err
    }
    console.log("Connection was successful")
})

app.get("/",(req,res)=>{
    res.send("successfully connected to server")
})


// Get Member Profile Detail
app.post("/member",(req,res)=>{

    const memberId= req.body.member;
        db.query(`SELECT * FROM member WHERE member_id = ${memberId}`,(err,results)=>{

        if(err)
        {
            res.send({err:err})
        }
        else{
            res.send(results)
        }





    })
})

app.post("/member/pt",(req,res)=>{

    const memberId= req.body.member;
        db.query(`SELECT * FROM pt_session WHERE pt_member
        = ${memberId}`,(err,results)=>{

        if(err)
        {
            res.send({err:err})
        }
        else{
            res.send(results)
        }





    })
})






app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(`SELECT * FROM user WHERE username = '${username}' AND user_password = '${password}'`,(err,results) =>{

        if(err)
        {
            res.send({err:err})
        }
        

        if(results)
        {
            res.send(results)
        }
        else
        {
            res.send("Wrong username and password combination")
        }
    


    } )
    
    
})
//Get Instructor Profile Detail


// Get Member Activity Information (PT Session + Workout Course Sessions)

// Get Instructor Activity Information( All PT Clients + Workout Courses Instructing)

//Instructor can view whole database





app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

