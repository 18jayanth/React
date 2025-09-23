import {React,useContext} from 'react'
import Component from './Component'
import {counterContext} from './context/context.js'
const Button = () => {
    const value=useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component/></span>Button</button>
    </div>
  )
}

export default Button
