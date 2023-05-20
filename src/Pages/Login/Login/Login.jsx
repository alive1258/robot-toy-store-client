import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import app from '../../../firebase/firebase.config';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import loginimg from '../../../assets/loginimg.png'

const Login = () => {
    const auth = getAuth(app)
    const providergoogle = new GoogleAuthProvider()
    

    const [userInfos, setUserInfos] = useState(null)
    const [logInError, setLogInError] = useState("")

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()
        setLogInError("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset("")
        // if(password.length<6){
        //     setLogInError("please add al least 6 characters in your password")
        //     return;
        // }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setUserInfos(loggedUser);
                navigate(from, { replace: true })
                setLogInError("")
            })
            .catch(error => {
                console.log(error.massage)
                setLogInError(error.massage)
            })

    }

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,providergoogle)
        .then(result=>{
            const userLogIn=result.user;
            console.log(userLogIn)
            setUserInfos(loggedUser);
            navigate(from, { replace: true })
          
        })
        .catch(error=>{
            console.log(error.massage)
        })
    }

    return (
        <div>
          
            <div className="hero mt-16 min-h-screen loginbgpic">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold">Login now!</h1>
                       <img className='h-[600px]' src={loginimg} alt="" />
                    </div>

                   
                        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#46dfbb] ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                             
                            </div>
                            <div className="form-control mt-6">
                                <input className="text-white py-2 rounded-lg font-semibold bg-[#ff8c00] hover:bg-[#e78f24]" type="submit" value="Login"></input>
                                <button  onClick={handleGoogleSignIn} className="text-white mt-2 py-2 rounded-lg font-semibold bg-[#ff8c00] hover:bg-[#e78f24]">Google</button><br />
                             
                                  <label >
                                      Don't Have an Account ? <Link to="/register" className="text-secondary font-semibold
                                        ">Register</Link>
                                </label>
                                <p className='text-danger'>{logInError}</p>

                            </div>
                        </div>
                            </form>
                   

                </div>
            </div>
        </div>
    );
};

export default Login;