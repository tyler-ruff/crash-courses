"use client"

import Link from 'next/link';

export function Cta(props: any){
    return (
        <Link 
            aria-label={props.label}
            href={props.url}
            className="hidden lg:flex self-center px-8 py-3 font-semibold rounded-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 text-gray-50">
            {props.label}
        </Link>
    );
}