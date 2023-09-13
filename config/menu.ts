import { Menu, MenuItem } from "@/lib/types/site";

const mainMenu = {
    _id: "root",
    nav: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About Us",
            href: "/about"
        },
        {
            label: "Courses",
            href: "/courses"
        },
        {
            label: "Gallery",
            href: "/gallery"
        },
        {
            label: "Travel Agents",
            href: "https://www.facebook.com/tripsandtravelbytanya",
            target: "_blank"
        },
        {
            label: "Patreon",
            href: "https://patreon.com/FlyCrashCourses",
            target: "_blank"
        }
    ] as MenuItem[],
    cta: {
        label: "Contact Us",
        href: "/contact"
    } as MenuItem
} as Menu;

export {
    mainMenu
};

