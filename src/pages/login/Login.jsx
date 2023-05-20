import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user, 'sign in ')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-12 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-green-600">Please <span className='text-green-400'>Sign In!</span></h1>
                    <p className="py-6">You can use all the features of our website by logging in. If you don&apos;t, you can&apos;t. So login now.</p>
                </div>
                <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success btn-outline">Login</button>
                        </div>
                        <label className="label">
                            <p><span>Don&apos;t Have An Account ?</span> <Link to="/register" className='underline text-red-400'>Register</Link></p>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;