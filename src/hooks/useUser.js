import { useDispatch, useSelector } from "react-redux"
import { authenticateUser as authUser } from "../redux/slices"
import { useNavigate } from "react-router"

export const useUser = () =>{
    const userData = useSelector((state)=> state.user.userData)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const authenticateUser = (data)=>{
        dispatch(authUser(data))
            .unwrap()
            .then(()=>{navigate("/")})
    }

    return{userData, authenticateUser} 
}