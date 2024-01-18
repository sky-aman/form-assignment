export const generateStory = params => {
    const { name, adjective, activity, number, color } = params;
    const heOrShe = Math.random() < 0.5 ? 'he' : 'she';
    const hisOrHer = Math.random() < 0.5 ? 'his' : 'her';

    const story = `
        <p>Once upon a time, there was a ${adjective} character named ${name}. ${name} loved ${activity} and did it with great enthusiasm.</p>
        <p>One day, ${heOrShe} decided to go on an adventure with ${hisOrHer} ${number} companions. They set out to explore the land and discovered a magical place filled with ${color} wonders.</p>
        <p>Their journey was filled with laughter, challenges, and the joy of ${activity}. ${name} and ${hisOrHer} companions created memories that would last a lifetime.</p>
        <p>And so, the ${adjective} story of ${name}'s ${activity} adventure became a tale told by many, inspiring others to embrace the magic of life. The end.</p>
    `;

    return story;
}