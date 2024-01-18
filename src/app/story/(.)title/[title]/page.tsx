import StoryDetail from "@/components/StoryDetail";
import { Story, stories } from "@/utils/dummydata";
import Modal from "@/components/Modal";

export default function StoryModal({
  params: { title },
}: {
  params: { title: string };
}) {
  const decodeTitle = decodeURIComponent(title);
  let story: Story = stories.find((story) => story.title === decodeTitle)!;

  return (
    <Modal>
      <StoryDetail story={story} />
    </Modal>
  );
}
