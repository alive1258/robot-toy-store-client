import React from 'react';
import Banner from '../Banner/Banner';
import ToyGallery from '../ToyGallery/ToyGallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import ContactUs from '../../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ToyCategory></ToyCategory>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;