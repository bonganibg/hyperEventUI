import { useParams } from "react-router-dom";
import TicketDetails from "./TicketDetails";
import { useEffect, useState } from "react";
import EventSection from "./EventSection";

function getNextDate(dateLength, currentDate) {
  return (currentDate + 1) % dateLength;
}

function EventDetailPage() {
  const { id } = useParams();
  const [currentDate, setCurrentDate] = useState(0);
  const [tour, setTour] = useState({});
  const [currentEvent, setCurrenEvent] = useState()
  const [currentDateIndex, setCurrentDateIndex] = useState(0)


  

  useEffect(() => {
    const getTourDetails = async () => {      
      const response = await fetch(`http://localhost:8000/tours/${id}`);
      const data = await response.json();
      setTour(data.tour);
      
      if (tour.events) {
        setCurrenEvent(tour.events[0])
      }
    };

    getTourDetails();
  }, []);

  const updateCurrentEvent = async (id) => {
    const response = await fetch(`http://localhost:8000/events/${id}`);
    const data = await response.json();
    setCurrenEvent(data.event);
    setCurrentDateIndex(0)
  }

  return (
    <main className="flex flex-col m-24 gap-16 text-grey-100">
      {/* Event Name */}
      <section className="flex flex-col gap-2">
        <h2 className="text-6xl"> {tour.title} </h2>
        <h2 className="text-3xl">          
          {tour.subtitle}
        </h2>

        <div>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.237 6.237a4.098 4.098 0 0 1 .135 5.654l-7.373 8.11l-7.37-8.11a4.098 4.098 0 1 1 6.23-5.316L12 8l1.14-1.425a4.098 4.098 0 0 1 6.097-.338"
              />
            </svg>
          </a>
        </div>

        {tour.events && (
          <ul className="flex gap-4">
          {tour.events.map((event, index) => (
            <li key={index}>
              <button onClick={() => updateCurrentEvent(event._id)}>
                {event.location}
              </button>
            </li>
          ))}
        </ul>
        )}
      </section>

      {/* Post details */}
      <section className="w-[800px]">
        <p>posted by - {tour.promoter} </p>
        <p>{tour.longDescription}</p>
      </section>

      {/* Event details */}
      {currentEvent && (
        <EventSection />
      )}

    </main>
  );
}

export default EventDetailPage;
