import React from 'react';

const Footer = () => {
    return (
        <div className="mx-auto max-w-[1440px] px-6 md:px-28 pt-10 md:pt-36 bg-[#050D09]">
        <div className=" ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10  pb-8">
            <div>
              <div>
                {/* <img src={fotlgo} alt="" /> */}
              </div>
              <div className="pt-6">
                <p>
                  Masarat Digital Company is advance technology <br />
                  enabler in various industries/ tracks / paths (HR, <br />
                  Healthcare,Supply Chain & Sports). For the <br />
                  consulting area.
                </p>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-3 grid-cols-2 md:pt-6 gap-4">
                <div>
                  <p className="text-lg pb-6 text-white">Quick Links</p>
                  <p>Home</p>
                  <p>About</p>
                  <p>Service</p>
                  <p>Solution</p>
                  <p>Team</p>
                </div>
                <div>
                  <p className="text-lg pb-6 text-white">About us</p>
                  <p>Our Vision</p>
                  <p>Our Team</p>
                  <p>Our Works</p>
                </div>
                <div>
                  <p className="text-lg pb-6 text-white">Help</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Contact us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-4 flex justify-between mx-auto max-w-7xl">
            <div>
              <p className="text-white">
                © Copyright 2023, All Rights Reserved by Masarat Digital
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <p className="text-white">Follow us on:</p>
               
               {/* <img  src={sss} alt="" />
              
                <img src={tw} alt="" />
                <img src={dis} alt="" />
                <img src={you} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Footer;