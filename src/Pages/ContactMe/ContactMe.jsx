import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaLinkedinIn, FaMailBulk, FaVoicemail, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const form = useRef()
    const handleSendEmail = e => {
        e.preventDefault()
        emailjs.sendForm('service_p0cj4jn', 'template_7qgsvt3', form.current, {
            publicKey: 'tTniGIpPDVocEd5Ei'
        })
            .then(() => {
                e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message has been sent successfully!",
                    showConfirmButton: false,
                    timer: 2000
                  });
            },
                (error) => {
                    console.log(error);
                }
            )

    }
    return (
        <div className='bg-[#251C31] text-white overflow-x-hidden min-h-screen'>

            <div className='md:flex  gap-5 w-10/12 mx-auto pt-20'>
                <div className='md:w-1/2 flex flex-col  justify-center text-left'>
                    <h1 className='text-3xl font-bold'>Let's Chat....</h1>
                    <h2 className='text-4xl font-bold py-2'>Tell Me About Your Project.</h2>
                    <p>Let's create something together🤘</p>
                    <hr className='my-5' />
                    <div className=' flex flex-col '>
                        <h1 className='text-xl border-b-2 w-fit border-gray-400 text-gray-300'>Reach Out to Me</h1>
                        
                        
                        <div className='flex flex-col  justify-center mt-2'>
                            <h1 className='flex text-xl items-center text-gray-400 '><MdEmail className=' mx-2  ' />: safin33221@gmail.com</h1>
                            <h1 className='flex text-xl items-center text-gray-400 '><FaWhatsapp className=' mx-2 ' />: 8801837429636</h1>
                            <h1 className='flex text-xl items-center text-gray-400 '><FaLinkedinIn className=' mx-2 ' />: Safayet Hossan Safin</h1>
                            <h1 className='flex text-xl items-center text-gray-400 '><FaGithub className=' mx-2 ' />: safin33221</h1>

                            <h1 className='flex text-xl items-center text-gray-400 '><FaLocationDot className=' mx-2 ' />: Chittagong, Bangladesh.</h1>

                        </div>


                    </div>
                </div>
                <form ref={form} onSubmit={handleSendEmail} className=' md:w-1/2'>

                    <div className='p-5'>
                        <h1 className='text-2xl font-bold py-4'>Send me Email</h1>
                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            name='from_name'
                            className="input input-bordered mb-5 border-[#693B93] focus:border-[#693B93] w-full bg-transparent focus:outline-none" />
                        <input
                            required
                            type="email"
                            placeholder="Your Email"
                            name='from_email'
                            className="input input-bordered border-[#693B93] focus:border-[#693B93] w-full bg-transparent focus:outline-none" />

                        <textarea
                            required
                            placeholder="Message"
                            name='message'
                            className="textarea textarea-bordered textarea-md w-full focus:outline-none  mt-5 bg-transparent border-[#693B93] focus:border-[#693B93] "></textarea>
                        <button className="btn btn-outline border-[#693B93] hover:bg-[#552f79] text-white  my-4">Send Email </button>
                    </div>
                </form>



            </div>
        </div>
    );
};

export default ContactMe;