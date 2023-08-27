import { IHeading } from "./data";

export default function Heading(props: IHeading){
    return (
        <div aria-label={props.title} className="block w-full text-center">
            <h2 className="uppercase text-lg text-gray-300 pl-3 py-4">
                {props.section}
            </h2>
            <h1 className="text-5xl font-bold leadi sm:text-6xl text-gray-50">
                {props.title}
            </h1>
        </div>
    );
}