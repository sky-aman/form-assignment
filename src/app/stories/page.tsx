import { stories, type Story } from "@/utils/dummydata";
import StoryCard from "./StoryCard";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Replace these image URLs with actual Unsplash image URLs --> */}
        {stories.map(
          (story: Story): React.ReactElement => (
            <StoryCard key={story.id} story={story} />
          )
        )}
      </div>
    </>
  );
}
