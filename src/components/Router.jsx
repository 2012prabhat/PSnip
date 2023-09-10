// import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from "./Dashboard"
import Signup from './Signup'
import ForgotPass from './ForgotPass'
import "../css/main.css"
import "../css/login.css"
import "../css/dashboard.css"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/resetPass" element={<ForgotPass/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
