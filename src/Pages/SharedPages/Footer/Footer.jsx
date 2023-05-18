import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF ,FaPinterestP} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="px-6 md:mt-36 md:px-10  md:py-10 bg-[#4ee9d9]">
      <div className="py-6">
        <div className="grid border-b md:grid-cols-2 grid-cols-1 gap-10  pb-8">
          <div>
            <div className='flex items-center gap-2'>
              <div className=''>
                <Link to='/'>
                  <img className='h-20 w-20' src={logo} alt="" />
                </Link>
              </div>
              <div className='text-3xl font-bold mb-2'>RobotToyStudio</div>
            </div>
            <div className="pt-6 ">
              <p>
                Embark on exciting adventures and explore a world of 
                technological<br /> marvels with our captivating robot toys that offer advanced features,<br /> realistic movements, and interactive play experiences for all ages.
              
              </p>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-3 grid-cols-2 md:pt-6 gap-4">
              <div>
                <p className="text-lg pb-6 text-white">Get To KNow Us</p>
                <p>Home</p>
                <p>All Toys</p>
                <p>Privacy & Security</p>
                <p>Terms & Conditions</p>
                <p>Contact us</p>
              </div>
              <div>
                <p className="text-lg pb-6 text-white">Let Us Help You</p>
                <p>Your Account</p>
                <p>Order History</p>
                <p>Shipping</p>
                <p>Returns & Exchanges</p>
                <p>Payment Informations</p>
              </div>
              <div>
                <p className="text-lg pb-6 text-white">Business Opportunities</p>
                <p>Become a MarketPlace Vendor</p>
                <p>Become a Dealer</p>
                <p>Suggest Your Products</p>
                <p>Suggest your Apps</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-4 flex justify-between ">
          <div>
            <p className="text-white">
              © Copyright 2023, All Rights Reserved by Robot Toys Inc
            </p>
          </div>
        
          <div>
            <div className="flex gap-4">
              <p className="text-white">Follow us on:</p>

              <div className='bg-gray-400 hover:bg-[#28589c] text-white h-8 w-8 rounded-full flex items-center justify-center'>
              <FaFacebookF/>
              </div>
              <div className='bg-gray-400 hover:bg-[#E1306c] text-white h-8 w-8 rounded-full flex items-center justify-center'>
              <BsInstagram/>
              </div>
              <div className='bg-gray-400 hover:bg-[#ff0000] text-white h-8 w-8 rounded-full flex items-center justify-center'>
              <AiFillYoutube/>
             
              </div>
              <div className='bg-gray-400 hover:bg-[#a01c23] text-white h-8 w-8 rounded-full flex items-center justify-center'>
              <FaPinterestP/>
              </div>
             
              
                {/* <img src={tw} alt="" />
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