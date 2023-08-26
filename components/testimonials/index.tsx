"use client"
import { useState } from 'react';
import { useSwipeable } from "react-swipeable";

import Heading from '@/components/heading';
import Card from './card';

import { testimonialList } from './data';

import './testimonials.css';

/**
 * Testimonials component
 * - useSwipeable hook to cycle elements
 * - useState hook to track current element
 * @returns 
 */
export default function Testimonials(){
    const [current, setCurrent] = useState(0);
    const config = {
        delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
        preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
        trackTouch: true,                      // track touch input
        trackMouse: true,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
        swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
        touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
    };
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            //console.log("User Swiped!", eventData);
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
        ...config,
    });
    return (
        <div style={{backgroundImage: 'url(/images/testimonials-bg.jpeg'}} className="hero border-b border-t select-none cursor-pointer">
            <div className="hero-overlay bg-opacity-80"></div>
            <article {...handlers} className="container max-w-xl my-12 mx-auto px-5">
                <Heading section="Testimonials" title="Our Reputation is Important." />
                <p className="text-gray-200 text-center pt-5 pb-8">
                    Hear what they’re saying about us.
                </p>
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50 text-gray-800">
                    {
                        testimonialList.map((item, index) => {
                            return (
                                current === index && (
                                    <div className={index === current ? '' : ''}>
                                    <Card key={index} review={item.review} image={item.image} rating={item.rating} />
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
            </article>
        </div>
    );
}