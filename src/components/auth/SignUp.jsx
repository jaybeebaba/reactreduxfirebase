import React, {useState} from 'react'
import { connect } from "react-redux"
import { signUp } from '../../actions/authActions'

const SignUp = ({signUp}) => {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 

  

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp({email, password})
    }
    


    return (
        <div className='container'>

            <form className='mt-3' onSubmit={handleSubmit}>
            <legend className='mt-3 text-danger'><h4>Sign Up</h4></legend>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-danger">Sign Up</button>
</form>

            
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: (creds) => {dispatch(signUp(creds))}
  }
}

export default connect(null, mapDispatchToProps)(SignUp)

