import React, {useState} from "react";
import ImgLogo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const api_url = development ? "http://localhost:5000/" : "/";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const doLogin = async () => {
    try{
      const loginRes = await axios.post(`${api_url}login`, {
        email: email,
        password: password,
      });
      if(loginRes.data.status === 1){
        navigate("/dashboard");
      }else{
        alert("Login Error");
        console.log(loginRes.data);
      }
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-end my-2 pr-5">
        <div className="flex gap-2 text-sm">
          <p className="text-gray-500">Don't have account? </p>
          <a href="#">
            <strong className="text-blue-700">
              Contact us for princing
            </strong>
          </a>
        </div>
      </div>
      <div className="mx-auto py-5" style={{ maxWidth: "400px" }}>
        <img src={ImgLogo} alt="logo" className="mx-auto w-2/3 mb-5" />
        <div className="flex flex-col">
          <div className="flex flex-col  mb-10">
            <h1 className="text-center text-3xl font-semibold">Welcome to Brandindex</h1>
            <h2 className="text-center text-gray-500 text-sm mt-2">Sign in using your approved credentials below.</h2>
          </div>
          <div className="flex flex-col mt-2 gap-4">
            <input type={"text"} className="border outline-none text-sm rounded-md w-full px-4 py-2 focus:border-black" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type={"password"} className="border outline-none text-sm rounded-md w-full px-4 py-2 focus:border-black" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <div className="flex flex-col">
              <button className="bg-blue-400 text-white px-4 flex w-max py-2 text-sm" onClick={doLogin}>
                Login
              </button>
              <a href="#" className="text-center text-blue-700 text-xs">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage