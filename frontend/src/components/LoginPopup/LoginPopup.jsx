import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { useEffect } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up");
    const {url,token,setToken} = useContext(StoreContext);
    
    const [data ,setData ] = useState({
        name:"",
        email:"",
        password:""
    })
    const onchangeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    }
    useEffect(()=>{
        console.log(data);
    },[data]);
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input name = 'name' onChange={onchangeHandler} value={data.name} type="text" placeholder='Your Name ' required/>}
                <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Youe Email' required/>
                <input name='password' onChange={onchangeHandler} value={data.password}type="password" placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing , i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login" ? <p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
            <p>Already have an Account ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup