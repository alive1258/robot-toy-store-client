import React from 'react';
import './Banner.css'
import ceoimg from '../../../assets/ceo.jpg'

const Banner = () => {
    return (
        <div className='bannerbg mb-20 mt-20 h-[780px]'>
            <div className='md:px-10 px-6 md:pt-16'>

                <div className="flex pt-6 p gap-4 ">
                
                    <div>
                        <h3 className="md:text-2xl font-semibold">Best Supportive Team Ever</h3>
                    </div>
                </div>

                <div className="space-y-8 pt-4">
                    <h1 className="md:text-6xl text-[#1A3D37] font-bold">
                        Explore the Exciting <br /> World of Robot Toys

                    </h1>
                    <p className='text-[#1A3D37]'>
                        Experience the future of play with our interactive and intelligent Robot toys.
                        Discover <br /> a world of imagination and innovation with our collection of cutting-edge  robot <br /> toys
                        From dancing and singing to coding and problem-solving, our robot toys offer <br /> endless possibilities.our robot toys are ready to be your child's new best buddy.
                       <br /> Unleash your child's creativity and watch their imaginations soar with our captivating <br /> robot toys.
                    </p>
                    <div>
                        <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ">Contact Us</button>
                    </div>
                </div>
              
                <div className="pt-6 flex gap-2">
                    <div>
                        <img className="h-[50px] w-[50px] rounded-full" src={ceoimg} alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-[#0F172A]">Sulli Kiri</h3>
                        <p>CEO, Supreme World.</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center pt-2">
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                    <div className="w-12 h-2 bg-[#657790] rounded-lg"></div>
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                </div>

            </div>
        </div>
    );
};

export default Banner;