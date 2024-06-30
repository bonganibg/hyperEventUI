function TourInformation() {
  return (
    <section className="flex flex-col gap-50 text-xl text-white-400">
      <div className="flex justify-between">
        <div className="">
          <p>venue</p>
          <p>22 january 2025</p>
          <p>19:00</p>
        </div>

        <div>
          <p>general</p>
          <p>$150</p>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full py-6">
        <hr className="w-full text-grey-300" />
      </div>
    </section>
  );
}

export default TourInformation;
