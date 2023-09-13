import Link from "next/link";

import { IHero } from "./data";

export default function Hero(props: IHero){
    return (
        <article aria-label="Hero" className="hero py-20" style={{backgroundImage: 'url(/images/home-splash.png)'}}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-left text-neutral-content select-none">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        {props.title}
                    </h1>
                    <p className="mb-5 text-2xl">
                        {props.body}
                    </p>
                    <Link target={props.action.target || ``} href={props.action.url}>
                        <button className="self-center px-8 py-3 uppercase font-semibold rounded-full btn-primary hover:bg-blue-800 active:bg-blue-900 text-gray-50">
                            {props.action.label}
                        </button>
                    </Link>
                </div>
            </div>
        </article>
    );
}