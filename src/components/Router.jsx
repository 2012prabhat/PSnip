// import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from "./Dashboard"
import "../css/main.css"
import "../css/login.css"
import "../css/dashboard.css"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
