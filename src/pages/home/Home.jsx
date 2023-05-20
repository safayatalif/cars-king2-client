import React from 'react';
import Banner from './banner/Banner';
import Gallery from './gallery/Gallery';
import Category from './category/Category';
import BlogPost from './blogPost/BlogPost';
import Contact from './contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <BlogPost></BlogPost>
            <Contact></Contact>
        </div>
    );
};

export default Home;