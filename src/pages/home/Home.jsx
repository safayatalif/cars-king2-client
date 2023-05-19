import React from 'react';
import Banner from './banner/Banner';
import Gallery from './gallery/Gallery';
import Category from './category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;