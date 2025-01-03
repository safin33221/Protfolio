import profile from '../assets/safin.png'
import resume from '../assets/safayet_hossan.pdf'

const HeroBanner = () => {
    return (
        <div className="hero bg-[#251C31] text-white min-h-screen mt-4">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div   className='w-1/2 mx-auto  '>
                    
                    <img
                        src={profile}
                        className="max-w-sm rounded-full " />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-3xl font-bold">Hello</h1>
                    <h1 className="text-5xl font-bold">I'm a fronend Web Developer</h1>
                    <p className="py-6">
                        I Make beautiful landing page
                    </p>
                    <a href={resume} download={resume} className="p-3 rounded-lg bg-[#693B93]  border-0 border-[#542992]   border-b-4   ">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;