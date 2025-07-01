import { maxPassNum } from "@/config/booking";

import { destinationsList } from '@/components/destinations/data';

import { ISelectOption } from "./data";

/**
 * Select destination (for "from" and "to")
 * @param props { label: string } <ISelectOption>
 * @example <SelectOption label="To" />
 * @returns JSX Component
 */
const SelectOption = (props: ISelectOption) => {
    return (
        <div className="form-control md:my-2 mr-0 md:mr-3">
            <select required defaultValue={``} className="select select-bordered w-full max-w-xs">
                <option value="" disabled>{props.label}</option>
                {
                    destinationsList.map((item, index) => {
                        return (
                            <option key={index} value={item.symbol}>
                                {item.title}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
};

/**
 * Passengers option select
 * @example <PassengersOption />
 * @returns JSX Component
 */
const PassengersOption = () => {
    const passengersData = Array.from(Array(maxPassNum).keys());
    return (
        <div className="form-control mr-0 md:mr-3 ">
            <select required defaultValue={``}  className="select select-bordered w-full max-w-xs">
                <option disabled value="">Passengers</option>
                {
                    passengersData.map((index) => {
                        const humanNum = (index + 1);
                        return (
                            <option key={index} value={humanNum}>
                                {humanNum}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
};

/**
 * Date input
 * @returns JSX Component
 */
const DateInput = (props: any) => {
    const maxDate: string = new Date("12/31/2099").toLocaleDateString();
    const minDate: string = new Date().toLocaleDateString();
    
    return (
        <div className="form-control mr-0 md:mr-3">
            <input 
                required 
                title={props.title}
                placeholder={props.title}
                type="date" 
                className="input w-full pr-2" 
                min={minDate}
                max={maxDate}
            />
        </div>
    );
};

/**
 * Submit button
 * @example <SubmitButton />
 * @returns JSX Component
 */
const SubmitButton = () => {
    return (
        <div className="block my-2">
            <button type="submit" className="mt-1 md:ml-3 w-full rounded-full btn-primary border border-orange-300 hover:bg-secondary hover:border-orange-300 active:ring ring-orange-200 group px-16 lg:px-20 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0">
                Search
            </button>
        </div>
    );  
};

export {
    SelectOption,
    PassengersOption,
    DateInput,
    SubmitButton
};