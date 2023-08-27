import Image from "next/image";
import Link from "next/link";

import { brand } from "@/config/site";
import { mainMenu } from "@/config/menu";

import { destinationsList } from "@/components/destinations/data";

export default function Footer(){
    const year = new Date().getFullYear();
    const date = new Date().toISOString();
    return (
        <div className="footer p-10 bg-base-200 text-base-content border-t">
            <div>
                <div className="select-none opacity-80">
                    <Image
                        src="/images/crash-logo-black.svg"
                        width={50}
                        height={50}
                        alt="Crash Courses Logo"
                    />
                </div>
                <p>
                    &copy;
                    <time dateTime={date}>
                        {year}
                    </time>
                    &nbsp;{brand.company}
                    <br/>
                        All Rights Reserved.
                    <br/>
                    <span className="text-xs select-none">
                        Providing unreliable service since 2022.
                    </span>
                </p>
            </div> 
            <div>
                <span className="footer-title select-none">
                    Navigation    
                </span> 
                {
                    mainMenu.nav.map((item, index) => {
                        return (
                            <Link key={index} href={item.href || ``} className="link link-hover">
                                {item.label}
                            </Link> 
                        );
                    })
                }
            </div>
            <div>
                <span className="footer-title select-none">
                    Destinations    
                </span> 
                {
                    destinationsList.map((item, index) => {
                        return (
                            <Link key={index} href="#" className="link link-hover">
                                {item.title} ({item.symbol})
                            </Link> 
                        );
                    })
                }
            </div>
        </div>
    );
}