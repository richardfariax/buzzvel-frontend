import { FeatureSectionLesson } from "@/types/FeatureSectionLesson";
import Link from "next/link";

const lessons: FeatureSectionLesson[] = [
  {
    title: "The map of mathematics",
    category: "Entertainment",
  },
  {
    title: "Design for how people think",
    category: "Entertainment",
  },
  {
    title: "International & commercial law",
    category: "Entertainment",
  },
];

export function FeatureSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide">
          Caption
        </p>
        <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-4xl">
          An all-in-one app that makes it easier
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          It’s easier than ever before
        </p>

        <div className="mt-8 space-y-4 text-neutral-600 max-w-3xl">
          <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
          <p>
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
          <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>
          <p>Ullamcorper ornare in et egestas dolor orci.</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            Featured
          </span>
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            Popular
          </span>
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            New
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons.map((lesson: FeatureSectionLesson) => (
            <div
              key={lesson.title}
              className="rounded-lg bg-white shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm text-orange-500 font-medium">
                  {lesson.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-800">
                  {lesson.title}
                </h3>
              </div>
              <Link
                href="#"
                className="mt-6 inline-block text-orange-600 font-medium hover:underline"
              >
                Take Lesson
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl text-neutral-600 space-y-4">
          <h4 className="text-lg font-semibold text-neutral-800">
            Find more about the app
          </h4>
          <p>
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
          <p>
            Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
          </p>
          <p>
            Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.
          </p>
        </div>
      </div>
    </section>
  );
}
