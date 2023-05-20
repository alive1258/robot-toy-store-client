import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className='mt-20 md:px-20 px-6 mb-10'>
                <div className='bg-gray-200 px-6 md:px-20 py-12 rounded-xl shadow-2xl mb-4 '>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div >
                        <p className='font-normal text-2xl text-[#1A3D37]'>Contact us</p>
                        <h1 className='md:text-5xl text-2xl mt-2 text-[#0F172A] font-bold'>Contact Our Team,<br />
                            Feel free to talk about <br />
                            anything.</h1>
                        <div className='mt-12 '>
                            <div className='flex mb-10 items-center gap-5'>
                                <GoLocation/>
                                <p>Al Dabab Street, Al Ma'azer Dist.Riyadh</p>
                            </div>
                            <div className='flex mb-10  items-center gap-5'>
                                <BsFillTelephoneFill/>
                                <p>(01) 4044875</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <AiOutlineMail/>
                                <p>info@masadigi.sa</p>
                            </div>
                        </div>

                    </div>
                    <div className='mt-10'>
                        <div>
                            <input type="text" placeholder="Name" className="input input-bordered w-full " />
                        </div>
                        <div className='md:flex gap-6 md:mt-8 mt-4'>
                            <input type="text" placeholder="Email" className="input input-bordered w-full md:mt-2" />
                            <input type="text" placeholder="Phone" className="input input-bordered w-full md:mt-2 mt-4" />

                        </div>
                        <div className='mt-10'>
                        <textarea className="textarea textarea-bordered h-36 w-full" placeholder="Your Quenstions"></textarea>

                        </div>
                        <div className='mt-8'>
                            <button className='px-12 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] md:w-1/2'>Send Massage</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;