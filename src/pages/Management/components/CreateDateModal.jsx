import { useState } from "react";

function CreateDateModal({ date }) {
  const [dateDetails, setDateDetails] = useState(date);
  console.log(dateDetails);

  const onDelete = async (endpoint) => {
    await fetch(`http://localhost:8000/dates/${dateDetails._id}/${endpoint}`, {
      method: "DELETE",
    });
  };  

  const onSubmitDates = async (e) => {
    if (dateDetails._id) {
      await makePutRequest(dateDetails, `${dateDetails._id}`);
    } else {
      console.log(dateDetails);
      const response = await makePostRequest(dateDetails, "");
      const data = await response.json();
      dateDetails._id = data.id;
      console.log(response);
    }
  };

  const onChange = (e) => {
    setDateDetails({
      ...dateDetails,
      [e.target.name]: e.target.value,
    });
  };  

  const addTicket = () => {
    setDateDetails({
      ...dateDetails,
      tickets: [
        ...dateDetails.tickets,
        {
          type: "",
          price: 0,
        },
      ],
    });
  };

  const handleTicketClick = async (index) => {
    const ticket = dateDetails.tickets[index]._id;

    if (ticket._id) {
      await makePostRequest(ticket, `${dateDetails._id}/tickets/${ticket._id}`);
    } else {
      const response = await makePostRequest(
        ticket,
        `${dateDetails._id}/tickets`
      );
      const data = await response.json();
      dateDetails.tickets[index]._id = data.id;
    }
  };

  return (
    <section className="flex flex-col m-24">
      <form className="flex flex-col gap-10" onSubmit={onSubmitDates}>
        <input
          type="datetime-local"
          name="date"
          className="border-b-[2px] text-2xl py-2"
          placeholder="location"
          value={dateDetails.date}
          onChange={onChange}
        />
        <input
          type="text"
          name="venue"
          className="border-b-[2px] text-2xl py-2"
          placeholder="location"
          value={dateDetails.venue}
          onChange={onChange}
        />

        <div className="self-start text-2xltext-grey-200 flex gap-4">
          <button type="submit" className="hover:border-b-2">
            save
          </button>
          <button
            onClick={() => onDelete("")}
            className="text-[#e26d5c] hover:border-b-2"
          >
            delete
          </button>
        </div>
      </form>

      <ul>
        {dateDetails.tickets.map((ticket, index) => (
          <li key={index} className="flex gap-4 items-center">
            <form>
              <input
                type="text"
                name="type"
                className="border-b-[2px] text-1xl py-2"
                placeholder="ticket type"
                value={ticket.type}
              />
              <input
                type="number"
                name="price"
                className="border-b-[2px] text-1xl py-2"
                placeholder="price"
                value={ticket.price}
              />
              <button
                onClick={() => onDelete(`tickets/${ticket._id}`)}
                className="flex justify-center align-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            </form>

            <button
              onClick={() => handleTicketClick(index)}
              className="flex justify-center align-middle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
            </button>
          </li>
        ))}
        <li>
          <button onClick={addTicket}>add</button>
        </li>
      </ul>
    </section>
  );
}

async function makePostRequest(data, endpoint) {
  return await fetch(`http://localhost:8000/dates/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function makePutRequest(data, endpoint) {
  return await fetch(`http://localhost:8000/dates/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default CreateDateModal;
