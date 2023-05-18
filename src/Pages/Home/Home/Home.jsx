import React from 'react';
import Banner from '../Banner/Banner';
import ToyGallery from '../ToyGallery/ToyGallery';
import ToyCategory from '../ToyCategory/ToyCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default Home;