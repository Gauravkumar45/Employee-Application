import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {
    const google = () =>{
        window.open("http://localhost:5000/auth/google", "_self")
    }
    const github = () =>{
        window.open("http://localhost:5000/auth/github", "_self")
    }
    const facebook = () =>{
        window.open("http://localhost:5000/auth/facebook", "_self")
    }
    return (
        <div className="Login">
            <h1 className="LoginTitle">Choose a Login Method</h1>
            <div className="wrapper">
            <div className="left">
                <div className="LoginButton google" onClick={google}>
                <img src={Google} alt="" classIcon="icon"/>
            </div>
            <div className="LoginButton facebook" onClick={facebook}>
                <img src={Facebook} alt="" classIcon="icon"/>
            </div>
            <div className="LoginButton github" onClick={github}>
                <img src={Github} alt="" classIcon="icon"/>
            </div>
            </div>
            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
            </div>
            <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
        </div>
    </div>
    </div>
    )
}

export default Login