function Portfolio() {
  const items = [
    {
      title: "Concrete & Light",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      tall: true,
    },
    {
      title: "Urban Office",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Warm Minimalism",
      category: "Interior",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      tall: true,
    },
    {
      title: "Modern Retreat",
      category: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <main>

      <section className="bg-[#eee7db] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[3px] text-[#c96f43]">
            Portfolio
          </p>

          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            A visual language built from material, space and light.
          </h1>

        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item.title}
              className={item.tall ? "md:row-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-7 pt-20 text-white">
                  <p className="text-xs font-bold uppercase tracking-[2px] text-[#e7b85c]">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

export default Portfolio;