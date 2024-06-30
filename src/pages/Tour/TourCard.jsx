import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <section className="h-[400px] p-10 flex flex-col justify-between border-l-[2px] border-l-grey-300 text-grey-100">
      <div className="text-grey-100">
        <h2 className="text-5xl">{tour.title}</h2>
        <p className="text-3xl">
            {tour.subtitle}
        </p>
      </div>

      <div className="">
        <p className="text-lg">{tour.shortDescription}</p>
      </div>

      <div className="flex justify-between">
        <p>
            {tour.events.map((event) => (
                <p>
                    {event.location}
                </p>
            ))}
        </p>
        <Link to={`/tour/${tour._id}`}> next </Link>
      </div>
    </section>
  );
}

export default TourCard;
