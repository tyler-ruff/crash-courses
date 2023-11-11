import { mainMenu } from '@/config/menu';

import { INav } from './data';
import Link from 'next/link';

const Nav = (props: INav) => {
    return (
        <ul className="items-stretch hidden space-x-3 lg:flex select-none pt-2">
            {
                mainMenu.nav.map((item, index) => {
                    return (
                        <li className="flex" key={index}>
                            <Link aria-label={item.label}
                                href={item.href || ``}
                                target={item.target}
                                className={`menu-item flex items-center px-4 hover:text-primary mb-1 border-b-2 font-bold border-transparent ${props.pathname === item.href && `text-primary border-blue-500`}`}>
                                {item.label}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const MobileNav = (props: INav) => {
    return (
        <ul className="items-stretch block mt-20 ml-10 space-y-6">
            {
                mainMenu.nav.map((item, index) => {
                    return (
                        <li className="flex" key={index}>
                            <Link aria-label={item.label}
                                href={item.href || ``}
                                target={item.target}
                                className={`menu-item flex items-center px-4 hover:text-blue-500 mb-1 border-b-2 font-bold border-transparent ${props.pathname === item.href && `text-blue-500 border-blue-500`}`}>
                                    {item.label}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export {
    Nav,
    MobileNav
};