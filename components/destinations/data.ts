
export interface IDestination{
    title: string;
    symbol: string;
    image: string;
    description: string;
};

export const destinationsList = [
    {
        title: "Millville, NJ",
        image: "/images/destinations/miv.png",
        symbol: "MIV",
        description: "Narrowly avoiding the Top 10 List of most dangerous cities, Millville is certain to leave an impression. Book your course today."
    },
    {
        title: "Atlantic City, NJ",
        image: "/images/destinations/acy.png",
        symbol: "ACY",
        description: "Feeling lucky? Come roll the dice with us. Press your luck with a course to Atlantic City."
    },
    {
        title: "Northeast Philadelphia, PA",
        image: "/images/destinations/pne.png",
        symbol: "PNE",
        description: "First class or no class, see all Philly has to offer. Hurry! Book a course now."
    }

] as IDestination[];