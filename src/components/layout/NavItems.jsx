import React from 'react'
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from '../../actions/authActions'

const NavItems = ({uid, signOut}) => {

  const handleSignOut = ()=>{
    signOut()
  }
    const items = uid ? 
    ( 
        <NavLink onClick={handleSignOut} to="/" className='nav-link'>Logout</NavLink>
      )
    
     : 
     (  <>
        <NavLink to="/signin" className='nav-link'>Signin</NavLink> 
        <NavLink to="/register" className='nav-link'>SignUp</NavLink></> )
    return (
        <div className='d-flex'>
           
          {items}
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
      uid: state.firebase.auth.uid
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return {
      signOut: ()=> dispatch(signOut())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavItems)
