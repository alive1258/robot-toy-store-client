import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../../assets/logo.png'
import './Navbar.css'
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

    return (
        <div className='bg-[#4ee9d9]'>

            <div className='py-4 md:px-10  flex justify-between items-center w-full h-full'>

                <div className='flex items-center gap-2'>
                    <div className='pl-4'>
                        <Link to='/'>
                            <img className='h-20 w-20' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='md:text-3xl text-xl  font-bold mb-2'>RobotToyStudio</div>
                </div>

                <div className="md:flex hidden gap-8 text-lg text-white font-semibold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/alltoys'>All Toys</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    {
                        user && <>
                            <NavLink to='/mytoys'>My Toys</NavLink>
                            <NavLink to='/addtoy'>Add A Toy</NavLink>

                        </>
                    }
                </div>

                <div className="md:flex justify-center items-center">
                    <div className='md:flex md:mr-4'>
                        {user && (
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <button className="">
                                    <img
                                        style={{
                                            height: "40px",
                                            width: "40px",
                                            borderRadius: "50%",
                                        }}
                                        src={user?.photoURL}
                                        alt=""
                                    />

                                </button>
                            </div>

                        )}
                    </div>


                    <div className='md:block hidden'>
                        {
                            user ? <button onClick={handleLogOut} className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">LogOut</button> : <Link to='/login'>
                                <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ml-2 md:block hidden">Login</button>
                            </Link>
                        }


                    </div>
                </div>
                <div onClick={handleNav} className='md:hidden mr-6'>
                    {!nav ? <AiOutlineMenu size={20} className='w-5' /> : <AiOutlineClose />}

                </div>
            </div>
            {/* mobile menu  */}

            <div >
                <div className={!nav ? 'hidden' : 'absolute bg-[#4ee9d9] w-full text-white  h-screen md:hidden px-8'}>
                    <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>
                        <NavLink to="/">Home</NavLink>
                    </p>
                    <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>
                        <NavLink to='/alltoys'>All Toys</NavLink>
                    </p>
                    <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </p>
                    {
                        user && <>
                            <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>  <NavLink to='/mytoys'>My Toys</NavLink></p>
                            <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>  <NavLink to='/addtoy'>Add A Toy</NavLink></p>

                        </>
                    }
                    <div className=''>
                        {
                            user ? <button onClick={handleLogOut} className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">LogOut</button> :<Link to='/login'>

                            <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">login</button>
                            </Link>
                        }


                    </div>


                </div>

            </div>

        </div>
    );
};

export default Navbar;