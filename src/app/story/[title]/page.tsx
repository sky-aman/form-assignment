import { Story, stories } from "@/utils/dummydata";
import Image from "next/image";

export default function Story({
  params: { title },
}: {
  params: { title: string };
}) {
  const decodeTitle = decodeURIComponent(title);
  let story: Story | null =
    stories.find((story) => story.title === decodeTitle) || null;

  if (!story) {
    return (
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          No Story Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the story with the title "{decodeTitle}".
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <Image
        src={story.image}
        width="400"
        height="300"
        alt="Story 1"
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
      <p className="text-gray-600">{story.content}</p>
    </div>
  );
}
