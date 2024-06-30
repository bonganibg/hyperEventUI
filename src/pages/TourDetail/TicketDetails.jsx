function TicketDetails({ticket, info}){
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
        <section className="flex flex-col gap-1 justify-between border-t-[2px] border-t-grey-300 pt-12">            
            <p className="text-xl">
                {dateString}
            </p>
            <p className="text-lg">
                {timeString}
            </p>

            <div className="mt-5 flex flex-row justify-between">
            <p className="text-3xl uppercase">
                {ticket.type}
            </p>

            <a href="" className="underline text-xl">
                ${ticket.price} purchase
            </a>
            </div>
        </section>
    )
}

export default TicketDetails;