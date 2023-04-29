// import { Axios } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  async function Submit(e){
    e.preventDefault()
    try{
    const res=await Axios.post("http://localhost:5000/user/login",{
      email,password
    })
    if(res){
      const {data}=res
      localStorage.setItem('token', data.token);
      alert('login successfelly')
       navigate('/meet')
    }
  }catch(e){
    console.log(e)
  }

  }
  return (
    <div  style={{display:'flex'}}>
        <form className='Box-1 login' onSubmit={Submit}>
            <h1>Login</h1>
            <input
            type="email"
            name="email"
            id="email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email id"
            required
          />
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            id="password"
            name="password"
            required
          />
          <button type='submit'className='submit'>
            Submit
          </button>
          <p style={{ color: "white" }}>
            Don't have an account?{" "}
            <a style={{ color: "primary" }} href="/signup">
              Click here
            </a>
          </p>
        </form>
    </div>
  )
}

export default Login
