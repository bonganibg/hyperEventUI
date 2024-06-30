import HomeNewsCard from "./HomeNewsCard";

function HomeNewsSection() {
  const news = [1, 2, 3, 4];

  return (
    <section className="p-24 flex flex-col gap-16 text-white-300">
        <hr className="text-grey-300 border-[1px] w-[80%] self-center"/>
      <div className="flex flex-row justify-end">
        <h2 className="text-6xl">
            latest news
        </h2>
      </div>
      <div className="mx-32">
        {news.map((item, index) => (
          <HomeNewsCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default HomeNewsSection;
