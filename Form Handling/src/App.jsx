import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";


function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();
  //is submitting is used to wait till the next submit
  //you cannot submit between one submit button will be disabled
  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>
      {
        resolve()},
      d*1000);
    })
  }
  const onSubmit = async(data) => 
    {
      //await delay(4)//simulating network delay
      //console.log(data)

      //custom error
      //errors from server side
      // if(data.username==="shubham")
      // {
      //   setError("myForm",{message:"Your Form is not valid because user creditials not valid"})
      // }
      // else if(data.username==="Jayanth")
      // {
      //   setError("blocked",{message:"Sorry This User Is Blocked"})
      // }

     let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
      let res=await r.text()
      console.log(data,res)
      
    }

  return (
    <>
    {isSubmitting && <div>Loading!!!</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter Your Username"
            {...register("username", {
              required: {value:true,message:"This Field Is Required"},
              minLength: {
                value: 3,
                message: "Minimum Length of Username Should be 3",
              },
              maxLength: {
                value: 8,
                message: "Minimum Length of Username Should be 8",
              },
            })}
            type="text"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="Enter Your Password "
            {...register("password",{ minLength: {
              value: 3,
              message: "Minimum Length of Password Should be 3",
            },})}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting}type="submit" value="submit" />
          {errors.myForm && <div className="red">{errors.myForm.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
