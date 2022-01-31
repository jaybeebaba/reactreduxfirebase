import React, {useState} from 'react'
import { connect } from "react-redux"
import { signIn } from '../../actions/authActions'

const SignIn = ({signIn}) => {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 

  

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn({email, password})
    }
    


    return (
        <div className='container'>

            <form className='mt-3' onSubmit={handleSubmit}>
            <legend className='mt-3 text-danger'><h4>Sign In</h4></legend>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-danger">Sign In</button>
</form>

            
        </div>
    )
}



const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: (creds) => {dispatch(signIn(creds))}
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
