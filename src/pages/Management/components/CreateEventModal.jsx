import { useState } from "react";

function CreateEventModal({ onLocationChange }) {
  const [location, setLocation] = useState("")

  const handleChange = (e) => {
    setLocation(e.target.value)    
  }

  const handleOnSubmit = async (e) => {       
    onLocationChange(location)        
    setLocation("")
  }

  return (
    <section className="flex justify-center">
      <form className="flex flex-col gap-5" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="location"
          className="border-b-[2px] text-2xl py-2"
          placeholder="location"
          value={location}
          onChange={handleChange}
               
        />        
        <button type="submit" className="self-start text-2xl hover:border-b-2 text-grey-200">
          save
        </button>
      </form>
    </section>
  );
}

export default CreateEventModal;
