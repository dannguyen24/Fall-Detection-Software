import './LoginForm.css';
import { FaUserAlt, FaLock} from "react-icons/fa";
import React, {useState} from "react";
import { useLogin } from "../../hooks/useLogin";
const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const {login, isLoading, error} = useLogin();

    const handleLogin = async (e) => {
        console.log("Get into handle log in")
        e.preventDefault()
        await login(email, password);
        console.log("After login")
      
    }
    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} name = 'email' required></input>
                    <FaUserAlt className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name = 'password' required></input>
                    <FaLock className="icon"/>
                </div>

                <button type="submit" disabled={isLoading}>Login</button>
                {error && <div className="error">{error}</div>}
                
            </form>
        </div>
    );
};
export default LoginForm;