import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { location } = useLocation();
    const navigate = useNavigate();
    const [loggingIn, setLoggingIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, 'login successfully');
        e.target.reset();

        setLoggingIn(true);

        signIn(email, password)
            .then((result) => {
                console.log(result);

                toast.success('Login successful');

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);
            })
            .catch((error) => {
                console.error(error);
                toast.error('Invalid email or password');
            });
    };


    return (
        <div className="w-[600px] h-[500px] mx-auto  bg-violet-200">
            <div className="hero-content flex-col">
                <div className=" w-full lg:text-left border-b-2 border-gray-200">
                    <h1 className="text-2xl font-bold text-center py-10">Login Your Account!</h1>
                </div>
                <div className="card w-full max-w-sm ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered bg-white-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered bg-white-100" required />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-violet-500 text-white">Login</button>
                        </div>
                        <div className="text-center mt-5">
                            <p className="font-semibold">Have No Account ?
                                <Link to='/register'><span className="font-semibold ml-2 text-red-600 underline">Please Register</span></Link></p>
                        </div>
                        <ToastContainer />
                        {loggingIn}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;