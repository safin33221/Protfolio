import React from 'react';

const MyProjects = () => {
    return (
        <div className="bg-[#251C31] min-h-screen pt-24">
            <div className='w-10/12 mx-auto grid grid-cols-2  gap-10'>
                <div className="relative mx-auto group w-full h-80 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src="https://via.placeholder.com/300x400"
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93]"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Title</h3>
                                <p className="text-sm">This content fully slides up from the bottom.</p>
                            </div>
                            <div className="flex gap-3 bottom-0">
                                <button className="btn btn-sm">Live page</button>
                                <button className="btn btn-sm">Source Code</button>
                                <button className="btn btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto group w-full h-80 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src="https://via.placeholder.com/300x400"
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93]"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Title</h3>
                                <p className="text-sm">This content fully slides up from the bottom.</p>
                            </div>
                            <div className="flex gap-3 bottom-0">
                                <button className="btn btn-sm">Live page</button>
                                <button className="btn btn-sm">Source Code</button>
                                <button className="btn btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto group w-full h-80 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src="https://via.placeholder.com/300x400"
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93]"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Title</h3>
                                <p className="text-sm">This content fully slides up from the bottom.</p>
                            </div>
                            <div className="flex gap-3 bottom-0">
                                <button className="btn btn-sm">Live page</button>
                                <button className="btn btn-sm">Source Code</button>
                                <button className="btn btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto group w-full h-80 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src="https://via.placeholder.com/300x400"
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93]"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Title</h3>
                                <p className="text-sm">This content fully slides up from the bottom.</p>
                            </div>
                            <div className="flex gap-3 bottom-0">
                                <button className="btn btn-sm">Live page</button>
                                <button className="btn btn-sm">Source Code</button>
                                <button className="btn btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;