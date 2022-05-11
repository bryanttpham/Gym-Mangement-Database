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



app.post("/instructor",(req,res)=>{
 
    const instructorId= req.body.instructor;
        db.query(`SELECT * FROM instructor WHERE instructor_id = ${instructorId}`,(err,results)=>{
 
        if(err)
        {
            res.send({err:err})
        }
        else{
            res.send(results)
        }
    })
})
 

 
app.post("/member/workout/id",(req,res)=>{
 
    const memberId= req.body.member;
   
        db.query(`SELECT workout_session.session_id,workout_session.workout_date,workout_session.room,workout_session.max_availability,workout_session.start_time,workout_session.end_time,member.name,instructor.instructor_name FROM((workout_session INNER JOIN member ON workout_session.workout_member=member.member_id)INNER JOIN instructor ON workout_session.workout_instructor=instructor.instructor_id) WHERE workout_member
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

 
 
app.post("/member/pt/id",(req,res)=>{
 
const memberId= req.body.member;
    db.query(`SELECT pt_session.session_id, pt_session.session_day,pt_session.start_time,pt_session.end_time,pt_session.training_notes,member.name,instructor.instructor_name FROM ((pt_session INNER JOIN member on pt_session.pt_member=member.member_id) INNER JOIN instructor ON pt_session.pt_instructor=instructor.instructor_id) WHERE pt_member
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
 
 
app.post("/instructor/workout",(req,res)=>{
 
    db.query(`SELECT workout_session.session_id,workout_session.workout_date,workout_session.room,workout_session.max_availability,workout_session.start_time,workout_session.end_time,member.name,instructor.instructor_name FROM((workout_session INNER JOIN member ON workout_session.workout_member=member.member_id)INNER JOIN instructor ON workout_session.workout_instructor=instructor.instructor_id)`,(err,results)=>{

    if(err)
    {
        res.send({err:err})
    }
    else{
        res.send(results)
    }

})
})

 
 
 
app.post("/instructor/workout/id",(req,res)=>{
 
    const instructorId= req.body.instructor;
        db.query(`SELECT workout_session.session_id,workout_session.workout_date,workout_session.room,workout_session.max_availability,workout_session.start_time,workout_session.end_time,member.name,instructor.instructor_name FROM((workout_session INNER JOIN member ON workout_session.workout_member=member.member_id)INNER JOIN instructor ON workout_session.workout_instructor=instructor.instructor_id) WHERE workout_instructor
        = ${instructorId}`,(err,results)=>{
 
        if(err)
        {
            res.send({err:err})
        }
        else{
            res.send(results)
        }
 
    })
})
 
 
 
 
app.post("/instructor/pt",(req,res)=>{
 
    db.query(`SELECT pt_session.session_id, pt_session.session_day,pt_session.start_time,pt_session.end_time,pt_session.instructor_notes,pt_session.training_notes,member.name,instructor.instructor_name FROM ((pt_session INNER JOIN member on pt_session.pt_member=member.member_id) INNER JOIN instructor ON pt_session.pt_instructor=instructor.instructor_id)`,(err,results)=>{
 
    if(err)
    {
        res.send({err:err})
    }
    else{
        res.send(results)
    }
 
})
})
 
 
app.post("/instructor/pt/id",(req,res)=>{
 
const instructorId= req.body.instructor;
    db.query(`SELECT pt_session.session_id, pt_session.session_day,pt_session.start_time,pt_session.end_time,pt_session.instructor_notes,pt_session.training_notes,member.name,instructor.instructor_name FROM ((pt_session INNER JOIN member on pt_session.pt_member=member.member_id) INNER JOIN instructor ON pt_session.pt_instructor=instructor.instructor_id) WHERE pt_instructor
    = ${instructorId}`,(err,results)=>{
 
    if(err)
    {
        res.send({err:err})
    }
    else{
        res.send(results)
    }
 
})
})
 
 
 
 
//return profile information
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
 
 
