"use client"; // Must be a client component to use searchParams

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import EventSection, { EventItem } from "./EventSection";

interface EventDetailsProps {
    groupEvents: EventItem[];
    soloEvents: EventItem[];
    groupEventsImageFolder: string;
    soloEventsImageFolder: string;
}

const EventDetails = ({ 
    groupEvents, 
    soloEvents, 
    groupEventsImageFolder, 
    soloEventsImageFolder 
}: EventDetailsProps) => {
    // 1. Grab the category from the URL
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    // 2. Determine titles based on the category
    let firstTitle = "GROUP EVENTS";
    let secondTitle = "SOLO EVENTS";

    if (category === "technical") {
        firstTitle = "COMPETITIONS";
        secondTitle = "WORKSHOPS";
    } else if (category === "general") {
        firstTitle = "SWAG ITEMS"; // Adjust as needed
        secondTitle = "PROSHOW EVENTS";      // Adjust as needed
    }

    return (
        <div className="w-full bg-black text-white flex flex-col items-center justify-start pt-0 md:pt-20 pb-32 md:pb-60 relative">
            <EventSection 
                title={firstTitle} 
                events={groupEvents} 
                imageFolder={groupEventsImageFolder} 
            />
            
            <EventSection 
                title={secondTitle} 
                events={soloEvents} 
                imageFolder={soloEventsImageFolder} 
            />

            {/* Register Button */}
            <div className="w-full flex justify-center mt-40 z-50 relative">
                <Link href="/events">
                    <button className="bg-[#A41F22] text-white font-akira text-sm md:text-3xl px-8 py-3 md:px-20 md:py-6 hover:bg-white hover:text-black transition-colors duration-300">
                        REGISTER HERE
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventDetails;