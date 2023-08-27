import Image from "next/image";

import Heading from "@/components/heading";

import { galleryData } from "./data";

export default function Gallery(){
    return (
        <article aria-label="Gallery" style={{backgroundImage: 'url(/images/gallery-bg.jpeg)'}} className="hero border-b border-t">
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="py-10">
                <div className="block py-10">
                    <Heading section="Our Gallery" title="Recent Aviation Events" />
                </div>
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        {
                            galleryData.map((item, index) => {
                                return (<Image key={index} alt="Gallery Image" width={500} height={500}  className="object-cover w-full bg-gray-500 aspect-square" src={item} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    );
}