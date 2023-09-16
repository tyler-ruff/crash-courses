import Image from "next/image";

import { ITestimonial } from "./data";
import Rating from "./rating";

export default function Card(props: ITestimonial){
    return (
        <div className="flex flex-col items-center w-full space-y-8 carousel-item">
            <Image
                src={props.image}
                alt="Customer" 
                width={500}
                height={500}
                className="w-64 h-64 bg-gray-500" 
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
                "{props.review}"
            </blockquote>
            <div className="text-center text-gray-600">
                <Rating rating={props.rating} />
            </div>
        </div>
    )
}