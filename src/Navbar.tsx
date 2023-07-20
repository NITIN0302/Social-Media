import {Link} from "react-router-dom";
import {auth} from "./config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth"
import "./App.css";

export const Navbar = () =>{

    const [user] = useAuthState(auth);

    const signUserOut = async () =>{
        await signOut(auth);
    }

    return (
        <div className="Navbar">
            <div> 
                <Link to="/" className="link" style={{color:"white"}}>Home</Link>
                {!user ? <Link to='/login' className="link" style={{color:"white"}}> Login</Link>:
                <Link to='/createpost' className="link" style={{color:"white"}}>Post</Link>}
            </div>
            <div className="info">
                {/* checking the condition for img shows if user ise login */}
                {user && (
                    <>
                    {/* <p className="log">{user?.displayName} </p> */}
                    <img className="log" src={user?.photoURL || ""}/>
                    <button className="log" onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </div>
        </div>
    );
};