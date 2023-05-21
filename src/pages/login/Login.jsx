import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import { FaExclamationTriangle, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const { signIn, googleSignIn, error, setError } = useContext(AuthContext);
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
                setError('')
                Swal.fire({
                    icon: 'success',
                    title: 'Your LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }
    console.log(error)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setError('')
                Swal.fire({
                    icon: 'success',
                    title: 'Your Google LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero bg-hero to-slate-200 my-12 rounded-lg">
            <Helmet>
                <title>Login -Cars King</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center " data-aos="fade-left"
                    data-aos-duration="3000">
                    <h1 className="text-5xl font-bold text-green-600">Please <span className='text-green-400'>Sign In!</span></h1>
                    <p className="py-6">You can use all the features of our website by logging in. If you don&apos;t, you can&apos;t. So login now.</p>
                </div>
                <form onSubmit={handleSignIn} data-aos="zoom-in" data-aos-duration="3000" className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-hero">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input text-black input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input text-black input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success btn-outline">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-success btn-outline"><FaGoogle className='mr-4'></FaGoogle>Google Sign In</button>
                        </div>
                        <label className="label">
                            <p><span>Don&apos;t Have An Account ?</span> <Link to="/register" className='underline text-red-400'>Register</Link></p>
                        </label>
                        <label className="label">
                            {
                                error && <span className='text-red-500'><FaExclamationTriangle className='inline-block'></FaExclamationTriangle> {error}</span>
                            }
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;