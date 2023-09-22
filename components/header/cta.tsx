import Link from 'next/link';

import { ICta } from './data';

export function Cta(props: ICta){
    return (
        <Link 
            aria-label={props.label}
            href={props.url}
            className="hidden lg:flex self-center px-8 py-3 font-semibold rounded-full btn-primary  hover:bg-secondary active:ring ring-orange-200 text-gray-50 select-none">
            {props.label}
        </Link>
    );
}