import Link from "next/link";

export default function Hero(){
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/home-splash.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="max-w-4xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        Book your course today so you can crash tomorrow
                    </h1>
                    <p className="mb-5 text-2xl">
                        Why wait to find yourself disappointed by a real airline?
                        Avoid the hassle with a fake one. We offer less, while you pay more!
                    </p>
                    <Link target="youtube" href="https://www.youtube.com/@FlyCrashCourses">
                        <button className="self-center px-8 py-3 uppercase font-semibold rounded-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 text-gray-50">
                            Start A Course
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}