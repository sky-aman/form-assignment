import { storiesObject } from "@/utils/dummydata";
import Image from "next/image";

export default function Story({
  params: { title },
}: {
  params: { title: String };
}) {
  const decodeTitle = decodeURIComponent(title);
  const story = storiesObject[decodeTitle];
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
