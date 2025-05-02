import Image from "next/image";

export function LearningInvitationSection() {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-center px-6 sm:px-20 py-32 sm:py-64 gap-20 isolate bg-yellow-400 w-full h-[779px] overflow-hidden">
      <div className="absolute  top-0 sm:left-40 sm:top-[5%] sm:ml-[-200px] z-10">
        <div className="block sm:hidden">
          <Image
            src="/assets/iconContainerMobile1.svg"
            alt="Left Icon Mobile"
            width={350}
            height={350}
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/assets/iconContainerWeb1.svg"
            alt="Left Icon"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="text-center max-w-7xl sm:max-w-8xl space-y-8 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
          Join a world of learning
        </h1>
        <p className="text-gray-800 text-lg sm:text-xl">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>
        <p className="text-gray-800 text-lg sm:text-xl">
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <button className="mt-8 bg-orange-600 px-12 py-4 text-white text-xl font-bold rounded-md hover:bg-orange-500 transition">
          Sign Up Now
        </button>
      </div>

      <div className="absolute bottom-0 sm:right-40 sm:top-[5%] sm:mr-[-200px] z-10">
        <div className="block sm:hidden">
          <Image
            src="/assets/iconContainerMobile2.svg"
            alt="Right Icon Mobile"
            width={350}
            height={350}
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/assets/iconContainerWeb2.svg"
            alt="Right Icon"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
