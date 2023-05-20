import React from 'react';
import Banner from '../Banner/Banner';
import ToyGallery from '../ToyGallery/ToyGallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import ContactUs from '../../ContactUs/ContactUs';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ToyCategory></ToyCategory>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;