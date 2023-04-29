import React from 'react'
import './SignUp.css'
import Axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function SignUp() {
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [number,setNumber]=useState("")
  const [password,setPassword]=useState("");
  const navigate=useNavigate()
  
  async function Submit(e){
    e.preventDefault()
    try{
      const res=await Axios.post('http://localhost:5000/user/signup',{
        firstname,lastname,email,number,password,
      })
      if(res){
        const {data}=res
      localStorage.setItem('token', data.token);
        alert('successfully signup!')
        navigate('/login')
      }
    }catch(e){
      console.log(e)
    }
  }

      
    
  
  return (
    <div>
        <form className='Box-1' onSubmit={Submit}>
            <h1 className='name'>Sign-Up</h1>
            {/* <p style={{ color: "white" }}>{this.state.info}</p> */}
            <div className='row1'>
            <input
                type="text"
                id="firstname"
                onChange={(e)=>setFirstname(e.target.value)}
                placeholder="First Name"
                required
                // onChange={(e) => {
                //   this.setState({ username: e.target.value });
                // }}
                
            />
            <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                onChange={(e)=>setLastname(e.target.value)}
                required
                // onChange={(e) => {
                //   this.setState({ username: e.target.value });
                // }}
               
            />

            </div>
            <div className='row1'>
            <input
                type="email"
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                required
                // onChange={(e) => {
                //   this.setState({ username: e.target.value });
                // }}
                
            />
            <input
                type="number"
                id="number"
                onChange={(e)=>setNumber(e.target.value)}
                placeholder="Phone Number"
                required
                // onChange={(e) => {
                //   this.setState({ username: e.target.value });
                // }}
               
            />
            </div>
            <div className='row1'> 
            <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                id="password"
                name="password"
                required
                // onChange={(e) => {
                //   this.setState({ password: e.target.value });
                // }}
                
              />
              <input
                type="password"
                placeholder="Confirm Password"
                id="cpassword"
                name="cpassword"
                required
                // onChange={(e) => {
                //   this.setState({ cpassword: e.target.value });
                // }}
              />
            </div>
            <button type="submit" className="submit" >
              Submit
            </button>
            <p style={{ color: "white" }}>
              Have an account?{" "}
              <a style={{ color: "primary" }} href="/login">
                Click here
              </a>
            </p>
        </form>
    </div>
  )
}

export default SignUp