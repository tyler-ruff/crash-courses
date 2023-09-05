export enum Rating{
    'zero' = 0,
    'one' = 1,
    'two' = 2,
    'three' = 3,
    'four' = 4,
    'five' = 5
};

export interface ITestimonial{
    image: string;
    rating: number;
    review: string;
};

export const testimonialList = [
    {
        image: "/images/testimonials/customer-1.jpg",
        rating: Rating.zero,
        review: "I bought my tickets six months ago. I've been sitting here at the airport the whole time. I'm beginning to think this airline is not legit. Please, do not book a flight with CRASHCOURSES. I just want to go home."
    },
    {
        image: "/images/testimonials/customer-2.webp",
        rating: Rating.zero,
        review: "Dealing with this airline is pure terror! I never knew the true meaning of torture until I booked with CRASHCOURSES. No one should ever have to endure this amount of suffering. I was emotionally triggered and psychologically traumatized from my experience!"
    },
    {
        image: "/images/testimonials/customer-3.webp",
        rating: Rating.one,
        review: "CRASHCOURSES is a disaster! Heard nothing but horrible things. Would never fly with these people… Terrible airline, and I know more about crashes than the airlines do. Believe me. Very Sad!"
    }
] as ITestimonial[];

