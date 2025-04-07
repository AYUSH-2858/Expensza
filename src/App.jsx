import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing'
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';

function App() {
  const [isloginPage, setIsloginPage] = useState(false)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing  setIsloginPage={setIsloginPage}/>} />
        <Route path="/auth" element={<Auth isloginPage={isloginPage}  setIsloginPage={setIsloginPage}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
