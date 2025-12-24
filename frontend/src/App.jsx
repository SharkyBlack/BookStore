import React from 'react'
import { Toaster } from 'react-hot-toast'
import Course from './Courses/Courses'
import Home from './Home/Home'
import {Navigate, Route,Routes} from 'react-router-dom'
import Signup from './components/Signup'
import { useState } from 'react'
import { useAuth } from './context/AuthProvider'


const App = () => {
  const[authUser,setAuthUser]=useState(null);
    console.log(authUser);
  

  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen duration-300">
      {/* <Home />
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser ?<Course/>:<Navigate to='/signup'/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
