import Heading from "@/components/heading";

import DestinationCard from "./card";
import { destinationsList } from "./data";

export default function Destinations(){
    return (
        <article aria-label="Destinations" style={{backgroundImage: 'url(/images/destinations-bg.png)'}} className="hero">
            <div className="hero-overlay bg-opacity-10"></div>
            <div>
                <div>
                    <div className="container flex flex-col items-center px-4 py-10 md:py-16 lg:pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <div>
                            <div aria-label="Our Destinations" className="block w-full text-center">
                                <h2 className="uppercase text-lg text-secondary pl-3 py-4">
                                    Our Destinations
                                </h2>
                                <h1 className="text-5xl font-bold leadi sm:text-6xl text-gray-50">
                                    Great deals
                                </h1>
                            </div>
                        </div>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                            Why drive to the casinos when you can get there in twice the time and triple the price.
                        </p>
                        <div className="flex flex-wrap justify-center md:space-x-5 space-y-4 md:space-y-2 lg:space-y-0">
                            {
                                destinationsList.map((item, index) => {
                                    return (
                                        <DestinationCard 
                                            key={index} 
                                            symbol={item.symbol} 
                                            image={item.image} 
                                            title={item.title} 
                                            description={item.description} 
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}