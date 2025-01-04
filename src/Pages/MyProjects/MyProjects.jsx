import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="bg-[#251C31] min-h-screen py-24">
            <div className='w-10/12 mx-auto grid grid-cols-3  gap-10'>

                {
                    projects.map(project => <div className="relative mx-auto group w-full h-96 bg-cover bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                        {/* Card Content */}
                        <img
                            src={project.image}
                            alt="Card Background"
                            className="w-full h-full object-cover bg-[#693B93] bg-cover"
                        />

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-80 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 ease-linear flex items-center justify-center"
                        >
                            <div className="text-center text-white flex flex-col ">
                                <div className=' mx-auto'>
                                    <h3 className="text-lg font-semibold mb-2">{project.heading}</h3>
                                    <p className="text-sm">{project.paragraph}</p>
                                </div>
                                <div className="flex gap-3 bottom-0 mx-auto">
                                    <a href={project.live} target='_blank'
                                        className="btn btn-outline border-[#693B93] text-gray-400  my-4">Live page</a>
                                    <a href={project.github} target='_blank'
                                        className="btn btn-outline border-[#693B93] text-gray-400  my-4">Source Code</a>
                                    <Link to={`/project-details/${project._id}`}>
                                        <button className="btn btn-outline border-[#693B93] text-gray-400  my-4">Details </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }




            </div>
        </div>
    );
};

export default MyProjects;