import { Link } from "react-router-dom";
import HomeEventCard from "./HomeEventCard";
import { useState } from "react";

function getShows(){
    return [
        {
            "_id": "miw-12345-5432",
            "main_title": "Motionless in White",
            "sub_title": "Creatures Tour",
            "short_description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed provident rem magnam reiciendis molestias ea nulla soluta placeat ducimus laudantium illum velit aut quisquam laborum, libero vel adipisci dignissimos?",
            "dates": [
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
            ]
        },
        {
            "_id": "nl-45123-5432",
            "main_title": "Northlane",
            "sub_title": "Mesmer Tour",
            "short_description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed provident rem magnam reiciendis molestias ea nulla soluta placeat ducimus laudantium illum velit aut quisquam laborum, libero vel adipisci dignissimos?",
            "dates": [
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
                "Wembley - 25 January 2025",
            ]
        }
    ]
}

function FeaturedEvents() {
  const [featuredShow, setFeaturedShow] = useState(getShows())

  return (
    <section>
      {featuredShow.map((event) => (
        <HomeEventCard event={event}/>
      ))}
      <div className="w-full flex flex-row justify-center text-grey-100 text-xl font-semibold">
        <Link to="/events">view all events</Link>
      </div>
    </section>
  );
}

export default FeaturedEvents;
