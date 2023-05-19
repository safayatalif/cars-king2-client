import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import kingIcon from "../../assets/image/carKing.png"
import { AuthContext } from '../../contexts/AuthProvider';
const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.log())

    }

    const navItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/all-toys">All Toys</Link> </li>
        {
            user && <li> <Link to="/add-toys">Add Toys</Link> </li>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className='w-12 mr-4' src={kingIcon} alt="" />
                <h1 className="text-xl md:text-2xl font-bold text-green-400"><span className='text-green-600'>Cars</span> King</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><button className='btn btn-outline btn-success btn-md mr-4'><Link onClick={handleLogOut}>LogOut</Link></button>
                        <img className="w-12 rounded-full" title={user?.displayName} src={user?.photoURL} /></>
                        : <button className='btn btn-outline btn-success btn-md'><Link to="/Login">Login</Link></button>
                }

            </div>
        </div>
    );
};

export default Header;