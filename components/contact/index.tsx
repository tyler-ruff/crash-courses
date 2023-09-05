"use client"

import Link from "next/link";

export default function Contact(){
    return (
        <article style={{backgroundImage: 'url(/images/contact-bg.jpeg'}} className="hero">
            <div className="hero-overlay bg-opacity-50"></div>
            <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
						<div className="lg:col-span-2 lg:py-12">
							<div className="mt-8 space-y-2">
								<h2 className="text-3xl text-white font-bold mb-3">
									Email:
								</h2>
								<Link href="mailto:crashCoursesllc@outlook.com" className="btn btn-active btn-primary hover:bg-blue-800 text-gray-200/80 border-gray-100/40 rounded-full">
									CrashCoursesllc@outlook.com
								</Link>
								<br />
								<Link href="mailto:crashCoursesllc@gmail.com" className="btn btn-active btn-primary hover:bg-blue-800 text-gray-200/80 border-gray-100/40 rounded-full">
									CrashCoursesllc@gmail.com
								</Link>
							</div>
						</div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Name"
                                type="text"
                                id="name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                <div>
                                <input
                                    className="peer sr-only"
                                    id="option1"
                                    type="radio"
                                    tabIndex={-1}
                                    name="option"
                                />

                                <label
                                    htmlFor="option1"
                                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                    tabIndex={0}
                                >
                                    <span className="text-sm"> Option 1 </span>
                                </label>
                                </div>

                                <div>
                                    <input
                                        className="peer sr-only"
                                        id="option2"
                                        type="radio"
                                        tabIndex={-1}
                                        name="option"
                                    />

                                    <label
                                        htmlFor="option2"
                                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                        tabIndex={0}
                                    >
                                    <span className="text-sm"> Option 2 </span>
                                </label>
                                </div>

                                <div>
                                    <input
                                        className="peer sr-only"
                                        id="option3"
                                        type="radio"
                                        tabIndex={-1}
                                        name="option"
                                    />

                                    <label
                                        htmlFor="option3"
                                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                        tabIndex={0}
                                    >
                                    <span className="text-sm"> Option 3 </span>
                                </label>
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Message"
                                rows={8}
                                id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-primary hover:bg-blue-700 active:bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Send
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}