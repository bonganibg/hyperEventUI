import { Link } from "react-router-dom";

function ViewTourCard(){
    return (
        <section className="flex flex-row justify-between text-white-400 border-b-[1px] border-b-grey-300 py-5">
            <span className="flex flex-row gap-5 text-2xl">
                <h2>
                    Northlane
                </h2>

                -

                <h2>
                    mesmer tour
                </h2>
            </span>

            <Link className="text-lg"  to="/management/tour?id=123">
                view
            </Link>
        </section>
    )
}

export default ViewTourCard;