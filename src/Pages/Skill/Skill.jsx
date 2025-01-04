import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Skill = () => {
    return (
        <div className='pt-24 min-h-screen bg-[#251C31]'>
            <h1 className='text-3xl text-white text-center font-bold py-5'>My Skills </h1>
            <Swiper
                className="w-11/12 mx-auto"
                spaceBetween={20}
                speed={5000} // Controls the scrolling speed
                loop={true} // Ensures the slides loop infinitely
                autoplay={{
                    delay: 0, // No delay between slides
                    disableOnInteraction: true, // Keeps autoplay active on interaction
                    pauseOnMouseEnter: true, // Ensures it doesn't pause on hover
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
                        slidesPerView: 3, // 3 slides on larger screens
                    },
                }}
            >
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>HTML</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>CSS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>TAILWIND</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>JAVA SCRIPT</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>API INTRIGATION</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>REACT JS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>FIREBASE</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>EXPRESS JS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gray-500 w-80 h-72 rounded-lg flex justify-center items-center'>
                        <h1>MONGO DB</h1>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Skill;