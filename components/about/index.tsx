import Image from "next/image";
import Link from "next/link";

import { IAboutCard } from "./data";

export default function AboutCard(props: IAboutCard){
    let onHome = false;

    if(props.onHome !== undefined){
        onHome = props.onHome;
    } 

    return (
        <article aria-label="About Us" className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 px-8 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
                    <h3 className="uppercase text-primary text-xl py-5">
                        Welcome to Fly crash corses
                    </h3>
                    <h1 className="text-4xl font-bold lead sm:text-4xl select-none">
                        Meet our expert aviation maintenance team
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        We may be horrible at running an airline. However, we are a team of very knowledgeable and experienced aircraft mechanics. 
                        Our purpose is to promote aviation maintenance as a career. Point you in the right direction to get started. Help you obtain your airframe and powerplant license. 
                        Provide professional insight to students and current aircraft mechanics.
                    </p>
                    {
                        onHome !== false && (
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link href="/about">
                                    <button className="select-none self-center px-8 py-3 uppercase font-semibold rounded-full btn-primary hover:bg-blue-800 active:bg-blue-900 text-gray-50">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div className="flex select-none items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image 
                        src="/images/tadd-and-fernando-main.png" 
                        alt="Tadd and Fernando"
                        width={492}
                        height={320}
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </article>
    );
}