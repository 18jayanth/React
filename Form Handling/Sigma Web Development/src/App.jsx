import { set, useForm } from "react-hook-form"
import './App.css'
export default function App()
{
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay=(d)=>
  {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>
      {
        resolve();

      },d*1000)
        })}

   const onSubmit = async(data) =>
    { 
      let r=await fetch('http://localhost:3000/',
        {method:"POST", 
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify(data)})
      let res=await r.text()
      console.log(data,res)
      //await delay(4)//simulating network delay
      // if(data.username!=='Shubham')
      // {
      //   setError("myform",{message:"Your Form is not submitted because username is not Shubham"})
      // }
      // if(data.username==='Jayanth'){
      //   setError("blocked",{message:"Your Form is not submitted because username is Jayanth"})
      // }
     
    }

  return(
    <div className="container">
      {isSubmitting && <div>Loading..</div>}
      <form  className=" border-4 w-100"onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("username",{required:{value:true,message:"This Field is required"},minLength:
        {value:3,message:"Minimum Length is 3"},maxLength:{value:8,message:"Maximum Length is 8"}})} placeholder="Enter Your UserName:"/>
      {errors.username && <div className="text-red-300">{errors.username.message}</div>}
      <br/><br/>
      {errors.password && <div className="text-red-300">{errors.password.message}</div>}
      <input type='password' {...register("password" ,{required:{value:true,message:"This Field is required"},minLength:
        {value:3,message:"Minimum Length is 3"},maxLength:{value:8,message:"Maximum Length is 8"}})}  placeholder="Enter Your Password:"/>
      
      <br/><br/>
      {errors.myform && <div className="text-red-300">{errors.myform.message}</div>}
      {errors.blocked && <div className="text-red-300">{errors.blocked.message}</div>}
      <input disabled={isSubmitting}  type='submit' value='submit'/>
      </form>
      </div>
    
    
  )

}