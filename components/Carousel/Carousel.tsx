"use client"

import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
    height?: string;
    imagePaths: string[];
    imageDuration?: number;
    pauseOnHover?: boolean;
}

function Carousel({ height = "h-[400px]", imagePaths, imageDuration = 7, pauseOnHover = true }: Props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    //goes to previous slide
    const prevSlide = () => {
        const lastIndex = imagePaths.length - 1;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        setCurrentImageIndex(index);
    }

    //goes to next slide
    const nextSlide = () => {
        const lastIndex = imagePaths.length - 1;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        console.log('index: ', index);
        setCurrentImageIndex(index);
    }

    //pauses the carousel when mouse is over
    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsPaused(true);
        }
    };

    //unpauses the carousel when mouse is not over
    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsPaused(false);
        }
    };

    //changes the slide every 7 seconds
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        const startInterval = () => {
            interval = setInterval(() => {
                if (!isPaused) {
                    nextSlide();
                }
            }, imageDuration * 1000);
        };

        const stopInterval = () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        };

        startInterval();

        return () => {
            stopInterval();
        };
    }, [currentImageIndex, imageDuration, isPaused, nextSlide]);

    return (
        <div
            className={`max-w-[1440px] ${height} w-full relative group`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div
                style={{ backgroundImage: `url(${imagePaths[currentImageIndex]})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>

            {/* left arrow */}
            <div className='transition-opacity ease-in duration-400 opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-0 translate-y-[-50%] 
            left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <ChevronLeftIcon onClick={prevSlide} width={30} />
            </div>

            {/* right arrow */}
            <div className='transition-opacity ease-in duration-400 opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-0 translate-y-[-50%] 
            right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <ChevronRightIcon onClick={nextSlide} width={30} />
            </div>

            {/* dots */}
            <div className="flex justify-center mt-8 absolute inset-x-0 bottom-6">
                {imagePaths.map((_, index) => (
                    <div
                        onClick={() => setCurrentImageIndex(index)}
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full hover:bg-gray-400 ${currentImageIndex === index ? 'bg-gray-700' : 'bg-gray-300'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
