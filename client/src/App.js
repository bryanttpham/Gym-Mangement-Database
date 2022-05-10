import logo from './logo.svg';
import React, {useState,useEffect} from "react"
import './App.css';
const Axios = require("axios")


function App() {
  const [usernameLog,setUsername] = useState("")
  const [passwordLog,setPassword]= useState("")
  const [userInfo,setUserinfo] = useState("")
  const [userData,setUserdata] = useState("")
  const [loginStatus,setloginStatus]= useState("")
  const [ptsession,setpt]= useState([])


  const TableData=[
    {id:1, fullName:"Noor Khan", age:25, city:"Patna"},
    {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
    {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
    {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
    {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
]

  //Checks user credential and user type
  const login = () =>{
    Axios.post("http://localhost:3001/login",{
      username:usernameLog,
      password:passwordLog,
    })
    .then((response)=>{
      

      console.log(response.data)

      if(response.data[0])
      {
      setUserinfo(response.data[0])
      
      setloginStatus("True")
      }
    })
    
  }

//Takes user type
//Gets profile Information
  const getUser= () =>{
    Axios.post("http://localhost:3001/member",{
      member:userInfo.member
    })
    .then((response)=>{
        console.log(response.data[0])
        setUserdata(response.data[0])
      })
  }


  const getPt= () =>{
    Axios.post("http://localhost:3001/member/pt",{
      member:userInfo.member
    })
    .then((response)=>{
        console.log(response.data[0])
        

        setUserdata(response.data[0])
      })
  }


  const getWorkouts= () =>{
    Axios.post("http://localhost:3001/member/pt",{
      member:userInfo.member
    })
    .then((response)=>{
        console.log(response.data[0])
        

        setUserdata(response.data[0])
      })
  }
  useEffect(()=>{
    if(loginStatus=="True")
    {
      getUser();
    }

    console.log(userData)
  })
  return (
    <div className="App">
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
        <table>
          <thead>
            <th>ID Number</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Join Date</th>
            <th>Expiration Date</th>
            <th>Email</th>
          </thead>
          <tbody>
              <td> {userData.id_number}</td>
              <td>{userData.name} </td>
              <td>{userData.address} </td>
              <td>{userData.age}</td>
              <td>{userData.gender}</td>
              <td>{userData.phone_number} </td>
              <td>{userData.join_date}</td>
              <td>{userData.expiration_date}</td>
              <td>{userData.email}</td>
          </tbody>
        </table>
      </div>


      <div className = "pt" style={{
      display: 'grid',
      justifyContent: 'center',
      height: '25vh',
    }}>
      <h1>PT Sessions</h1>
        <table>
          <thead>
            <th>Session Id</th>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Training Notes</th>
            <th>Instructor</th>
          </thead>
          <tbody>
              <td>S1</td>
              <td> Monday</td>
              <td>5:45 PM</td>
              <td>6:45 PM</td>
              <td>First day was very hard</td>
              <td>John Doe </td>
          </tbody>
          <tbody>
              <td>S1</td>
              <td> Wednesday</td>
              <td>5:45 PM</td>
              <td>6:45 PM</td>
              <td>Second day was hard but getting better </td>
              <td>John Doe </td>
          </tbody>
          <tbody>
              <td>S1</td>
              <td> Friday</td>
              <td>5:45 PM</td>
              <td>6:45 PM</td>
              <td> </td>
              <td>John Doe </td>
          </tbody>
        </table>
      </div>
      <div className = "workout" style={{
      display: 'grid',
      justifyContent: 'center',
      height: '25vh',
    }}>
      <h1>Workout Sessions</h1>
        <table>
          <thead>
            <th>Session Id</th>
            <th>Workout Date</th>
            <th>Room Number</th>
            <th>Workout Course</th>
            <th>Instructor</th>
            <th>Start Time</th>
            <th>End Time</th>
          </thead>
          <tbody>
              <td>S1</td>
              <td> Monday</td>
              <td>5:45 PM</td>
              <td>6:45 PM</td>
              <td>First day was very hard</td>
              <td>John Doe </td>
          </tbody>
          <tbody>
              <td>S1</td>
              <td> Wednesday</td>
              <td>5:45 PM</td>
              <td>6:45 PM</td>
              <td>Second day was hard but getting better </td>
              <td>John Doe </td>
          </tbody>
          <tbody>
              <td>S1</td>
              <td> Friday</td>
              <td>5:45 PM</td>
              <td>6:45 PM</td>
              <td> </td>
              <td>John Doe </td>
          </tbody>
        </table>
      </div>
    </div>

  );

}

export default App;
