import { social } from "@/config/site";
import Image from "next/image";

export default function Subscribe(){
    return (
        <div style={{backgroundImage: 'url(/images/damaged-glass.jpg'}} className="hero select-none">
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="text-teal-600">
                        <Image src="/images/crash-logo-white.svg"
                               width={60}
                               height={60}
                               alt="Logo"
                        />
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                        <div className="col-span-2">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    We hate delays! Be there when we take off.
                                    &nbsp;
                                    <a href={social.youtube}
                                       target="youtube"
                                       className="hover:underline">
                                        Subscibe Now!
                                    </a>
                                </h2>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full">
                                <label htmlFor="UserEmail" className="sr-only"> 
                                    Email 
                                </label>

                                <div className="p-2 sm:flex sm:items-center">
                                    <div className="sm:flex w-full lg:ring ring-orange-500 focus-within:ring-orange-700 rounded-full">
                                        <input
                                            type="email"
                                            id="UserEmail"
                                            placeholder="john@example.com"
                                            className="w-full border-none rounded-full sm:rounded-none sm:rounded-l-full focus:border-transparent focus:ring-transparent sm:text-sm py-3 px-5"
                                        />

                                        <button
                                            className="mt-1 w-full rounded-full sm:rounded-none sm:rounded-r-full bg-orange-500 hover:bg-orange-400 group px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}