import EventDetails from "../components/EventDetails";
import { swagItems, proshowEvents } from "@/src/data/general-events-data";

const GeneralEventDetails = () => {
    return (
        <EventDetails
            groupEvents={swagItems}
            soloEvents={proshowEvents}
            groupEventsImageFolder="/about-events/general/group events"
            soloEventsImageFolder="/about-events/general/solo events"
        />
    );
};

export default GeneralEventDetails;

