import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-[600px] h-[500px] mx-auto  bg-violet-200">
            <div className="hero-content flex-col">
                <div className=" w-full lg:text-left border-b-2 border-gray-200">
                    <h1 className="text-2xl font-bold text-center py-10">Login Your Account!</h1>
                </div>
                <div className="card w-full max-w-sm ">
                    <form className="card-body">
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;