import Image from "next/image";

import { ITestimonial } from "./data";

export default function Card(props: ITestimonial){
    return (
        <div className="flex flex-col items-center w-full space-y-8 carousel-item">
            <Image
                src={props.image}
                alt="Customer" 
                width={250}
                height={250}
                className="w-52 h-52 rounded-full bg-gray-500" 
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
                "{props.review}"
            </blockquote>
            <div className="text-center text-gray-600">
                <p>
                    {props.rating} out of 5 stars
                </p>
            </div>
        </div>
    )
}