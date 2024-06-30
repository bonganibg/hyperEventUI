import { Link } from "react-router-dom";

function TourCard(){
    return (
        <section className="h-[400px] p-10 flex flex-col justify-between border-l-[2px] border-l-grey-300 text-grey-100">
            <div className="text-grey-100">
                <h2 className="text-5xl">
                    Northlane
                </h2>
                <p className="text-3xl">mesmer tour</p>
            </div>

            <div className="">
                <p className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero exercitationem sapiente, ab unde nulla dolorum a voluptates minus nesciunt nam odio corporis rerum fuga eius ad alias saepe magnam et!
                </p>
            </div>

            <div className="flex justify-between">
                <p>london, cape town, johannesburg</p>
                <Link to="/event/1"> next </Link>
            </div>
        </section>
    )
}

export default TourCard;