import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Regester = () => {
      const {creatUser,googleLogin,setUser}=use(AuthContext)
  const [show,setShow]=useState(false);
  const navigate =useNavigate()
  const hendleRegester = (event)=>{
    event.preventDefault();
    const form =event.target;
    const email =form.email.value;
    const password=form.password.value;
    // const photo = form.photo.value;
    // const name =form.name.value;
    // console.log({email,password,name,photo})
    const regexp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/

    if(!regexp.test(password)){
      toast("❌ Password must have at least 6 characters, one uppercase letter, and one lowercase letter.");
      return ;
    }

    creatUser(email,password)
    .then(result =>{
      toast("Your Regester successfully")
      navigate("/")
      console.log(result.user)
      // const user =result.user;

      // updateProfile(user,{
      //   displayName:name,
      //   photoURL:photo
      // })
      // setUser({...user,displayName:name,photoURL:photo})

      // console.log(user)
      form.reset();
      setUser()
    })
    .catch(error =>{
      console.log(error)
    })
  }


  const hendleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      navigate("/")
      toast("Your Regester successfull")
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }
 
    return (
         <div className="flex justify-center min-h-screen items-center text-black bg-[url('https://i.pinimg.com/736x/4d/88/2b/4d882bf1dd703c937cf59591e927ba22.jpg')] bg-cover bg-center">
      <div className="card bg-base-100 w-11/12 max-w-sm shrink-0 shadow-2xl ">
        <form onSubmit={hendleRegester} className="card-body bg-[url('https://i.pinimg.com/736x/28/4f/a6/284fa6e723bcd3634f0d54e354427b8e.jpg')] bg-cover bg-center rounded-xl">
            <h1 className="text-2xl font-bold text-center">Regester your account</h1>
          <fieldset className="fieldset">
            {/* Name field */}
            <label className="label text-white">Name</label>
            <input type="text"
            name='name'
             className="input" 
             placeholder="Your Name" required />
            
            {/* Photo field */}
            <label className="label text-white">Photo Url</label>
            <input type="text" 
            name='photo'
            className="input"
            placeholder="Your Photo Url" required />
            {/* email field */}
            <label className="label text-white">Email</label>
            <input type="email"
            name='email'
             className="input"
             placeholder="Email" required />

            {/* password field */}
            <div className="relative">
              <label className="label text-white">Password</label>
            <input type={show ?"text" : "password"} 
            name='password'
            className="input" 
            placeholder="Password" required />

            <span onClick={() =>setShow(!show)} className="absolute top-6 right-6 z-50">
              
              {
                show ?<FaEyeSlash size={24} /> :<FaEye size={24} />
              }

            </span>

            </div>

             <button type='submit' className="btn btn-neutral mt-4">Regester</button>
             <div className="flex w-full flex-col h-10">
               <div className="divider divider-success">OR</div>
              </div>
            <button onClick={hendleGoogleLogin} className="btn mb-5 "> <FaGoogle size={24} className="text-[#34A853]" /> Regester with Google</button>
            <p className="font-semibold text-center text-white text-lg">Already Have An Account ? <Link className="text-green-600" to="/Login">Login</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Regester;