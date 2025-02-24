
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import LogoutBtn from '../../../components/LogoutBtn';
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="navbar bg-gray-950 text-white backdrop-blur-lg fixed z-10 bg-opacity-30 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <IoMenu className='text-2xl'/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 gap-2 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink className="" to="/">Home</NavLink></li>
                    </ul>
                </div>
                
            </div>
            <div className="navbar-end">
                {
                    !user ? <>
                        <NavLink to="/auth/login" >Login</NavLink>
                        <NavLink to="/auth/signUp" className="ml-4" >Sign Up</NavLink>
                    </> :
                        <div className="dropdown dropdown-end flex justify-center items-center">
                            {/* ToDo: nedded show name */}
                            <div><a className="btn btn-ghost text-xl pl-0 uppercase">{user?.name}</a></div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user?.name}
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content text-black bg-base-100 top-14 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><LogoutBtn></LogoutBtn></li>
                            </ul>
                        </div>

                }

                {/* logged in */}

            </div>
        </div>
    );
};

export default Navbar;