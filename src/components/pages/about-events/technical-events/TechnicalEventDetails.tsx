import EventDetails from "../components/EventDetails";
import { technicalCompetitions, technicalWorkshops } from '@/src/data/technical-events-data';
const TechnicalEventDetails = () => {
    return (
        <EventDetails
            groupEvents={technicalCompetitions}
            soloEvents={technicalWorkshops}
            groupEventsImageFolder="/about-events/technical/group events"
            soloEventsImageFolder="/about-events/technical/solo events"
        />
    );
};

export default TechnicalEventDetails;

