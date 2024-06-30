function TourInformation({info, ticketDeatils}) {
  const date = new Date(info.date);
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <section className="flex flex-col gap-50 text-xl text-white-400">
      <div className="flex justify-between">
        <div className="">
          <p> {info.venue}  </p>
          <p> {dateString} </p>
          <p> {timeString} </p>
        </div>

        <div className="text-end">
          <p> {ticketDeatils.type} </p>
          <p> ${ticketDeatils.price} </p>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full py-6">
        <hr className="w-full text-grey-300" />
      </div>
    </section>
  );
}

export default TourInformation;
