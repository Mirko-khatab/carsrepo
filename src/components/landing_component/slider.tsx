import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { imagesData } from '../constant/product';
import { useTranslation } from 'react-i18next';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative top-0">
            {/* Text content above the slider */}
            <div className="absolute bottom-0 left-0 right-0 z-[3] p-6 bg-opacity-50 bg-gray-800 text-white">
                <div className="home__data">
                    <div className="">
                        <h1 className="text-white text-5xl">
                         Learn about cars 
                        </h1>
                        <h2 className="text-gray-200 text-3xl  leading-[3rem] ">
                            cars information and news

                        </h2>
                    </div>
                    <div className="home__footer">
                        <p className="home__description">
                            cars news and compare cars in one place learn about cars and compare cars 
                        </p>
                   
                    </div>
                </div>
            </div>

            {/* Carousel container */}
            <div id="carouselExampleIndicators" className="relative " data-twe-carousel-init data-twe-ride="carousel">
              

                {/* Carousel items */}
                <div className="relative w-full h-[660px] overflow-hidden after:clear-both after:block after:content-['']">
                    {imagesData.map((image, index) => (
                        <div
                            key={image.id}
                            className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out ${currentIndex === index ? 'block' : 'hidden'
                                }`}
                            data-twe-carousel-item
                        >
                            <Image src={image.src} width={300} height={100} alt="Wild Landscape" className="block w-full" />
                        </div>
                    ))}
                </div>

                {/* Carousel controls */}
                {/* <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-90 focus:opacity-90"
                    type="button"
                    onClick={goToPrevSlide}
                    aria-label="Previous Slide"
                >
                    <span className="inline-block h-8 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                </button>

                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-90 focus:opacity-90"
                    type="button"
                    onClick={goToNextSlide}
                    aria-label="Next Slide"
                >
                    <span className="inline-block h-8 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </button> */}
            </div>
        </div>
    );
};

export default Slider;
