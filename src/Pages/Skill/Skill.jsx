import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import html from '../../assets/skills/html-5.png'
import css from '../../assets/skills/css-3.png'
import tailwind from '../../assets/skills/Tailwind.png'
import figma from '../../assets/skills/figma.png'
import gitIcon from '../../assets/skills/git-icon.png'
import github from '../../assets/skills/github.png'
import js from '../../assets/skills/js.png'
import react from '../../assets/skills/react.png'
import firebase from '../../assets/skills/firebase.png'
import nodejs from '../../assets/skills/node-js.png'
import mongoDb from '../../assets/skills/mongodb.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Skill = () => {
    return (
        <div className='pt-24 min-h-screen bg-[#251C31]'>
            <h1 className='text-3xl text-white text-center font-bold py-5'>My Skills </h1>
            <p className='text-gray-300  text-center py-3 font-bold'>Skills That Bring Ideas to Life-</p>
            <Swiper
                className="w-11/12 mx-auto"
                spaceBetween={20}
                speed={5000} // Controls the scrolling speed
                loop={Infinity} // Ensures the slides loop infinitely
                autoplay={{
                    delay: 0, // No delay between slides
                    disableOnInteraction: false, // Keeps autoplay active on interaction
                    pauseOnMouseEnter: false, // Ensures it doesn't pause on hover
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 slide on mobile screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides on tablets
                    },
                    1024: {
                        slidesPerView: 3, 
                    },
                }}
            >
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={html} className='w-24' alt="" />
                        <h1 className='lowercase '>HTML</h1>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={css} className='w-24' alt="" />
                        <h1 className='lowercase '>CSS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={tailwind} className='w-24' alt="" />
                        <h1 className='lowercase '>TAILWIND</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={figma} className='w-24' alt="" />
                        <h1 className='lowercase '>FIGMA</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={gitIcon} className='w-24' alt="" />
                        <h1 className='lowercase '>GIT</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={github} className='w-24' alt="" />
                        <h1 className='lowercase '>GIT HUB</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={js} className='w-24' alt="" />
                        <h1 className='lowercase '>JAVA SCRIPT</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={react} className='w-24' alt="" />
                        <h1 className='lowercase '>REACT JS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={firebase} className='w-24' alt="" />
                        <h1 className='lowercase '>FIREBASE</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={mongoDb} className='w-24' alt="" />
                        <h1 className='lowercase '>MONGO DB</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-gray-500 w-80 h-72 rounded-lg flex flex-col justify-center items-center'>
                        
                        <img  src={nodejs} className='w-24' alt="" />
                        <h1 className='lowercase '>NODE JS</h1>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Skill;