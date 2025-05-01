export function StatsSection() {
  const stats = [
    {
      label: "195",
      title: "user countries",
    },
    {
      label: "1M",
      title: "valued teachers",
    },
    {
      label: "17M",
      title: "happy students",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-12 text-2xl font-bold text-neutral-800 md:text-3xl">
          Category
          <br />
          Category
          <br />
          Category
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title} className="space-y-2">
              <p className="text-4xl font-extrabold text-orange-500">
                {stat.label}
              </p>
              <p className="text-sm text-neutral-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
