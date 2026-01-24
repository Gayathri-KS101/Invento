import Image from "next/image";
import Link from "next/link";
import EventCard from "../components/EventCard";

const SapthaEventDetails = () => {
    // Defines the data for Group Events. 
    // You can manually change the image, title, and date for each event here.
    const groupEvents = [
        { image: "event1.webp", title: "INTER COLLEGE DANCE", date: "Friday | 29.Jan.2025" },
        { image: "event2.webp", title: "MUSIC BAND", date: "Saturday | 30.Jan.2025" },
        { image: "event3.webp", title: "FASHION SHOW", date: "Sunday | 31.Jan.2025" },
        { image: "event4.webp", title: "THEATRE PLAY", date: "Friday | 29.Jan.2025" },
        { image: "event5.webp", title: "GROUP DANCE", date: "Saturday | 30.Jan.2025" },
        { image: "event6.webp", title: "BATTLE OF BANDS", date: "Sunday | 31.Jan.2025" },
    ];

    // Defines the data for Solo Events.
    const soloEvents = [
        { image: "event1.webp", title: "SOLO SINGING", date: "Friday | 29.Jan.2025" },
        { image: "event2.webp", title: "SOLO DANCE", date: "Saturday | 30.Jan.2025" },
        { image: "event3.webp", title: "INSTRUMENTAL", date: "Sunday | 31.Jan.2025" },
        { image: "event4.webp", title: "MONO ACT", date: "Friday | 29.Jan.2025" },
        { image: "event5.webp", title: "MIME", date: "Saturday | 30.Jan.2025" },
        { image: "event6.webp", title: "STAND UP", date: "Sunday | 31.Jan.2025" },
    ];

    return (

      <div className="w-full bg-black text-white flex flex-col items-center justify-start pt-20 pb-32 md:pb-60 relative">
        
        {/* Group Events Section */}
        <section className="w-full max-w-7xl px-2 md:px-4 flex flex-col items-start mt-20">
            <h1 className="font-akira text-2xl md:text-6xl text-white mb-10 md:mb-40 mt-0 md:mt-15 text-left">GROUP EVENTS</h1>
            {/* Changed from grid-cols-1 to grid-cols-2 for mobile as requested */}
            {/* 
                MOBILE GAP: 'gap-y-12' (Adjust this for mobile).
                DESKTOP GAP: 'md:gap-y-1' (Do not change this to keep desktop same).
            */}
            {/* 
                MOBILE LAYOUT: Masonry Style (Two independent columns).
                Left Column: Items 0, 2, 4... | Right Column: Items 1, 3, 5...
                Right column is pushed down by 'mt-32' (Adjust this value).
            */}
            <div className="flex flex-row w-full max-w-6xl md:hidden gap-2 px-2 items-start">
                <div className="flex flex-col w-1/2 gap-20">
                    {groupEvents.filter((_, i) => i % 2 === 0).map((event, i) => (
                        <EventCard key={`mob-left-${i}`} imageSrc={`/about-events/saptha/group events/${event.image}`} title={event.title} date={event.date} className="w-full" />
                    ))}
                </div>
                {/* ADJUST MOBILE STAGGER HERE: Change 'mt-32' to push the entire second column down */}
                <div className="flex flex-col w-1/2 gap-20 mt-45">
                    {groupEvents.filter((_, i) => i % 2 !== 0).map((event, i) => (
                        <EventCard key={`mob-right-${i}`} imageSrc={`/about-events/saptha/group events/${event.image}`} title={event.title} date={event.date} className="w-full" />
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT (Hidden on mobile) */}
            <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-1 w-full max-w-6xl">
                {groupEvents.map((event, index) => {
                    const isShiftedRow = Math.floor(index / 2) % 2 !== 0; 
                    return (
                        <EventCard 
                            key={index}
                            imageSrc={`/about-events/saptha/group events/${event.image}`}
                            title={event.title}
                            date={event.date}
                            // Scale 50 kept ONLY for desktop.
                            className={`md:scale-50 md:-my-65 -translate-x-1 ${isShiftedRow ? "md:translate-x-44" : "md:-translate-x-32"}`} 
                        />
                    );
                })}
            </div>
        </section>

        {/* Solo Events Section */}
        <section className="w-full max-w-7xl px-2 md:px-4 flex flex-col items-start mt-20">
            <h1 className="font-akira text-2xl md:text-6xl text-white mb-10 md:mb-40 mt-0 md:mt-15 text-left">SOLO EVENTS</h1>
            {/* MOBILE GAP: 'gap-y-12' | DESKTOP GAP: 'md:gap-y-1' */}
            {/* MOBILE LAYOUT (Masonry) */}
            <div className="flex flex-row w-full max-w-6xl md:hidden gap-2 px-2 items-start">
                <div className="flex flex-col w-1/2 gap-20">
                    {soloEvents.filter((_, i) => i % 2 === 0).map((event, i) => (
                        <EventCard key={`mob-left-${i}`} imageSrc={`/about-events/saptha/solo events/${event.image}`} title={event.title} date={event.date} className="w-full" />
                    ))}
                </div>
                {/* ADJUST MOBILE STAGGER HERE */}
                <div className="flex flex-col w-1/2 gap-20 mt-45">
                    {soloEvents.filter((_, i) => i % 2 !== 0).map((event, i) => (
                        <EventCard key={`mob-right-${i}`} imageSrc={`/about-events/saptha/solo events/${event.image}`} title={event.title} date={event.date} className="w-full" />
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT (Hidden on mobile) */}
            <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-1 w-full max-w-6xl">
                {soloEvents.map((event, index) => {
                     const isShiftedRow = Math.floor(index / 2) % 2 !== 0;
                     return (
                         <EventCard 
                             key={index}
                             imageSrc={`/about-events/saptha/solo events/${event.image}`}
                             title={event.title}
                             date={event.date}
                             className={`md:scale-50 md:-my-65 -translate-x-1 ${isShiftedRow ? "md:translate-x-44" : "md:-translate-x-32"}`}
                         />
                     );
                 })}
            </div>
        </section>

        {/* Register Button */}
        <div className="w-full flex justify-center mt-40 z-50 relative">
            <Link href="/coming-soon">
                <button className="bg-[#A41F22] text-white font-akira text-sm md:text-3xl px-8 py-3 md:px-20 md:py-6 hover:bg-white hover:text-black transition-colors duration-300">
                    REGISTER HERE
                </button>
            </Link>
        </div>

      </div>
    );
};
  
export default SapthaEventDetails;
