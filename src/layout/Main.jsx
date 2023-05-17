import React from 'react';

import Header from "../components/Shared/Header";
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <div className='px-4'>
                <Header></Header>
                <div className="min-h-[calc(100vh-200px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;