import profile from '../assets/safin.png'
import resume from '../assets/safayet_hossan.pdf'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div className="hero bg-[#251C31] text-white min-h-screen py-10 md:py-0  ">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className='w-full md:w-1/2 mx-auto  '>

                    <img
                        src={profile}
                        className="w-11/12 mx-auto  rounded-full " />
                </div>
                <div className=''>
                    <h1 className="text-2xl font-bold">Hello,I'm Safin...</h1>
                    <h1 className="text-5xl font-bold">Frontend Web Developer</h1>
                    <h3 className="py-6 font-bold text-lg">
                        Your Vision, My Code-
                    </h3>
                    <p className='md:w-1/2 mb-5'>
                        Crafting innovative digital experiences that bring your ideas to life, blending creativity and functionality to build solutions that inspire, engage, and deliver results.
                    </p>
                    <a href={resume} download={resume} className="p-2 rounded-lg bg-[#693B93]  border-0 border-[#542992]   border-b-4 hover:bg-[#552f79] transition-all duration-200     ">Download Resume</a>
                    <Link to='/contact-me'>
                        <button className="p-2  rounded-lg bg-[#693B93]  border-0 border-[#542992]   border-b-4 mx-2 hover:bg-[#552f79] transition-all duration-200   ">Contact Me</button>
                    </Link>

                    <div className=' mt-10'>
                        <ul className='flex gap-4'>
                            <li className='text-4xl hover:scale-110 overflow-hidden transition-all duration-200 text-[#1877F2]'><a href="https://web.facebook.com/safin.2360/" target='_blank'><FaFacebook /></a></li>
                            <li className='text-4xl hover:scale-110 overflow-hidden transition-all duration-200 text-[#7b7777]'><a href="https://github.com/safin33221" target='_blank'><FaGithub /></a></li>
                            <li className='text-4xl hover:scale-110 overflow-hidden transition-all duration-200 text-[#25D366]'><a href="https://wa.me/+8801837429636/" target='_blank'><FaWhatsapp /></a></li>
                            <li className='text-4xl hover:scale-110 overflow-hidden transition-all duration-200 text-[#0072B1]'><a href="https://www.linkedin.com/in/safayet-hossan-safin/" target='_blank'><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroBanner;