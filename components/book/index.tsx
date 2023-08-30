import BookingForm from "./form";

export default function Book(){
    return (
        <article aria-label="Booking Form" style={{backgroundImage: 'url(/images/damaged-glass.jpg'}} className="hero border-t select-none">
            <div className="hero-overlay bg-orange-800 bg-opacity-30"></div>
            <div style={{minHeight: 420}} className="hero mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="mt-8 grid grid-cols-2 lg:mt-0 lg:grid-cols-5 lg:gap-y-5">
                        <div className="col-span-2">
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                                    Book a Course
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end py-5 lg:py-0">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}