import { storiesObject } from "@/utils/dummydata";
import Image from "next/image";

export default function Story({ title }: { title: String }) {
  const story = storiesObject[title];

  return (
    <div className="bg-white p-4 rounded-md shadow-md border">
      <Image
        src={story.image}
        width="400"
        height="300"
        alt="Story 1"
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
      <p className="text-gray-600">{story.description}</p>
      <a
        href={`/story/${story.title}`}
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        Read More
      </a>
    </div>
  );
}
