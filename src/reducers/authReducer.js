import { toast } from "react-toastify"

const initState = {

}

const authReducer = (state = initState, action) =>{
switch(action.type){
    case "SIGN_IN":{
        toast.success("Sign in successfull")
        return state
    }
    case "SIGN_IN_ERROR":{
        toast.error("Sign in error")
        return state
    }
    case "SIGN_UP":{
        toast.success("Sign up successfull")
        return state
    }
    case "SIGN_UP_ERROR":{
        toast.error("Sign up error")
        return state
    }
    case "SIGN_OUT":{
        toast.success("You signed out")
        return state
    }
    default:{
        return state
    }
}
}

export default authReducer