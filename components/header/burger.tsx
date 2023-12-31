import { IBurger } from './data';

export default function Burger(props: IBurger){
    const isOpen = props.active;
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    return (
        <button
            aria-label="Toggle mobile menu"
            className="p-4 pt-5 pr-6 lg:hidden">
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