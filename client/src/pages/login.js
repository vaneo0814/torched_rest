import React, {useState} from "react";
import "./style.css";
import { auth } from "../utils/firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(e => {
            console.log("login succesful")
            window.location.href = "/employeemenu"
        }).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

    return (
        <div className="chefsBackground">
            <div className="loginContainer">
                <h1 className="login">
                    Login
                </h1>
           <form className="loginInput">
           <input type="email" name="userEmail" className="form-control" aria-describedby="email" placeholder="Email" value = {email} onChange = {(event) => onChangeHandler(event)}/>
           <input type="password" name="userPassword" className="form-control" aria-describedby="password" placeholder="Password" value = {password} onChange = {(event) => onChangeHandler(event)}/>
           <button type="submit" className="loginBtn" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>Login</button>

           </form>
            </div>
        </div>
    )
}

export default Login;