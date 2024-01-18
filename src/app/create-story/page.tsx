"use client";

import InputComp from "@/components/InputComp";
import Modal from "@/components/Modal";
import { generateStory } from "@/utils/utils";
import { useState } from "react";

export default function CreateStory() {
  const [story, setStory] = useState("");
  const onGenerateStory = (formData: FormData) => {
    const data = {};
    formData.forEach((val, key) => (data[key] = val));

    setStory(generateStory(data));
  };
  return (
    <>
      <form id="storyForm" action={onGenerateStory}>
        <InputComp
          id={"name"}
          type={"text"}
          label={"Enter a name"}
          defaultValue={"John Doe"}
        />

        <InputComp
          id={"adjective"}
          type={"text"}
          label={"Enter an adjective"}
          defaultValue={"brave"}
        />

        <InputComp
          id={"activity"}
          type={"text"}
          label={"Enter an activity (e.g., running, singing)"}
          defaultValue={"exploring"}
        />

        <InputComp
          id={"number"}
          type={"number"}
          label={"Enter a number"}
          defaultValue={"3"}
        />

        <InputComp
          id={"color"}
          type={"color"}
          label={"Choose a color"}
          defaultValue={"#ff5733"}
          className="mb-4 border rounded-md"
        />

        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Generate Story
        </button>
      </form>
      {story && (
        <Modal goBack={false} onClose={() => setStory("")}>
          <div className="bg-white p-3 rounded-md">
            <div dangerouslySetInnerHTML={{ __html: story }} />
          </div>
        </Modal>
      )}
    </>
  );
}
