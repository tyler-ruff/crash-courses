import Image from "next/image";

import { useRef } from "react";

import { IGalleryImage } from "./data";

export default function GalleryImage(props: IGalleryImage){
    return (
        <div className="select-none">
                <Image 
                    key={props.index} 
                    alt="Gallery Image" 
                    width={500} 
                    height={500}
                    className="object-cover bg-gray-500 aspect-square" 
                    src={props.url} 
                />
        </div>
    );
}