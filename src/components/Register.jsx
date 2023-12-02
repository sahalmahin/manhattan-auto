import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password, 'user created successfully');
        e.target.reset();

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            toast.error('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character');
            toast.error('Your password should have at least one uppercase character');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            toast.error('Your password should have at least one special character');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User created successfully');
                toast.success('User created successfully');
            })
            .catch(error => {
                console.error(error.message);
                setRegisterError(error.message);
            });
    };

    return (
        <div className="w-[600px] h-[650px] mx-auto  bg-violet-200">
            <div className="hero-content flex-col">
                <div className=" w-full lg:text-left border-b-2 border-gray-200">
                    <h1 className="text-2xl font-bold text-center py-10">Register Your Account!</h1>
                </div>
                <div className="card  w-full max-w-sm ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered bg-white-100" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {
                            registerError &&
                            <>{registerError}<ToastContainer /></>
                        }
                        {
                            success &&
                            <>{success}<ToastContainer /></>
                        }
                        <div className="text-center mt-5">
                            <p className="font-semibold">Already Have An Account ?
                                <Link to='/login'><span className="font-semibold ml-2 text-red-600 underline">Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;