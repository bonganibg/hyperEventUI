function TicketDetails({ticket, date}){
    return (
        <section className="flex flex-col gap-1 justify-between border-t-[2px] border-t-grey-300 pt-12">            
            <p className="text-xl">
                {date}
            </p>
            <p className="text-lg">
                {ticket.gates_open}
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