import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const {createUser , userProfileUpdate  , logOut} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            userProfileUpdate(name , photoURL , user)
            .then(result=>{
                const updateUser = result?.user;
                logOut()
                navigate('/login')
                console.log(updateUser)
            })
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-12 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-green-600">Please <span className='text-green-400'>Sign Up!</span></h1>
                    <p className="py-6">You can use all the features of our website by Sign Up in. If you don&apos;t, you can&apos;t. So Sign Up now.</p>
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photoURL'  placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <p>Already Have An Account ?<Link to="/login" className='underline text-red-400'> Login</Link></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;