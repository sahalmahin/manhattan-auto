import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {

    const { user, logOut, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSignOut = () => {
        logOut()
            .then(console.log('log out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl font-bold italic flex"><img className="w-20 h-20" src="https://i.ibb.co/GVvBz1S/logo-manhattan.png" alt="" />
                        <span className="my-auto ml-3">Manhattan <br /> <small className="pl-6">Auto</small></span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                        {
                            user ?
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className=" rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src='https://rb.gy/cwptut' />
                                        </div>
                                    </label>
                                    <button className="btn rounded-xl font-semibold text-white bg-violet-500 px-6" onClick={handleSignOut}>Sign Out</button>
                                </>
                                :
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className=" rounded-full border border-gray-400">
                                            <img alt="Tailwind CSS Navbar component" src='../../public/image_9653926.png' />
                                        </div>
                                    </label>
                                    <Link to='/login'><button className="btn rounded-xl text-white bg-violet-500">Login</button></Link>
                                </>
                        }
                        <div className="">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline">Sign in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;