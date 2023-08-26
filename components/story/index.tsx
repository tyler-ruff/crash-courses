import Image from "next/image";

export default function Story(){
    return (
        <div style={{backgroundImage: 'url(/images/story-bg.jpeg'}} className="hero">
            <div className="hero-overlay bg-opacity-90"></div>
            <article className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="w-full text-center">
                    <h2 className="uppercase text-xl text-blue-200">
                        Our Story
                    </h2>
                    <h2 className="text-4xl text-white font-bold">
                        A Course in History
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
                    <div className="relative h-64 overflow-hidden h-80 lg:h-full md:ml-32">
                        <Image
                            alt="Our Story"
                            src="/images/story-1.png"
                            className="absolute inset-0 h-full lg:w-3/4"
                            width={492}
                            height={521}
                        />
                    </div>

                    <div className="lg:py-16">
                        <div className="space-y-4 text-lg font-bold italic text-gray-200 mr-10">
                            <p>
                                On April 1st 2022, Tadd touched down at the Miami International Airport in Florida. 
                                With the hope of changing the Aviation industry, he attended a meeting with prominent Illuminati members along with the families of Morgan, Rockefeller, Rothchild, Barzini, Tattaglia and all the heads of the five families. 
                                Certain this was all a good idea, the pitch was ultimately a success. He was able to secure a small loan for the creation of his Airline. 
                                CrashCourses was born, forever changing the way we know aviation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
                    <div className="lg:py-16">
                        <div className="space-y-4 text-lg font-bold italic text-gray-200 ml-10">
                            <p>
                                After given the green light for the creation of CrashCourses, Tadd quickly realized he had no pilots to fly his airplanes. 
                                He also realized he had no airplanes. 
                                This would prove to be problematic given the fact that he now owed a lot of people a lot of money with no means to turn a profit. 
                                On February 25th 2021, Fernando enrolled in his first flight lesson. 
                                Since then, he has had a few more lessons. 
                                He is now the Chief and most Senior Pilot at CrashCourses.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-64 overflow-hidden h-80 lg:h-full md:ml-32">
                        <Image
                            alt="Our Story"
                            src="/images/story-2.png"
                            className="absolute inset-0 h-full w-3/4"
                            width={489}
                            height={430}
                        />
                    </div>
                </div>
            </article>
        </div>
    );
}