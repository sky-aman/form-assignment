interface Story {
  title: String;
  description: String;
  content: String;
  image: String;
}

interface StoriesObject {
  [key: string]: Story;
}

export const storiesObject: StoriesObject = {
  "The Magical Forest": {
    title: "The Magical Forest",
    description:
      "Follow the journey of a young adventurer as they discover a magical forest filled with enchanting creatures.",
    content:
      "Once upon a time, in a land far away, there was a magical forest. The trees whispered secrets, and colorful creatures danced in the moonlight...",
    image: "https://picsum.photos/400/300",
  },
  "Lost in Space": {
    title: "Lost in Space",
    description:
      "Embark on an intergalactic adventure as a group of friends gets lost in space and encounters strange worlds.",
    content:
      "It all started when a group of friends decided to build a spaceship out of cardboard boxes. Little did they know, their adventure would take them to the far reaches of the universe...",
    image: "https://picsum.photos/400/300",
  },
  "The Curious Cat Detective": {
    title: "The Curious Cat Detective",
    description:
      "Join Whiskers, the curious cat detective, as he solves mysteries in his neighborhood.",
    content:
      "Whiskers was not an ordinary cat. He had a keen sense of curiosity and a knack for solving mysteries. One day, he noticed something strange happening in the neighborhood...",
    image: "https://picsum.photos/400/300",
  },
  "The Secret Garden": {
    title: "The Secret Garden",
    description:
      "Discover the magic hidden within a secret garden and the friendship that blossoms between two unlikely companions.",
    content:
      "In the heart of the countryside, there was a secret garden that held more than just flowers. It held the key to a magical world waiting to be explored...",
    image: "https://picsum.photos/400/300",
  },
  "The Time-Traveling Adventure": {
    title: "The Time-Traveling Adventure",
    description:
      "Experience a thrilling journey through time as a group of friends accidentally discovers a time machine.",
    content:
      "It all started when a peculiar-looking device appeared in the attic. Little did they know, it was a time machine that would take them on the adventure of a lifetime...",
    image: "https://picsum.photos/400/300",
  },
};
