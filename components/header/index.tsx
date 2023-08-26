"use client"

import { useState, useEffect } from "react";

import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useWindowSize } from "@uidotdev/usehooks";

import { mainMenu } from '@/config/menu';
import { config } from '@/config/site';

import { Cta } from './cta';
import Burger from "./burger";

import './header.css';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const size = useWindowSize();

    const toggleBurger = async() =>{
        //const drawer = document.querySelector('.drawer-toggle');
        if(!isOpen){
          setIsOpen(true);
          document.body.style.overflowY = "hidden";
        } else {
          setIsOpen(false);
          document.body.style.overflowY = "scroll";
        }
      };

      useEffect(() => {
        if(size.width !== null){
            if(size.width >= 767){
                document.body.style.overflowY = "scroll";
                if(isOpen){
                    setIsOpen(false);
                    document.body.style.overflowY = "scroll";
                }
            }
        }
      }, [size.width]);

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
                <a onClick={() => toggleBurger()}>
                    <Burger active={isOpen} />
                </a>
            </div>
            {
                isOpen && (
                    <div className="h-screen">
                        <ul className="items-stretch block mt-20 space-y-6">
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
                    </div>
                )
            }
        </nav>
    )
}