import React from 'react';
import Lottie from "lottie-react";
import runCar from '../../../assets/72049-red-car.json'
import runCar2 from '../../../assets/3532-car.json'



const RunCar = () => {
    return (
        <div className='bg-hero rounded-lg my-12 p-4'>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4' data-aos="fade-left" data-aos-duration="3000">
                <h1 className='text-3xl font-bold'>Rev Up the Fun</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2' data-aos="fade-left" data-aos-duration="3000">
                <div>
                    <Lottie className='w-full h-80 md:h-96' animationData={runCar}></Lottie>
                </div>
                <div>
                    <Lottie className='w-full h-80 md:h-96' animationData={runCar2}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default RunCar;