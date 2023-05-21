import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import kingIcon from "../../assets/image/carKing.png"
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'You are LogOut',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(error => console.log())

    }

    const navItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/all-toys">All Toys</Link> </li>
        <li> <Link to="/blog">Blog</Link> </li>
        {
            user && <>
                <li> <Link to="/my-toys">My Toys</Link> </li>
                <li> <Link to="/add-toys">Add Toys</Link> </li>
                <button className='btn btn-outline btn-success btn-md mr-4'><Link onClick={handleLogOut}>LogOut</Link></button>
            </>
        }

    </>

    return (
        <div className="navbar bg-hero mb-8 rounded-lg" data-aos="fade-up" data-aos-duration="3000"  >
            <div className="navbar-start">
                <div className="dropdown text-slate-100">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-green-300 shadow rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className='w-12 mr-4' src={kingIcon} alt="" />
                <h1 className="text-xl md:text-2xl font-bold text-green-500"><span className='text-orange-500 text-xl md:text-3xl'>Cars K</span>ing</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <img className="w-12 rounded-full" title={user?.displayName} src={user?.photoURL} />
                        : <button className='btn btn-outline btn-success btn-md'><Link to="/Login">Login</Link></button>
                }

            </div>
        </div>
    );
};

export default Header;