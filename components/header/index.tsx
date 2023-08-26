"use client"

import Image from "next/image";
import { usePathname } from 'next/navigation';

import { mainMenu } from '@/config/menu';
import { config } from '@/config/site';

import { Cta } from './cta';
import Burger from "./burger";

import './header.css';


export default function Header(){
    /*
        Note: <a rel="noopener noreferrer"> should
        only be used on external links 

    */

    const pathname = usePathname();

    return (
        <nav id="nav" role="navigation" className="p-4 bg-gray-100 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <a href="/" 
                   aria-label="Back to homepage"
                   title={config.name} 
                   className="flex items-center p-2 hover:opacity-75">
                    <Image 
                        src="/images/crash-logo.png" 
                        width={40} 
                        height={40} 
                        alt="Crash Logo" 
                    />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    {
                        mainMenu.nav.map((item, index) => {
                            return (
                                <li className="flex" key={index}>
                                    <a aria-label={item.label}
                                       rel="noopener noreferrer" 
                                       href={item.href}
                                       className={`menu-item flex items-center px-4 hover:text-blue-500 mb-1 border-b-2 font-bold border-transparent ${pathname === item.href && `text-blue-500 border-blue-500`}`}>
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                {
                    mainMenu.cta !== undefined && (<Cta label={mainMenu.cta.label} url={mainMenu.cta.href} />)
                }
                <Burger />
            </div>
        </nav>
    )
}