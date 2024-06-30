import { useState } from "react";

function CreateEventModal({ onLocationChange, locationDetails }) {
  const [location, setLocation] = useState(locationDetails);

  const handleChange = (e) => {
    setLocation({ name: e.target.value, id: location.id });
  };

  const handleOnSubmit = async (e) => {
    onLocationChange(location);
  };

  const onDelete = async () => {
    await fetch(`http://localhost:8000/events/${location.id}`, {
      method: "DELETE",
    });
  };

  return (
    <section className="flex justify-center">
      <form className="flex flex-col gap-5" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="location"
          className="border-b-[2px] text-2xl py-2"
          placeholder="location"
          value={location.name}
          onChange={handleChange}
        />
        <div className="self-start text-2xltext-grey-200 flex gap-4">
          <button type="submit" className="hover:border-b-2">save</button>
          <button onClick={onDelete} className="text-[#e26d5c] hover:border-b-2">delete</button>
        </div>
      </form>
    </section>
  );
}

export default CreateEventModal;
