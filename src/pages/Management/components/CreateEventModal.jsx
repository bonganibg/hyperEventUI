function CreateEventModal({ location, onLocationChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onLocationChange(name, value);
  };

  return (
    <section className="flex justify-center">
      <form className="flex flex-col gap-5" onSubmit={handleChange}>
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
