"use client"

import { useState } from 'react';
import { useSwipeable } from "react-swipeable";

import Heading from '@/components/heading';
import Card from './card';

import { testimonialList, swipeConfig } from './data';

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
        <article aria-label="Customer Testimonials" style={{backgroundImage: 'url(/images/testimonials-bg.jpeg'}} className="hero border-b border-t select-none cursor-pointer">
            <div className="hero-overlay bg-opacity-80"></div>
            <div {...handlers} className="container max-w-xl my-12 mx-auto px-5">
                <Heading section="Testimonials" title="Our Reputation is Important." />
                <p className="text-gray-200 text-center pt-5 pb-8">
                    Hear what they’re saying about us.
                </p>
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50 text-gray-800">
                    {
                        testimonialList.map((item, index) => {
                            return (
                                current === index && (
                                    <div key={index} className={index === current ? '' : ''}>
                                        <Card review={item.review} image={item.image} rating={item.rating} />
                                    </div>
                                )
                            )
                        })
                    }
                    <div className="flex space-x-2">
                        {
                            testimonialList.map((item, index) => {
                                return (<button key={index} type="button" onClick={() => setCurrent(index)} aria-label={`Page ${index}`} className={`w-2 h-2 rounded-full hover:bg-gray-600 ${current === index ? `bg-gray-900` : `bg-gray-400`}`}></button>)
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    );
}