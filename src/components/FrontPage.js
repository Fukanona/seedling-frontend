import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import CreateProfile from './CreateProfile'
import Home from './Home'
import {auth} from './Login'

function FrontPage() {
    return ( 
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/createProfile/" component={CreateProfile} />
            <Route path="/home/" render = {() => { console.log(auth); 
                if(auth) {return(<Home />)} else { return(<Redirect to="/" />)}}}/>
        </Router>
    )
}

export default FrontPage