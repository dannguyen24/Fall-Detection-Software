import axios from "axios"
import { AuthContext } from "../context/authContext"
import { useContext, useState } from "react"

export const useSignUp = () => {
        const [error, setError] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const {dispatch} = useContext(AuthContext)

        const signup = async (username, email, password) => {
                //Set loading to be true
                setIsLoading(true)
                setError(null)
                try {

                        console.log("Submitting:", { username, password, email});
                        const result = await axios.post('http://localhost:5000/api/users/signup', {username, password, email});
                        console.log("Success:", result.data);

                        //save the user to local storage
                        localStorage.setItem('user', JSON.stringify(result.data));

                        //update the auth context
                        dispatch({type: 'LOGIN', payload: result.data})
                        setIsLoading(false)
                        
                } catch (err) {
                        // Add error feedback to the user
                        setError(err.response?.data.message || err.message);
                        setIsLoading(false)
                        console.log("Error:", err.response?.data || err.message);
                }
                
        }

        return {signup, isLoading, error}
}