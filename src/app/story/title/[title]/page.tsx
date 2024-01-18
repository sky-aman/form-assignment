import StoryDetail from "@/components/StoryDetail";
import { Story, stories } from "@/utils/dummydata";

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
          Sorry, we couldn&apos;t find the story with the title &quot;
          {decodeTitle}
          &quot;.
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

  return <StoryDetail story={story} />;
}
