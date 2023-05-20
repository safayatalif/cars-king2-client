import React from 'react';

const CarouselItem = ({image}) => {
    return (
        <div className="carousel-item w-full mx-auto">
            <img src="https://img.freepik.com/free-vector/boy-pulling-red-wagon-isolated_1308-38007.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" className="rounded-box w-1/3 mx-auto" />
            <img src={image} className="rounded-box ml-4 w-1/2 md:w-full mx-auto" />
        </div>
    );
};

export default CarouselItem;