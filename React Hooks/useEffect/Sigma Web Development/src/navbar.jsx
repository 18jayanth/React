import React, { useEffect } from 'react'

const Navbar = ({color}) => {
//Case 1:run on every render
useEffect(() => {
alert('I Will Run On Every Render')
  })
//Case 2:run only on first render
useEffect(() => {
    alert('I Will Run On First Render')
      },[])
//Case 3:run only when particular a values change
useEffect(() => {
  alert('I Will Run When Color Is Changed')
}, [color]) 
//example when unmounting
useEffect(() => {
return () => {
    alert('Unmounting is done')
  }
}, [])




  return (
    <div>
      <h4>This color is {color}</h4>
    </div>
  )
}

export default Navbar
