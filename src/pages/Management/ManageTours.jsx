import { Link } from "react-router-dom";
import ViewTourCard from "./components/ViewTourCard";
import { useEffect, useState } from "react";

function ManageEvents() {
  const [tours, setTours] = useState([])

    useEffect(() => {
      const getTours = async () => {
        const response = await fetch("http://localhost:8000/tours");
        const data = await response.json();
        console.log(data.tours)
        setTours(data.tours)
      }

      getTours()
    }, [])

  return (
    <section className="flex flex-col gap-10 text-3xl mx-52 my-24">
      <div className="flex flex-row justify-between border-b-[2px] border-b-grey-300  text-grey-200">
        <input type="search" placeholder="search" />
        <Link className="text-5xl" to="/management/tour">+</Link>
      </div>

      <div className="flex flex-col gap-5">
        {tours.map((tour) => (
            <ViewTourCard tour={tour}/>
        ))}
      </div>
    </section>
  );
}

export default ManageEvents;
