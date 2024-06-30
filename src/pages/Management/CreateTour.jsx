import { useState } from "react";
import TourInformation from "./components/TourInformation";
import CreateEventModal from "./components/CreateEventModal";

function CreateTour() {
  const [tourId, setTourId] = useState(null)
  const [location, setLocation] = useState(null)
  const [showCreateEvent, setShowCreateEvent] = useState(true)
  const [tourDetails, setTourDetails] = useState({
    title: "",
    subtitle: "",
    shortDescription: "",
    longDescription: ""
  })

  const handleLocationChange = (name, value) => {
    setLocation((prev) => ({
      ...prev,
      [name]: value
    }))

    setShowCreateEvent(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tourId) {
      await makePutRequest(tourDetails, `tours/${tourId}`)
    } else {
      const response = await makePostRequest(tourDetails, 'tours')
      const data = await response.json()      
      setTourId(data.id)

    }    
  }

  const handleChange = (event) => {
    const {name, value} = event.target;    

    setTourDetails((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const items = [1,2,3,4]

  return (
    <section className="m-24 mx-48 flex flex-col gap-12">
      <form className="flex flex-col w-[650px] gap-8" onSubmit={handleSubmit}>
        <input type="text" name="title" className="border-b-[2px] text-2xl py-2" placeholder="title" value={tourDetails.title} onChange={handleChange}/>
        <input type="text" name="subtitle" className="border-b-[2px] text-2xl py-2" placeholder="sub-title" value={tourDetails.subtitle} onChange={handleChange}/>
        <textarea name="shortDescription" id="" className="border-b-[2px] text-2xl py-2" placeholder="short description" value={tourDetails.shortDescription} onChange={handleChange}></textarea>
        <textarea name="longDescription" id="" className="border-b-[2px] text-2xl py-2" placeholder="long description" value={tourDetails.longDescription} onChange={handleChange}></textarea>
        <button type="submit" className="self-start text-2xl hover:border-b-2 text-grey-200">
          save
        </button>
      </form>

      <div className="flex flex-col gap-2 justify-center border-b-[2px] py-5 border-b-grey-300">
        <a href="" className="text-xl text-white-400">+location</a>
        <div className="flex justify-between align-middle items-center">
          <ul className="flex gap-5 text-lg text-grey-100">
            <li className="text-white-400">
              <a href="">london</a>
            </li>
            <li>
              <a href="">cape town</a>
            </li>
            <li>
              <a href="">johannesburg</a>
            </li>
          </ul>

          <button className="text-6xl text-white-400"> <p>+</p> </button>
        </div>
      </div>

      <div className="mx-36">
        {items.map((key)=> (
          <TourInformation/>      
        ))}  
      </div>

      {/* Modal */}
      {showCreateEvent && (
        <div className="fixed top-0 left-0 w-full h-full flex backdrop-blur-sm flex-col justify-center items-center">
          <div className="w-[800px] h-[600px] bg-grey-400 flex flex-col justify-center align-middle rounded-lg shadow-lg">
            <CreateEventModal location={location} onLocationChange={handleLocationChange}/>
          </div>
        </div>
      )}

    </section>
  );
}

async function makePostRequest(data, endpoint){
  return await fetch(`http://localhost:8000/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

async function makePutRequest(data, endpoint){
  return await fetch(`http://localhost:8000/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

export default CreateTour;
