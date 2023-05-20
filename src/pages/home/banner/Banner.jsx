import React from 'react';


const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-full md:w-10/12 rounded-lg" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className=" carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/free-photo/green-car-with-word-ford-front_1340-23250.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=sph" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/premium-photo/3d-render-suv-car-greenish-cyan-color-3d-illustration-isolated-pastel-colors-minimal-scene_255268-474.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=sph" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/free-vector/hand-drawn-transport-truck_23-2149161394.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/free-vector/police-car_1308-35213.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/free-vector/flat-ambulance_23-2147949454.jpg?size=626&ext=jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.freepik.com/premium-vector/red-fire-truck-with-outline-vector-illustration-cartoon-childish-style-isolated-funny-clipart_456865-1940.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                </div>
                <div className='space-y-4' data-aos="fade-left"
                    data-aos-duration="3000">
                    <h1 className="text-5xl font-bold">Let the Fun Begin: <br />
                        Your One-Stop <span className='text-orange-500'>Toy Shop</span></h1>
                    <p className="py-6">Welcome to Cars Toy Emporium! Explore our wide selection of toy cars, from sleek sports cars to rugged off-road vehicles. Ignite your child&apos;s imagination and watch as they embark on thrilling adventures. With durable designs and vibrant colors, our toy cars guarantee hours of fun and excitement. Start your collection today!</p>
                    <button className="btn btn-success">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;