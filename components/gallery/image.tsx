import Image from "next/image";

import { useRef } from "react";

import { IGalleryImage } from "./data";

export default function GalleryImage(props: IGalleryImage){
    const itemId = `modal-${props.index}`;
    return (
        <div className="select-none">
            <label title="View Image" htmlFor={itemId} className="cursor-pointer">
                <Image 
                    key={props.index} 
                    alt="Gallery Image" 
                    width={500} 
                    height={500}  
                    className="object-cover w-full bg-gray-500 aspect-square" 
                    src={props.url} 
                />
            </label>
            <input type="checkbox" id={itemId} className="modal-toggle" />
            <dialog className="modal">
                <div className="modal-box overflow-hidden">
                    <figure>
                        <Image 
                            key={props.index} 
                            alt="Gallery Image" 
                            width={1500} 
                            height={1500}  
                            className="object-cover w-2/3 lg:w-full bg-gray-500 aspect-square relative mx-auto"
                            src={props.url} 
                        />
                    </figure>
                </div>
                <label className="modal-backdrop bg-gray-800/80" htmlFor={itemId}>
                    <span className="sr-only">Close</span>
                </label>
            </dialog>
        </div>
    );
}