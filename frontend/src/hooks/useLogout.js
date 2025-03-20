import  { useContext } from "react";
import { AuthContext } from "../context/authContext";
export const useLogout = () => {
        //When loggin out, we don't need to send the request to the backend
        //We just need to (1) remove the user from local storage and (2) update the auth context
        const {dispatch} = useContext(AuthContext)
        const logout = () => {
                //remove user from local storage
                localStorage.removeItem('user');
                
                //dispatch logout action
                dispatch({type: 'LOGOUT'})
        }

        return {logout}
}