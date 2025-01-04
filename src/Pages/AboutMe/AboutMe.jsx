import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import aboutMe from '../../assets/Lottie/about.json'
import Lottie from 'lottie-react';


const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 }); // Adjust duration if needed
    }, []);
    return (
        <div className="bg-[#251C31] text-white pb-5  min-h-screen overflow-x-hidden pt-16 md:pt-10">
            <div className='md:flex items-center '>
                <div className=' w-1/2 mx-auto'>
                <Lottie animationData={aboutMe} className='w-4/5 mx-auto' />
                </div>
                <div  className=" w-1/2  mx-auto  p-10 md:p-20 backdrop-blur-xl bg-transparent text-left ">
                    <h1 className=" text-4xl py-5 ">About Me_</h1>
                    <p>"Hi, I'm Safayet Hossan, a dedicated Frontend Developer with a passion for crafting intuitive and visually engaging user experiences. With expertise in React, JavaScript, HTML, and CSS, I specialize in building responsive and dynamic interfaces that bring ideas to life. I strive to create designs that are not only functional but also a delight to use, ensuring every interaction is seamless and impactful."</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-10">
                <div data-aos="fade-right"
                    data-aos-offset="100"
                >
                    <div className=" text-justify border-2 border-[#693B93] p-7 rounded-lg">
                        <h2 className=" text-2xl list-item">Personal Journey (Youthful Approach)</h2>
                        <p className="text-gray-400">"Hi! I'm Safin, a 17-year-old web developer with a passion for turning ideas into functional and beautiful websites. My journey started with curiosity—experimenting with HTML and CSS, and it quickly grew into a love for coding. Now, I'm diving into advanced tools like React  to build projects that inspire and excite."</p>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="100">
                    <div className=" text-justify border-2 border-[#693B93] p-7 rounded-lg">
                        <h2 className=" text-2xl list-item">Journey into Programming</h2>
                        <p className="text-gray-400">My fascination with technology started at a young age. The first time I tried to create a webpage, I realized it wasn't just a hobby—it was a gateway to an entirely new world. Over time, I've delved deep into web development with React, Tailwind CSS, and JavaScript. Today, I love building interfaces that are both visually appealing and user-friendly.</p>
                    </div>
                </div>
                <div data-aos="fade-right"
                    data-aos-offset="150">
                    <div className=" text-justify border-2 border-[#693B93] p-7 rounded-lg">
                        <h2 className=" text-2xl list-item"> Passion for Learning</h2>
                        <p className="text-gray-400">As a 17-year-old, I thrive on learning and experimenting with new technologies. I enjoy creating interactive, user-friendly websites that combine creativity and functionality. Every line of code I write is a step toward building something meaningful, and I''m always looking for opportunities to learn and grow</p>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="150">
                    <div className=" text-justify border-2 border-[#693B93] p-7 rounded-lg">
                        <h2 className=" text-2xl list-item"> Passion for Learning</h2>
                        <p className="text-gray-400">As a 17-year-old, I thrive on learning and experimenting with new technologies. I enjoy creating interactive, user-friendly websites that combine creativity and functionality. Every line of code I write is a step toward building something meaningful, and I''m always looking for opportunities to learn and grow</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;