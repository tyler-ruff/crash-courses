import Image from "next/image";

import { IDestination } from "./data";

export default function DestinationCard(props: IDestination){
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
            <Image
                     src={props.image}
                     width={338}
                     height={245}
                     alt="Destination"
                     className="object-cover object-center w-full rounded-md h-72 bg-gray-500" 
            />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium uppercase text-blue-600">
                    {props.symbol}
                </span>
                <h2 className="text-xl font-semibold tracki">
                    {props.title}
                </h2>
            </div>
            <p className="text-gray-800">
                {props.description}
            </p>
        </div>
    );
}