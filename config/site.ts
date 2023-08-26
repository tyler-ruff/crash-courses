import { Brand, Config, Social } from "@/lib/types/site";

const config = {
    name: "Fly CrashCourses",
    fbAppId: "",
    description: "Main website for Blazed Labs. We turn dreams into reality."
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs",
    youtube: "https://www.youtube.com/@FlyCrashCourses/videos"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "Fly CrashCourses LLC",
    email: "hello@blazed.space"
} as Brand;

export {
    config, brand, social
};