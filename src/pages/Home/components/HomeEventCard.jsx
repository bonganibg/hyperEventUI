import { Link } from "react-router-dom";
function HomeEventCard({event}) {
    return (
        <section className="w-full grid grid-cols-3 h-[60vh] p-16">
            <div className="col-span-2 flex flex-col  justify-between border-l-grey-300 border-l-[2px] p-5">
                <div className="text-white-200">
                    <h2 className="text-6xl"> {event.main_title} </h2>
                    <h2 className="text-2xl text-white-400"> {event.sub_title} </h2>

                    <p className="pt-20 w-[800px] text-white-400">
                        {event.short_description}
                    </p>
                </div>

                <Link to={`/event/${event._id}`} className="text-grey-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                    >
                        <rect width="24" height="24" fill="none" />
                        <path
                            fill="currentColor"
                            d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"
                        />
                    </svg>
                </Link>
            </div>

            <div className="col-span-1 border-r-[2px] border-r-grey-300">
                <h2 className="text-5xl p-5 text-white-100">Dates</h2>

                <ul className="border-l-[1px] border-l-grey-300 px-5">
                    {event.dates.map((item) => (
                        <li key={item}>
                            <p> {item} </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default HomeEventCard;
