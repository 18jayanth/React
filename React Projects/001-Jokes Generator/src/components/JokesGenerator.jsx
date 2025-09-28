import React, { useState } from 'react'
import './JokesGenerator.css'
const JokesGenerator = () => {
const[joke,setjoke]=useState("")

const fetchAPI=()=>
{
fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
.then((res)=>res.json())
.then((data)=>setjoke(data.joke))
}

  return (
    <div className='joke'>
    <button onClick={fetchAPI}>Click Me For a Joke</button>
    <p>{joke}</p>
    </div>
  )
}

export default JokesGenerator
