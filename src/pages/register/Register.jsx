import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';



const Register = () => {

    const { createUser, userProfileUpdate, logOut, googleSignIn , error , setError} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    console.log(error)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                userProfileUpdate(name, photoURL, user)
                    .then(result => {
                        const updateUser = result?.user;
                        setError('')
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Register Successfully',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        logOut()
                        navigate('/login')
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setError('');
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
        <div className="bg-hero to-slate-200 my-12 rounded-lg">
            <Helmet>
                <title>Register -Cars King</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center" data-aos="fade-left"
                    data-aos-duration="3000">
                    <h1 className="text-5xl font-bold text-green-600">Please <span className='text-green-400'>Sign Up!</span></h1>
                    <p className="py-6">You can use all the features of our website by Sign Up in. If you don&apos;t, you can&apos;t. So Sign Up now.</p>
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-hero" data-aos="zoom-in" data-aos-duration="3000">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100" >Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input text-black input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100" >Photo URL</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Photo URL" className="input text-black input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100" >Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input text-black input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100" >Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input text-black input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-success btn-outline"><FaGoogle className='mr-4'></FaGoogle>Google Sign In</button>
                        </div>
                        <label className="label">
                            <p>Already Have An Account ?<Link to="/login" className='underline text-red-400'> Login</Link></p>
                        </label>
                        <label className="label">
                            <p className='text-warning'>{error}</p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;