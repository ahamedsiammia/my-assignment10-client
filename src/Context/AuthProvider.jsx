import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
const provider = new GoogleAuthProvider();
export const AuthContext =createContext();
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null);
    const [loading ,setLoading]=useState(true);



      useEffect(()=>{
        const unsubsrcibe =onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubsrcibe()
        }
    },[])

    // google login 

    const googleLogin = () =>{
        return signInWithPopup(auth,provider)
    }

    // regester function
    const creatUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    // Log Out function
    const Logout =()=>{
        return signOut(auth)
    }


    // Log in function 
    const Login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }



    const AuthData ={
        user,
        setUser,
        creatUser,
        loading,
        setLoading,
        Logout,
        Login,
        googleLogin
    }

    return <AuthContext value={AuthData}> {children} </AuthContext>
};

export default AuthProvider;