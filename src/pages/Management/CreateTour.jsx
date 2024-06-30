import { useEffect, useState } from "react";
import TourInformation from "./components/TourInformation";
import CreateEventModal from "./components/CreateEventModal";
import { useSearchParams } from "react-router-dom";
import CreateDateModal from "./components/CreateDateModal";

function CreateTour() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tourId, setTourId] = useState(searchParams.get("id"));
  const [allLocations, setAllLocations] = useState([]);
  const [allEventDates, setAllEventDates] = useState([]);
  const [selectedEventDate, setSelectedEventDate] = useState({
    date: null,
    id: null,
    venue: "",
  });
  const [selectedLocation, setSelectedLocation] = useState({
    name: "",
    id: null,
  });
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [tourDetails, setTourDetails] = useState({
    title: "",
    subtitle: "",
    shortDescription: "",
    longDescription: "",
  });

  const [showCreateDateModal, setShowCreateDateModal] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch("http://localhost:8000/events/");
      const data = await response.json();
      setAllLocations(data.events);
    };

    const getDates = async () => {
      const response = await fetch(`http://localhost:8000/dates/`);
      const data = await response.json();
      setAllEventDates(data);
    };

    getDates();
    getEvents();
  }, [selectedLocation, showCreateEvent]);

  const handleLocationChange = async (location) => {
    setShowCreateEvent(false);

    if (tourId) {
      if (location.id == null) {
        const response = await makePostRequest(
          { location: location.name, tourId: tourId },
          `events`
        );

        const data = await response.json();
        setSelectedLocation({ name: data.location, id: data._id });
        setAllLocations([...allLocations, data]);
      } else {
        const response = await makePutRequest(
          { location: location.name, tourId: tourId },
          `events/${location.id}`
        );
      }
    }
  };

  const onUpsertDates = (index) => {
    if (index){
      setSelectedEventDate(allEventDates[index])      
    } else {
      setSelectedEventDate({
        date: null,
        id: null,
        venue: "",
        tickets: []
      }) 
    }

    setShowCreateDateModal(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tourId) {
      await makePutRequest(tourDetails, `tours/${tourId}`);
    } else {
      const response = await makePostRequest(tourDetails, "tours");
      const data = await response.json();
      setTourId(data.id);
      setSearchParams({ id: data.id });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTourDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSelectLocation = (id, name) => {
    setSelectedLocation({ name: name, id: id });
    setShowCreateEvent(true);
  };

  return (
    <section className="m-24 mx-48 flex flex-col gap-12">
      <form className="flex flex-col w-[650px] gap-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="border-b-[2px] text-2xl py-2"
          placeholder="title"
          value={tourDetails.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subtitle"
          className="border-b-[2px] text-2xl py-2"
          placeholder="sub-title"
          value={tourDetails.subtitle}
          onChange={handleChange}
        />
        <textarea
          name="shortDescription"
          id=""
          className="border-b-[2px] text-2xl py-2"
          placeholder="short description"
          value={tourDetails.shortDescription}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="longDescription"
          id=""
          className="border-b-[2px] text-2xl py-2"
          placeholder="long description"
          value={tourDetails.longDescription}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="self-start text-2xl hover:border-b-2 text-grey-200"
        >
          save
        </button>
      </form>

      <div className="flex flex-col gap-2 justify-center border-b-[2px] py-5 border-b-grey-300">
        <button
          href=""
          className="text-xl text-white-400 self-start"
          onClick={() => handleSelectLocation(null, "")}
        >
          +location
        </button>
        <div className="flex justify-between align-middle items-center">
          <ul className="flex gap-5 text-lg text-grey-100">
            {allLocations.map((location) => (
              <li className="text-white-400" key={location.id}>
                <button
                  onClick={() =>
                    handleSelectLocation(location._id, location.location)
                  }
                >
                  {location.location}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onUpsertDates(null)}
            className="text-6xl text-white-400"
          >
            <p>+</p>
          </button>
        </div>
      </div>

      <div className="mx-36">
        {allEventDates.map((event, index) => (
          <section>
            <button className="text-grey-200" onClick={() => onUpsertDates(index)}>{event.date} </button>
            {event.tickets.map((ticket) => (
            <TourInformation info={event} ticketDeatils={ticket} />
            ))}
          </section>
        ))}
      </div>

      {/* Modal */}
      {showCreateEvent && (
        <div className="fixed top-0 left-0 w-full h-full flex backdrop-blur-sm flex-col justify-center items-center">
          <div className="w-[800px] h-[600px] bg-grey-400 flex flex-col justify-center align-middle rounded-lg shadow-lg">
            <CreateEventModal
              onLocationChange={handleLocationChange}
              locationDetails={selectedLocation}
            />
          </div>
        </div>
      )}

      {showCreateDateModal && (
        <div className="fixed top-0 left-0 w-full h-full flex backdrop-blur-sm flex-col justify-center items-center">
          <div className="w-[800px] h-[600px] bg-grey-400 flex flex-col justify-center align-middle rounded-lg shadow-lg">
            <CreateDateModal date={selectedEventDate} />
          </div>
        </div>
      )}
    </section>
  );
}

async function getEvents() {
  return await fetch(`http://localhost:8000/events/`);
}

async function makePostRequest(data, endpoint) {
  return await fetch(`http://localhost:8000/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function makePutRequest(data, endpoint) {
  return await fetch(`http://localhost:8000/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default CreateTour;
