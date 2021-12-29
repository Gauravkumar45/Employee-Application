// import Tom from "../img/Tom.png"
import { Link } from "react-router-dom"

export const Navbar = ({user}) => {
    
    const logout = () =>{
        window.open("http://localhost:5000/auth/logout", "_self")
    }
    return (
        <div className="Navbar">
            <span className="logo"><Link className="link" to='/'>GAURAV_APP</Link></span>
            {
                user ? (
            <ul className="List">
                <li className="ListItem">
                    <img src={user.photos[0].value} alt="" className="avtar"/>
                </li>
                <li className="ListItem">{user.displayName}</li>
                <li className="ListItem" onClick={logout}>Logout</li>
            </ul>
            ) : (<Link className="link" to="login">Login</Link>)
        }
        </div>
    );
};
