import React from 'react';
import project1 from '../../assets/projects1/1.png'
import project2 from '../../assets/project2/1.png'
import project3 from '../../assets/project3/1.png'

const MyProjects = () => {
    return (
        <div className="bg-[#251C31] min-h-screen py-24">
            <div className='w-10/12 mx-auto grid  gap-10'>
                <div className="relative mx-auto group w-full h-96 bg-cover bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src={project1}
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93] bg-cover"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div className='w-1/2 mx-auto'>
                                <h3 className="text-lg font-semibold mb-2">Master Chef Reustarant Management</h3>
                                <p className="text-sm">The Restaurant Management project is designed to streamline and manage restaurant operations effectively. It allows users to explore and manage menus, food items, and branches seamlessly.</p>
                            </div>
                            <div className="flex gap-3 bottom-0 mx-auto">
                                <a href='https://restaurant-management-caeb2.web.app/' target='_blank'
                                    className="btn btn-outline border-[#693B93] text-gray-400  my-4">Live page</a>
                                <a href='https://github.com/safin33221/Restaurant-Mangement-client-side' target='_blank'
                                    className="btn btn-outline border-[#693B93] text-gray-400  my-4">Source Code</a>
                                <button className="btn btn-outline border-[#693B93] text-gray-400  my-4">Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="relative mx-auto group w-full h-96 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src={project3}
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93]"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-90 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Sports Equipments Store</h3>
                                <p className="text-sm">Explore a wide range of high-quality sports equipment, tailored for athletes and sports enthusiasts alike.   </p>
                            </div>
                            <div className="flex gap-3 bottom-0 mx-auto">
                                <a href='https://sports-equipment-store-7f46d.web.app' target='_blank'
                                    className="btn btn-outline border-[#693B93] text-white  my-4">Live page</a>
                                <a href='https://github.com/safin33221/Sports-Equipment-Store-Client-Side' target='_blank'
                                    className="btn btn-outline border-[#693B93] text-white  my-4">Source Code</a>

                                <button className="btn btn-outline border-[#693B93] text-white  my-4">Details </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto group w-full h-96 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                    {/* Card Content */}
                    <img
                        src={project2}
                        alt="Card Background"
                        className="w-full h-full object-cover bg-[#693B93]"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-90 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-1000 flex items-center justify-center"
                    >
                        <div className="text-center text-white flex flex-col ">
                            <div className='md:w-9/12 mx-auto'>
                                <h3 className="text-lg font-semibold mb-2">Career Counseling Website</h3>
                                <p className="text-sm">The Career Counseling Website is a robust platform designed to guide users toward their career aspirations. This intuitive platform provides personalized career advice, event details, and user-specific services while ensuring a smooth user experience with secure authentication.</p>
                            </div>
                            <div className="flex gap-3 bottom-0 mx-auto">
                                <a href='https://career-counseling-7a8c0.web.app' target='_blank'
                                    className="btn btn-outline border-[#693B93] text-gray-400  my-4">Live page</a>
                                <a href='https://github.com/safin33221/Carrer-Counsiling' target='_blank'
                                    className="btn btn-outline border-[#693B93] text-gray-400  my-4">Source Code</a>
                                <button className="btn btn-outline border-[#693B93] text-gray-400  my-4">Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MyProjects;