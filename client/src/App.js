import logo from './logo.svg';
import React, {useState,useEffect} from "react"
import './App.css';
import DynamicTable from "./components/DynamicTable"
const Axios = require("axios")

  function App() {
  const [usernameLog,setUsername] = useState("")
  const [passwordLog,setPassword]= useState("")
  const [userInfo,setUserinfo] = useState([])
  const [ptsession,setPt]= useState([])
  const[workout, setWorkouts]= useState([])
  const [loginStatus,setLogin]=useState(false)
  const [userType,setUserType] = useState("Please Log In")


  const TableData=[
    {id:1, fullName:"Noor Khan", age:25, city:"Patna"},
    {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
    {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
    {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
    {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
]

//Takes user type
//Gets profile Information
const getMember= (memberid) =>{
  Axios.post("http://localhost:3001/member",{
    member:memberid
  })
  .then((response)=>{
    //console.log(response)
       setUserinfo(response.data);
        })
}

const getInstructor= (instructorid) =>{
  Axios.post("http://localhost:3001/instructor",{
    instructor:instructorid
  })
  .then((response)=>{
    //console.log(response)
       setUserinfo(response.data);
        })
}


const getPt= (memberid) =>{
  Axios.post("http://localhost:3001/member/pt/id",{
    member:memberid
  })
  .then((response)=>{
    console.log(response.data)
      setPt(response.data)
      

      //setUserdata(response.data[0])
    })
}


const getWorkouts= (memberid) =>{
  Axios.post("http://localhost:3001/member/workout/id",{
    member:memberid
  })
  .then((response)=>{
    console.log(response.data)
      setWorkouts(response.data)      

      //setUserdata(response.data[0])
    })
}


const getInstructorPt= (instructorid) =>{
  Axios.post("http://localhost:3001/instructor/pt/id",{
    instructor:instructorid
  })
  .then((response)=>{
    console.log(response.data)
      setPt(response.data)
      

      //setUserdata(response.data[0])
    })
}


const getInstructorWorkouts= (instructorid) =>{
  Axios.post("http://localhost:3001/instructor/workout/id",{
    instructor:instructorid
  })
  .then((response)=>{
    console.log(response.data)
      setWorkouts(response.data)      

      //setUserdata(response.data[0])
    })
}


  //Checks user credential and user type
  const login = async () =>{

    const user=await Axios.post("http://localhost:3001/login",{
      username:usernameLog,
      password:passwordLog,
    })
    .then((response)=>{
      
      console.log(response.data[0])
        return response.data[0];

    })
    
    if(user.member)
    {
      await getMember(user.member)
      await getPt(user.member)
      await getWorkouts(user.member)
      setLogin(true)
      setUserType("Member")
    }
    else
    {
      await getInstructor(user.instructor)
      await getInstructorPt(user.instructor)
      await getInstructorWorkouts(user.instructor)
      setLogin(true)
      setUserType("Instructor")

    }



    // const print = (test) =>
    // {
    //   console.log(test)
    // }
    
    console.log(user)
  }
   
  function AccountTable(props)
  {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
    {
      return <DynamicTable userData={userInfo}/>
    }
  }
  
  function PtTable(props)
  {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
    {
      return <DynamicTable userData={ptsession} />
    }
  }

  function WorkoutTable(props)
  {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
    {
      return <DynamicTable userData={workout} />
    }
  }

  

  return (
    <div className="App">
          <h1>{userType}</h1>

      <div className="login" >
        <h1>Login</h1>
        <label>Username</label>
        <input 
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input 
          type="password"
          onChange={(e)=>{
            setPassword(e.target.value)
        }}
        />
        <button onClick={login}> Login </button>
      </div>

      <div className = "profile" style={{
      display: 'grid',
      justifyContent: 'center',
      height: '25vh',
    }}>
            <h1>Account Info</h1>
            <AccountTable isLoggedIn={loginStatus} />

      </div>

      <div className = "session" style={{
      display: 'grid',
      justifyContent: 'center',
      height: '25vh',
    }}>
        <h1>Session Info</h1>
        <PtTable isLoggedIn={loginStatus} />
      </div>

      <div className = "workout" style={{
      display: 'grid',
      justifyContent: 'center',
      height: '25vh',
    }}>
        <h1>Workout Info</h1>
        <WorkoutTable isLoggedIn={loginStatus} />
      </div>


    </div>

  );

}

export default App;
