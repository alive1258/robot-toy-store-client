import React, { useEffect } from 'react';
import hand2 from '../../assets/hand2.png'
import UseTitle from '../../Hooks/UseTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    UseTitle("About Us")
    return (
        <div className='mt-28'>
            <div className='text-center mb-14 px-6' data-aos="fade-right">
                <h1 className='text-4xl font-bold text-[#1A3D37] '>About Us</h1>
                <p className='mt-2'>At Robot Toy World, where imagination meets robotics, we offer a carefully <br /> curated collection of high-quality and innovative robot toys</p>

            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="md:pl-24 pt-20 px-6">

                    <h1 className="md:text-5xl text-2xl text-[#1A3D37] pt-4 font-semibold">
                        We Have 15 Years Of <br />
                        Experience On Business <br />
                        Development area
                    </h1>
                    <p className="pt-6 ">
                        Welcome to our robot toy store, where imagination meets technology! At our store, we are passionate about providing the latest and greatest robotic toys that inspire creativity, learning, and endless hours of fun for children and robot enthusiasts of all ages. With a wide selection of cutting-edge robots, friendly customer service, and a commitment to quality, we strive to make your shopping experience truly electrifying. Explore our collection and embark on a robotic adventure with us!
                    </p>
                    <div className="flex gap-28 pt-12">
                        <div>
                            <p className="font-bold text-2xl">1432+</p>
                            <p>Happy Clients</p>
                        </div>
                        <div>
                            <div>
                                <p className="font-bold text-2xl">25334+</p>
                                <p>Sell Toys</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 mb-6">
                        <button className="px-8 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ">View Services</button>
                    </div>
                </div>
                <div data-aos="flip-right" className='px-6 '>
                    <img className='md:h-[600px] w-full' src={hand2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;