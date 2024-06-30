import { useParams } from "react-router-dom";
import TicketDetails from "./TicketDetails";
import { useState } from "react";

function getShows(id) {
  const shows = [
    {
      _id: "miw-12345-5432",
      promoter: "jay depromo",
      main_title: "Motionless in White",
      sub_title: "Creatures Tour",
      long_description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed provident rem magnam reiciendis molestias ea nulla soluta placeat ducimus laudantium illum velit aut quisquam laborum, libero vel adipisci dignissimos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed provident rem magnam reiciendis molestias ea nulla soluta placeat ducimus laudantium illum velit aut quisquam laborum, libero vel adipisci dignissimos?",
      cities: ["london", "johannesburg"],
    },
    {
      _id: "nl-45123-5432",
      promoter: "jay depromo",
      main_title: "Northlane",
      sub_title: "Mesmer Tour",
      long_description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed provident rem magnam reiciendis molestias ea nulla soluta placeat ducimus laudantium illum velit aut quisquam laborum, libero vel adipisci dignissimos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed provident rem magnam reiciendis molestias ea nulla soluta placeat ducimus laudantium illum velit aut quisquam laborum, libero vel adipisci dignissimos?",
      cities: ["london", "johannesburg"],
    },
  ];

  return shows.find((show) => show._id === id);
}

function getCityInfo(location) {
  const cities = [
    {
      event_id: "miw-12345-5432",
      city: "london",
      dates: [
        {
          venue: "Wembley Stadium",
          date: "22 January 2025",
          tickets: [
            {
              type: "general admissions",
              gates_open: "20:00",
              price: "100",
            },
            {
              type: "vip",
              gates_open: "20:00",
              price: "150",
            },
            {
              type: "teens",
              gates_open: "20:00",
              price: "75",
            },
            {
              type: "senior citizens",
              gates_open: "20:00",
              price: "550",
            },
          ],
        },
        {
          venue: "Wembley Stadium",
          date: "23 January 2025",
          tickets: [
            {
              type: "general admissions",
              gates_open: "20:00",
              price: "100",
            },
            {
              type: "vip",
              gates_open: "20:00",
              price: "150",
            },
            {
              type: "teens",
              gates_open: "20:00",
              price: "75",
            },
            {
              type: "senior citizens",
              gates_open: "20:00",
              price: "550",
            },
          ],
        },
      ],
    },
    {
      event_id: "miw-12345-5432",
      city: "johannesburg",
      dates: [
        {
          venue: "FNB Stadium",
          date: "22 January 2025",
          tickets: [
            {
              type: "general admissions",
              gates_open: "20:00",
              price: "100",
            },
            {
              type: "vip",
              gates_open: "20:00",
              price: "150",
            },
            {
              type: "teens",
              gates_open: "20:00",
              price: "75",
            },
            {
              type: "senior citizens",
              gates_open: "20:00",
              price: "550",
            },
          ],
        },
        {
          venue: "FNB Stadium",
          date: "23 January 2025",
          tickets: [
            {
              type: "general admissions",
              gates_open: "20:00",
              price: "100",
            },
            {
              type: "vip",
              gates_open: "20:00",
              price: "150",
            },
            {
              type: "teens",
              gates_open: "20:00",
              price: "75",
            },
            {
              type: "senior citizens",
              gates_open: "20:00",
              price: "550",
            },
          ],
        },
      ],
    },
  ];

  return cities.find((city) => city.city === location);
}

function getNextDate(dateLength, currentDate) {
  return (currentDate + 1) % dateLength;
}

function EventDetailPage() {
  const { id } = useParams();
  const show = getShows(id);
  const [city, setCity] = useState(getCityInfo(show.cities[0])); // use the useEffect to listen for changes in the city that's been chosen
  const [currentDate, setCurrentDate] = useState(0)
  const [date, setDate] = useState(city.dates[currentDate]);

  const updateDate = () => {
    const nextDate = getNextDate(city.dates.length, currentDate)
    setCurrentDate(nextDate)
    setDate(city.dates[nextDate])
  }
  

  return (
    <main className="flex flex-col m-24 gap-16 text-grey-100">
      {/* Event Name */}
      <section className="flex flex-col gap-2">
        <h2 className="text-6xl"> {show.main_title} </h2>
        <h2 className="text-3xl">
          {" "}
          {show.sub_title} - {city.city}{" "}
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

        <ul className="flex gap-4">
          {show.cities.map((city) => (
            <li key={city}>
              <a href="" onClick={() => setCity(getCityInfo(city))}>
                {city}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Post details */}
      <section className="w-[800px]">
        <p>posted by - {show.promoter} </p>
        <p>{show.long_description}</p>
      </section>

      {/* Event details */}
      <section className="flex gap-24">        
        <ul className="flex flex-col gap-5 text-white-400">
          <li className="flex gap-5 items-center ">
            <div>
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
                  d="M8 4h-.8c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V8m4-4h8M8 4V2m8 2h.8c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V8m-4-4V2M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8h16m-4 8h.002v.002H16zm-4 0h.002v.002H12zm-4 0h.002v.002H8zm8.002-4v.002H16V12zM12 12h.002v.002H12zm-4 0h.002v.002H8z"
                />
              </svg>
            </div>
            <p> {date.date} </p>
          </li>
          <li className="flex gap-5 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M5 9.923c0 4.852 4.244 8.864 6.123 10.402c.27.22.405.332.606.388c.156.044.386.044.542 0c.201-.056.336-.167.606-.388C14.756 18.787 19 14.775 19 9.923a6.885 6.885 0 0 0-2.05-4.895A7.04 7.04 0 0 0 12 3a7.04 7.04 0 0 0-4.95 2.028A6.884 6.884 0 0 0 5 9.923" />
                  <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                </g>
              </svg>
            </div>
            <p> {date.venue} </p>
          </li>
        </ul>
        <button onClick={(() => updateDate())}>
          next
        </button>
      </section>

      {/* Container  */}
      <section className="flex flex-col gap-12">
        {date.tickets.map((ticket) => (
          <TicketDetails key={event} ticket={ticket} date={date.date} />
        ))}
      </section>
    </main>
  );
}

export default EventDetailPage;
