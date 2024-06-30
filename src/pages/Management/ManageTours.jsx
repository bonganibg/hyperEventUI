import { Link } from "react-router-dom";
import ViewTourCard from "./components/ViewTourCard";

function ManageEvents() {

    const events = [1,2,3,4,5,6]

  return (
    <section className="flex flex-col gap-10 text-3xl mx-52 my-24">
      <div className="flex flex-row justify-between border-b-[2px] border-b-grey-300  text-grey-200">
        <input type="search" placeholder="search" />
        <Link className="text-5xl" to="/management/tour">+</Link>
      </div>

      <div className="flex flex-col gap-5">
        {events.map(() => (
            <ViewTourCard/>
        ))}
      </div>
    </section>
  );
}

export default ManageEvents;
