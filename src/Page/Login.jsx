import React, { use, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
      const {Login,Forgetpin,googleLogin}=use(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();
  const emailRef =useRef(null)
  const [show,setShow]=useState(false)

  const hendlelogin = (event)=>{
    event.preventDefault();
    const form =event.target;
    const email =form.email.value;
    const password=form.password.value;
    Login(email,password)
    .then(result =>{
      navigate("/")
       toast("Your Login successfull")
      form.reset();
      console.log(result.user)
      navigate(`${location.state?location.state:"/"}`)
     
    })
    .catch(error =>{
      toast.error("invalide password")
      console.log(error.message)
    })
  }



   const hendleGoogleLogin = () =>{
      googleLogin()
      .then(result =>{
        navigate("/")
        toast("Your LogIn successfull")
        console.log(result.user)
      })
      .catch(error =>{
        console.log(error)
      })
    }
    return (
          <div className="flex justify-center min-h-screen items-center text-black bg-[url('https://i.pinimg.com/1200x/09/51/16/0951167e007e1c24616ced34aac59de4.jpg')] bg-center bg-cover">
      <div className="card bg-base-100 w-11/12 max-w-sm shrink-0 shadow-2xl ">
        <form onSubmit={hendlelogin}  className="card-body bg-[url('https://i.pinimg.com/1200x/09/51/16/0951167e007e1c24616ced34aac59de4.jpg')] bg-cover bg-center text-white rounded-xl">
            <h1 className="text-3xl font-bold text-center">Login your account</h1>
          <fieldset className="fieldset">
            {/* email field */}
            <label className="label">Email</label>
            <input name="email" ref={emailRef} type="email" className="input text-black" 
            placeholder="Email" 
            required
            />
            
            {/* password field */}
            <div className="relative">
                          <label className="label ">Password</label>
                        <input type={show ?"text" : "password"} 
                        name='password'
                        className="input text-black " 
                        placeholder="Password" required  />
            
                        <span onClick={() =>setShow(!show)} className="absolute cursor-pointer top-6 right-6 z-50">
                          
                          {
                            show ?<FaEyeSlash size={24} /> :<FaEye size={24} />
                          }
            
                        </span>
            
                        </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>

            <div className="flex w-full flex-col h-10">
               <div className="divider divider-success">OR</div>
            </div>
            <button onClick={hendleGoogleLogin} className="btn mb-5 "> <FaGoogle size={24} className="text-[#34A853]" /> Regester with Google</button>

            <p className="font-semibold text-lg">Dont't Have An Account ? <Link className="text-green-600" to="/Regester">Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Login;