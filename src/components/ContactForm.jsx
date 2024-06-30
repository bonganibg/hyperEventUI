function ContactForm(){
    return (
        <section className="w-full grid grid-cols-2 justify-between bg-slate-700 h-[700px]">

            <div className="flex flex-col gap-10 p-24">
                <h2 className="text-6xl">
                    say hi
                </h2>

                <form action=""  className="flex flex-col gap-6">
                    <input type="text" placeholder="your name" className="border-b-2 py-5 border-b-grey-300 w-[100%] text-4xl "/>
                    <input type="email" placeholder="your email" className="border-b-2 py-5 border-b-grey-300 w-[100%] text-4xl "/>
                    <input type="text" placeholder="your description" className="border-b-2 py-5 border-b-grey-300 w-[100%] text-4xl "/>
                    <textarea name=""  placeholder="your message" id="" className="border-b-2 py-5 border-b-grey-300 w-[100%] text-4xl"></textarea>
                </form>

            </div>

            <div className="p-24 flex justify-end flex-col text-5xl text-grey-100 place-self-end">
                <a href="">your send</a>
            </div>

        </section>
    )
}

export default ContactForm;