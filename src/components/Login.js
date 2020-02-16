import React from 'react'
import '../App.css'
import axios from 'axios'
import seedImage from '../images/seed.png'

function Login() {

 

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
                            <input type="text" name="username" />
                        </label>
                    </p>
                    <p>
                        <label style={{textAlign: "center"}}>
                            Password:
                            <input type="password" name="password" />
                        </label>
                    </p>
                    <input type="submit" value="Enviar" />
                </form>
          </div>
      </div>
  )
}

export default Login