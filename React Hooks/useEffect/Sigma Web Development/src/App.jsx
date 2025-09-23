import { useState } from "react"
import { useEffect } from "react"
import Navbar from "./navbar"
export default function App()
{
const [count,setcount]=useState(0)
const [color,setcolor]=useState(0)
useEffect(() => {
  alert('I Will Run When Count Is Changed')
  setcolor(color+1)
}, [count])

return(
    <>
    <Navbar color={"Navy"+"Blue "+color}/>
    <h3>Count value is {count}</h3>
    <button onClick={()=>{setcount(count+1)}}>Click Me</button>
    </>
  );

}