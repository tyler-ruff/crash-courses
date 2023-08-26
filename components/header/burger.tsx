

export default function Burger(props: any){
    const isOpen = props.active;
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    return (
        <button
            aria-label="Toggle mobile menu"
            className="p-4 lg:hidden">
            {/*
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            */}
            <div
                className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-1 opacity-100 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    );
}