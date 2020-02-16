import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function Home() {

  const [problem, setProblem] = useState(null)
  const [ids, setIds] = useState(null)

  useEffect(() => {
    getAllProblemsIds()
  }, []);

  const getProblem = () => {
    var id = document.getElementById("select").value
    axios.get("https://localhost:5001/api/seedling/problem/" + id).then((response) => {
      setProblem(response.data.content)
    })
  }

  const getAllProblemsIds = () => {
    axios.get("https://localhost:5001/api/seedling/problem/ids").then((response) => {
      setIds(response.data.content)
    })
  }

  const createSelectItems = (data) => {
    let items = []        
     for (var i in data) {             
          items.push(<option key={data[i]} value={data[i]}>{"Problem " + data[i]}</option>);   
     }
     return items;
  }

  return ( 
    <div id="problems" align="center">
      <select id="select" onChange={(value) => {getProblem()}}>
        <option value="" selected disabled hidden>Choose here</option>
        {createSelectItems(ids)}
      </select>
      <div id="content">{
        problem == null ? (<p align="center">Select a problem</p>) : (
        <div>
          <h1 align="center">{problem.name}</h1>
          <h3 align="center">{problem.level}</h3>
          <h6 align="center">By: {problem.author.username}</h6>
          <p align="center" dangerouslySetInnerHTML={{ __html: problem.description }}></p>  
        </div>
      )}</div>
    </div>
  )
}

export default withRouter(Home)