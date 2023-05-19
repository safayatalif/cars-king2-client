import React from 'react';


const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-full md:w-1/2 rounded-lg">
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
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;