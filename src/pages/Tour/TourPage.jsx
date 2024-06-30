import { useEffect, useState } from "react";
import TourCard from "./TourCard";

function TourPage(){
    const [tours, setTours] = useState([])
    useEffect(() => {
        const getTours = async () => {
            const response = await fetch("http://localhost:8000/tours");
            const data = await response.json();
            setTours(data.tours)
        }

        getTours()
    })    

    return (
        <section className="m-24 my-44 flex flex-col gap-24">
            <div className="flex flex-col gap-12">
                <h2 className="text-5xl">
                    live events
                </h2>
                <div className="flex flex-row gap-12">
                    <select name="location" id="" className="border-b-[1px] text-2xl border-b-grey-200">
                        <option value="">All</option>
                        <option value="">London</option>
                        <option value="">Cape Town</option>
                        <option value="">Johannesburg</option>
                    </select>
                    <input type="search" name="" id="" placeholder="search" className="border-b-[1px] text-2xl border-b-grey-200"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                {tours.map((tour) => (
                    <TourCard key={tour._id} tour={tour}/>
                ))}
            </div>

            <div className="flex flex-row justify-center gap-4 text-2xl text-grey-100">
                <a href="">prev</a>
                <a href="">next</a>
            </div>
        </section>
    )
}

export default TourPage;