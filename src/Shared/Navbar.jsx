import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../assets/safayet_hossan.pdf'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/skill'>Skills</NavLink></li>
        <li><NavLink to='/about-me'>About Me</NavLink></li>
    </>
    return (
        <div className="navbar  mx-auto bg-[#1A0B2E] text-white  fixed top-0 z-50">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Safin</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} download={resume} className="p-3 rounded-lg bg-[#693B93]  border-0 border-[#542992]   border-b-4   ">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;