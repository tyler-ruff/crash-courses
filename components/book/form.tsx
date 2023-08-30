"use client"

import { SyntheticEvent, useState } from "react";

import { SelectOption, DateInput, PassengersOption, SubmitButton } from "./fields";

/**
 * Booking form
 * @function
 * @example <BookingForm />
 * @returns JSX Component
 */
export default function BookingForm(){
    let [error, setError] = useState(false);

    const submitForm = async(e: SyntheticEvent) => {
        e.preventDefault();
        setError(true);
    };
    
    const tryAgain = () => {
        setError(false);
    };

    const ErrorMessage = () => {
        return (
            <div className="alert alert-error border-orange-400 max-w-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>
                    OOPS!! Sorry, your information could not be processed. 
                    Please <a onClick={tryAgain} className="cursor-pointer hover:underline">
                        Try again.
                    </a>
                </span>
            </div>
        );
    };

    return (
        <div>
            {!error ? (
            <form onSubmit={submitForm} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <SelectOption label="From" />
                    <SelectOption label="To" />
                    <DateInput title="Departure Date" />
                    <DateInput title="Arrival Date" />
                    <PassengersOption />
                    <SubmitButton />
                </div>
            </form>
            ) : (
                <ErrorMessage />
            )}
        </div>
    )
}



