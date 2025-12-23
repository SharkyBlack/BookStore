import React from 'react'

import Course from './Courses/Courses'
import Home from './Home/Home'
import {Route,Routes} from 'react-router-dom'
import Signup from './components/Signup'


const App = () => {
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen duration-300">
      {/* <Home />
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
