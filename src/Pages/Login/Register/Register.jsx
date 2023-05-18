import React, { useContext, useState } from 'react';
import loginimg from '../../../assets/loginimg.png'
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const auth = getAuth(app);
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [registerError,setRegisterError]=useState("")
    const [success, setSuccess] = useState("");
    console.log("registerError...", registerError);
    
    const user =auth.currentUser;

    const handleRegister=(event)=>{
        event.preventDefault();
        setRegisterError("")
        const form= event.target;
        const displayName=form.name.value;
        const photoURL=form.photo.value;
        const password=form.password.value;
        if(password.length<6){
            setRegisterError("please add al least 6 characters in your password")
            return;
        }
        console.log(photoURL,displayName,email,password);
        form.reset("")
        createUser()(email,password)
        .then(result=>{
            const createUser=result.user;
            console.log(createUser)
            setRegisterError("")
            setSuccess("user has created successfully")

        })
        .catch(error=>{
            console.log(error.massage)
            setRegisterError(error.massage)
            setSuccess("")
        })
        profileUpdate(auth.currentUser, {
            displayName,
            photoURL,
          })
          .then(() => {
            const displayName = result.user;
            const photoURL = result.user;
            console.log(displayName, photoURL);
            setRegisterError("");
          })
          .catch((error) => {
            console.log(error.massage);
            setRegisterError(error.massage);
          });

    }
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,providergoogle)
        .then(result=>{
            const userLogIn=result.user;
            console.log(userLogIn)
            setUserInfos(userLogIn)
            navigate(from,{replace:true})
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
                        <h1 className="text-5xl pl-10 text-white font-bold">Register now!</h1>
                       <img className='h-[600px]' src={loginimg} alt="" />
                    </div>

                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#46dfbb] ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white py-2 rounded-lg font-semibold bg-[#ff8c00] hover:bg-[#e78f24]" type="submit">Login</button>
                                <button  onClick={handleGoogleSignIn} className="text-white mt-2 py-2 rounded-lg font-semibold bg-[#ff8c00] hover:bg-[#e78f24]">Google</button><br />
                             
                                  <label >
                                  Already have an account ?? <Link to="/login" className="text-secondary font-semibold
                                        ">Login</Link>
                                </label>
                                <p className='text-danger'>{registerError}</p>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;