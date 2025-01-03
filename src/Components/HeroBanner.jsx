import profile from '../assets/safin.png'
import resume from '../assets/safayet_hossan.pdf'
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const HeroBanner = () => {
    return (
        <div className="hero bg-[#251C31] text-white min-h-screen mt-4">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className='md:w-1/2 mx-auto  '>

                    <img
                        src={profile}
                        className="max-w-sm rounded-full " />
                </div>
                <div className='md:w-1/2'>
                    <h1 className="text-3xl font-bold">Hello</h1>
                    <h1 className="text-5xl font-bold">I'm a fronend Web Developer</h1>
                    <p className="py-6">
                        I Make beautiful landing page
                    </p>
                    <a href={resume} download={resume} className="p-3 rounded-lg bg-[#693B93]  border-0 border-[#542992]   border-b-4   ">My Resume</a>

                    <div className=' mt-10'>
                        <ul className='flex gap-4'>
                            <li className='text-4xl text-[#1877F2]'><a href="https://web.facebook.com/safin.2360/" target='_blank'><FaFacebook /></a></li>
                            <li className='text-4xl text-[#7b7777]'><a href="https://github.com/safin33221" target='_blank'><FaGithub /></a></li>
                            <li className='text-4xl text-[#25D366]'><a href="https://wa.me/+8801837429636/" target='_blank'><FaWhatsapp /></a></li>
                            <li className='text-4xl text-[#0072B1]'><a href="https://www.linkedin.com/in/safayet-hossan-safin/" target='_blank'><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroBanner;