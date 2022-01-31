import React from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import { ToastContainer} from "react-toastify"
import { connect } from "react-redux"
import "react-toastify/dist/ReactToastify.css"

function App({uid}) {
 
  return (
    <div className="App">
    <BrowserRouter>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/signin" element={uid? (<Navigate to="/" />) : (<SignIn/>)}/>
        <Route path="/register" element={ uid ? (<Navigate to="/" />)  : (<SignUp/>)}/>
        <Route path="/" element={ uid ? ( <Dashboard/>) : (<SignIn/>) }/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    uid: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(App);
