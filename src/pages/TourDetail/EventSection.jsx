import { useState } from "react";

function EventSection({ event }) {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  const updateDate = () => {
    const length = event.dates.length;
    const nextDate = (currentDateIndex + 1) % length;
    setCurrentDateIndex(nextDate);
  };

  return (
    <>
      {event.dates && (
        <section>
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
                <p> {event.dates[currentDateIndex].date} </p>
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
                <p> {event.dates[currentDateIndex].venue} </p>
              </li>
            </ul>
            <button onClick={() => updateDate()}>next</button>
          </section>

          {/* Container  */}
          <section className="flex flex-col gap-12">
            {event.dates[currentDateIndex].tickets.map((ticket) => (
              <TicketDetails
                key={event}
                ticket={ticket}
                date={event.dates[currentDateIndex].date}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
}

export default EventSection;
