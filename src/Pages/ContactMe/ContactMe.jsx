import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaLinkedinIn, FaMailBulk, FaVoicemail, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef()
    const handleSendEmail = e => {
        e.preventDefault()
        emailjs.sendForm('service_p0cj4jn', 'template_7qgsvt3', form.current, {
            publicKey: 'tTniGIpPDVocEd5Ei'
        })
            .then(() => {
                console.log('success');
            },
                (error) => {
                    console.log(error);
                }
            )

    }
    return (
        <div className='bg-[#251C31] text-white overflow-x-hidden min-h-screen'>
            <h1 className='text-3xl font-bold text-center py-5'>Contact Me</h1>
            <div className='md:flex  gap-5 w-10/12 mx-auto'>
                <form ref={form} onSubmit={handleSendEmail} className=' md:w-1/2'>

                    <div className='p-5'>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name='from_name'
                            className="input input-bordered mb-5 border-[#693B93] focus:border-[#693B93] w-full bg-transparent focus:outline-none" />
                        <input
                            type="email"
                            placeholder="Your Email"
                            name='user_email'
                            className="input input-bordered border-[#693B93] focus:border-[#693B93] w-full bg-transparent focus:outline-none" />

                        <textarea
                            placeholder="Message"
                            name='message'
                            className="textarea textarea-bordered textarea-md w-full focus:outline-none  mt-5 bg-transparent border-[#693B93] focus:border-[#693B93] "></textarea>
                        <button className="btn btn-outline border-[#693B93] text-white  my-4">Send Email </button>
                    </div>
                </form>

                <div className=' md:w-1/2'>
                    <div className='flex flex-col  justify-center mt-2'>
                        <h1 className='flex text-xl items-center text-gray-400 '><MdEmail className=' mx-2 ' />: safin33221@gmail.com</h1>
                        <h1 className='flex text-xl items-center text-gray-400 '><FaWhatsapp className=' mx-2 ' />: 8801837429636</h1>
                        <h1 className='flex text-xl items-center text-gray-400 '><FaLinkedinIn className=' mx-2 ' />: Safayet Hossan Safin</h1>
                        <h1 className='flex text-xl items-center text-gray-400 '><FaGithub className=' mx-2 ' />: safin33221</h1>

                        <h1 className='flex text-xl items-center text-gray-400 '><FaLocationDot className=' mx-2 ' />: Chittagong, Bangladesh.</h1>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default ContactMe;