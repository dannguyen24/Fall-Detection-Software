import { AuthContext } from "../context/authContext"
import { useContext, useState } from "react"
import axios from 'axios';

export const useLogin =  () => {
        const [error, setError] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const {dispatch} = useContext(AuthContext)

        const login = async(email, password) => { 
                setIsLoading(true)
                setError(null)
                try {
                        console.log("Submitting:", {email, password });
                        const result = await axios.post('http://localhost:5000/api/users/login', {email, password});
                        console.log("Success:", result.data);
                        //save the user to local storage
                        localStorage.setItem('user', JSON.stringify(result.data));
                        //update the auth context
                        dispatch({type: 'LOGIN', payload: result.data})
                        setIsLoading(false)

                } catch (err) {
                        setError(err.response?.data.message || err.message);
                        setIsLoading(false)
                        console.log("Error:", err.response?.data || err.message);
                }
        }
        return {login, isLoading, error}
      
}
