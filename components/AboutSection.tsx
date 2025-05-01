import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full max-w-[1440px] px-6 py-20 mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-4 max-w-[768px]">
        <h3 className="text-4xl font-extrabold text-[#0F172A]">
          An all-in-one app that makes it easier
          <br />
          It’s easier than ever before
        </h3>
        <p className="text-lg text-[#0F172A] leading-[1.6]">
          Est et in pharetra magna adipiscing ornare aliquam. Amet nunc diam
          orci duis ut sit diam arcu, nec.
          <br />
          Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est
          pellentesque turpis ultricies.
          <br />
          Tellus arcu sed consequat ac velit ut eu blandit. Ullamcorper ornare
          in et egestas dolor orci.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "The map of mathematics",
          "Design for how people think",
          "International & commercial law",
        ].map((title, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-xl flex flex-col justify-between"
          >
            <h4 className="text-xl font-semibold text-[#0F172A] mb-4">
              {title}
            </h4>
            <Link
              href="#"
              className="mt-auto text-[#2563EB] font-bold hover:underline"
            >
              Take Lesson
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h5 className="text-lg font-medium text-[#0F172A] mb-2">
          Find more about the app
        </h5>
        <p className="text-[#0F172A] leading-[1.6] max-w-[768px]">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
          Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.
        </p>
      </div>
    </section>
  );
}
