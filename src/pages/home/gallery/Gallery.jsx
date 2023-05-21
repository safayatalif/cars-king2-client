import React from 'react';
import CarouselItem from '../../../components/carouselItem/CarouselItem';

const Gallery = () => {
    const imageData = [
        "https://img.freepik.com/free-vector/japanese-old-drift-car_236756-439.jpg?size=626&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/premium-vector/off-road-adventure-vehicle-grungy-style-vector-illustration_518698-692.jpg?size=626&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/premium-vector/police-special-car-transport-truck-vehicle-militia-service-isolated-white-cartoon-illustration-concept-icon-police-force-wagon_169479-961.jpg?size=626&ext=jpg&ga=GA1.2.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67362.jpg?size=626&ext=jpg&ga=GA1.2.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-vector/gray-sports-car-isolated-white-vector_53876-64385.jpg?size=626&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148516879.jpg?size=338&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-photo/green-black-bugatti-veyron-with-black-yellow-paint_1340-23339.jpg?size=626&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-vector/concrete-mixing-truck-white-background_1308-109837.jpg?size=626&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-vector/purple-hatchback-car-purple-background-vector_53876-67341.jpg?size=626&ext=jpg&ga=GA1.2.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/free-vector/pink-sports-car-pink-background-vector_53876-64415.jpg?size=626&ext=jpg&ga=GA1.1.2137935991.1684406052&semt=ais",
        "https://img.freepik.com/premium-photo/construction-vehicles-heavy-machinery-industrial-vehicles-yellow-crane-truck_52253-2718.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/premium-photo/futuristic-racing-formula-fast-ride-finish_847288-631.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/free-vector/yellow-convertible-yellow-background-vector_53876-67336.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/free-psd/white-sport-car_176382-1597.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/free-vector/hand-drawn-quad-illustration_23-2149993574.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/premium-vector/monster-truck-isolated-background-cartoon-vector-illustration_76964-6382.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/free-vector/flat-design-offroad-illustration_23-2150140857.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
        "https://img.freepik.com/free-vector/military-truck-islated_1308-126561.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais",
    ]
    return (
        <div className='bg-hero rounded-lg my-12 p-4'>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4' data-aos="fade-left"
                data-aos-duration="3000">
                <h1 className='text-3xl font-bold'>Photo Gallery</h1>
                <p>Welcome to the Cars Toy Photo Gallery! In this collection, you will find a stunning array of toy cars that are sure to delight car enthusiasts of all ages. </p>
            </div>
            <div className="carousel carousel-center w-full h-96 p-4 space-x-4 bg-neutral rounded-box" data-aos="fade-up"
                data-aos-duration="3000">

                {
                    imageData.map((image, i) => <CarouselItem key={i} image={image}></CarouselItem>)
                }
            </div>
        </div>
    );
};

export default Gallery;