"use client"

import Link from "next/link";

export default function Contact(){
    return (
        <article style={{backgroundImage: 'url(/images/contact-bg.jpeg'}} className="hero">
            <div className="hero-overlay bg-opacity-50"></div>
            <div>
                <div className="mt-32 justify-between px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex mt-24 grid grid-cols-1 gap-x-24 gap-y-8 lg:grid-cols-5">
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

                        <div className="lg:col-span-2 lg:py-12">
							<div className="mt-8 space-y-2">
								<h2 className="text-3xl text-white font-bold mb-3">
									Connect:
								</h2>
								<Link href="https://patreon.com/FlyCrashCourses" target="_blank" className="btn btn-active btn-primary hover:bg-blue-800 text-gray-200/80 border-gray-100/40 rounded-full">
									Become a Patron
								</Link>
								<br />
								<Link href={social.youtube || ``} target="_blank" className="btn btn-active btn-primary hover:bg-blue-800 text-gray-200/80 border-gray-100/40 rounded-full">
									Youtube Channel
								</Link>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </article>
    );
}