import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import resume from '../assets/safayet_hossan.pdf'
import logo from '../assets/logo.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-me'>About Me</NavLink></li>
        <li><NavLink to='/skills'>My Skills</NavLink></li>
        <li><NavLink to='/projects'>My Projects</NavLink></li>
        <li><NavLink to='/contact-me'>Contact Me</NavLink></li>
    </>
    return (
        <div className="navbar w-full  mx-auto bg-[#1A0B2E] text-white  fixed top-0 z-50">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3  bg-[#693B93]  w-52 p-2 mx-6 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-3xl from-neutral-content font-bold text-[#ffffff]"> <img src={logo}  className='w-12 rounded-full' alt="" />Sa<span className='text-[#ffde59]'>Fin</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} download={resume} className="p-2 rounded-lg bg-[#693B93]  border-0 border-[#542992]   border-b-4 hover:bg-[#552f79] transition-all duration-200   ">My Resume</a>
            </div>
        </div>
    );
};

export default Navbar;