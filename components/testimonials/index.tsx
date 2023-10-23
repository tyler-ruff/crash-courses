"use client"

import { useState } from 'react';
import { useSwipeable } from "react-swipeable";

import Card from './card';

import { testimonialList } from './data';

import { swipeConfig } from '@/config/swipe';
import { Carousel } from 'react-responsive-carousel';

/**
 * Testimonials component
 * - useSwipeable hook to cycle elements
 * - useState hook to track current element
 * @returns 
 */
export default function Testimonials(){
    const [current, setCurrent] = useState(0);
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if(eventData.dir === "Right"){
                if(current !== 0){
                    setCurrent(current === 0 ? length - 1 : current - 1);
                } else {
                    setCurrent(testimonialList.length-1);
                }
            } else if (eventData.dir === "Left") {
                if(current < (testimonialList.length-1)){
                    setCurrent(current === length - 1 ? 0 : current + 1);
                } else {
                    setCurrent(0);
                }
            }
        },
        ...swipeConfig,
    });
    return (
        <article aria-label="Customer Testimonials" style={{ backgroundImage: 'url(/images/testimonials-bg.jpeg'}} className="hero border-b border-t select-none cursor-pointer">
            <div className="hero-overlay bg-opacity-50"></div>
            <div {...handlers} className="container max-w-sm lg:max-w-xl my-12 mx-auto px-5">
                <div aria-label="Testimonials" className="block w-full text-center">
                    <h2 className="uppercase text-lg text-primary pl-3 py-4">
                        Testimonials
                    </h2>
                    <h1 className="text-5xl font-bold leadi sm:text-6xl text-gray-50">
                        Our reputation is important.
                    </h1>
                </div>
                <p className="text-gray-200 text-xl text-center pt-5 pb-8">
                    Hear what they’re saying about us.
                </p>
                <div className="flex flex-col items-center w-full space-y-8 rounded-md lg:h-full text-gray-800">
                    <Carousel 
                        showThumbs={false} 
                        dynamicHeight={false} 
                        emulateTouch={true} 
                        infiniteLoop={true} 
                        showArrows={false} 
                        showStatus={false}
                    >
                        {
                            testimonialList.map((item, index) => {
                                return (
                                    <div key={index} className="inline-flex max-w-sm p-6 lg:p-8 bg-gray-50 my-10 rounded-md" style={{minHeight: 450}}>
                                        <Card 
                                            review={item.review} 
                                            image={item.image} 
                                            rating={item.rating} 
                                        />
                                    </div>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </article>
    );
}