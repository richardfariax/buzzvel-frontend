import Image from "next/image";

export function StatsSection() {
  const stats = [
    {
      icon: "/assets/heart.svg",
      label: "195",
      title: "user countries",
    },
    {
      icon: "/assets/diamond.svg",
      label: "1M",
      title: "valued teachers",
    },
    {
      icon: "/assets/hat.svg",
      label: "17M",
      title: "happy students",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] flex flex-col justify-center items-center px-4 py-20 gap-20">
      <div className="flex flex-row gap-20 w-full max-w-screen-xl justify-center flex-wrap">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col items-center w-[373.33px] h-[213px]"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <Image
                src={stat.icon}
                alt={stat.title}
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <p className="text-[72px] leading-[79px] font-extrabold text-[#FACC15] text-center">
                {stat.label}
              </p>
              <p className="text-[24px] leading-[38px] text-[#FACC15] text-center">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
