
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from '../../hooks/useAuthContext';
import './NavBar.css';

import logo from '../Assets/logo.png';

const NavBar = () => {
    const [menu, setMenu] = useState("aboutus");
    const { logout } = useLogout();
    const { user } = useAuthContext();

    //Check that when we start and there is user's data in the local storage
    // We will update the user state

    // Call the log out function when user clicks on the log out button
    const handleButton = () => {
        logout();
        console.log("User email after logout:", user ? user.email : "No user");
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>Fall guys</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("aboutus") }}>
                    <Link style={{ textDecoration: 'none' }} to='/aboutus'>About us</Link>
                    {menu === "aboutus" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("something1") }}>
                    <Link style={{ textDecoration: 'none' }} to='/something1'>Fall detection</Link>
                    {menu === "something1" ? <hr /> : null}
                </li>
            </ul>

            <div className="nav-login">
                {/* When user is logged in, show the user email and log out button */}
                {user ? (
                    <>
                        <span>{user.data.email}</span>
                        <button onClick={handleButton}>Log out</button>
                    </>
                ) : (
                    <>
                        {/* When user is logged out, show the login and signup buttons */}
                        <Link to='/login'><button>Login</button></Link>
                        <Link to='/signup'><button>Signup</button></Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { useLogout } from "../../hooks/useLogout";
// import { useAuthContext } from '../../hooks/useAuthContext'
// import './NavBar.css'

// import logo from '../Assets/logo.png'

// const NavBar = () => {
//     const[menu, setMenu] = useState("aboutus");
//     const {logout} = useLogout();
//     const { user } = useAuthContext();
//     //Call the log out function when user click on the log out button
//     const handleButton = () => {
//         logout();
//     }
//         <div className="nav-login">
//                 {/* When user is logged in, show the user email and log out button */}
//                 {user ? (
//                     <>
//                         <span>{user.email}</span>
//                         <button onClick={handleButton}>Log out</button>
//                     </>
//                 ) : (
//                     <>
//                         {/* When user is logged out, show the login and signup buttons */}
//                         <Link to='/login'><button>Login</button></Link>
//                         <Link to='/signup'><button>Signup</button></Link>
//                     </>
//                 )}
//             </div>
//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt=""></img>
//                 <p>Fall guys</p>
//             </div>
//             <ul className="nav-menu">
//                 <li onClick={()=>{setMenu("aboutus")}}><Link style = {{ textDecoration: 'none'}} to='/aboutus'>About us</Link>{menu==="aboutus"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("something1")}}><Link style = {{ textDecoration: 'none'}} to='/something1'>Fall detection</Link>{menu==="something1"?<hr/>:<></>}</li>
//             </ul>

//             <div className="nav-login">
//                 {/* When user is logged in, show the user email and log out button */}
//                 {user ? (
//                     <>
//                         <span>{user.email}</span>
//                         <button onClick={handleButton}>Log out</button>
//                     </>
//                 ) : (
//                     <>
//                         {/* When user is logged out, show the login and signup buttons */}
//                         <Link to='/login'><button>Login</button></Link>
//                         <Link to='/signup'><button>Signup</button></Link>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default NavBar;