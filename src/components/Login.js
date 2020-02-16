import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import seedImage from '../images/seed.png'
import { useHistory, withRouter } from 'react-router-dom'

var auth = false
export {auth}
function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

 const validateLogin = (e) => {
    e.preventDefault();
    axios.interceptors.response.use(function (response) {
        auth = true
        history.push("/home/")
        console.log("entrei2")
        return response
      }, function (error) {
        document.getElementById("loginError").innerHTML = "[Error] Incorrect username and/or password!"
        auth = false
        return error.response
      })
    axios.get("https://localhost:5001/api/seedling/user/login?username=" + username + "&password=" + password)
 }

  return ( 
      <div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h1> Seedling Online Judge</h1>
                <img style={{marginTop: "17px"}} src={seedImage} alt="SOJ" height="42" width="42" />
          </div>
          <div style={{justifyContent:'center', alignItems: "center"}}>
                <h3 style={{textAlign: "center"}}> Login</h3>
                <form style={{textAlign: "center"}}>
                    <p>
                        <label style={{textAlign: "center"}}>
                            Username:
                            <input type="text" name="username" onChange={(event) => setUsername(event.target.value)} />
                        </label>
                    </p>
                    <p>
                        <label style={{textAlign: "center"}}>
                            Password:
                            <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                        </label>
                    </p>
                    <input type="submit" value="Login" onClick={(e) => validateLogin(e)}/>
                </form>
                <p align="center" id="loginError"></p>
          </div>
      </div>
  )
}

export default withRouter(Login)