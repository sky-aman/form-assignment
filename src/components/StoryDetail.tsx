import { type Story } from "@/utils/dummydata";
import Image from "next/image";

export default function StoryDetail({ story }: { story: Story }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <Image
        src={story.image}
        width="400"
        height="300"
        alt="Story 1"
        className="object-cover mb-4 rounded-md mx-auto"
      />
      <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
      <p className="text-gray-600">{story.content}</p>
    </div>
  );
}
