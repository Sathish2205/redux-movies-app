import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

 const firebaseConfig = {
    apiKey: "AIzaSyBNyiEVgev7_Xc1TIyNFYzX2ih2BB1SyCc",
    authDomain: "movies-app-8f3eb.firebaseapp.com",
    projectId: "movies-app-8f3eb",
    storageBucket: "movies-app-8f3eb.firebasestorage.app",
    messagingSenderId: "115533146705",
    appId: "1:115533146705:web:82a642ae002d69d707e670",
    measurementId: "G-78Z86TTQB4",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

const UserAuth=()=>{
    const [current,setCurrent]=useState();

    useEffect(()=>{
        let x=onAuthStateChanged(auth,(user)=>{setCurrent(user)})
         return x
    },[])
   return current
}

export default UserAuth;

  
 
 


  // Initialize Firebase
