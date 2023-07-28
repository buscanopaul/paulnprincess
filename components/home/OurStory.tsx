import Image from "next/image";
import leaves from "../../public/images/leaves.png";

const DATA = [
  {
    id: 1,
    date: "August 15, 2016",
    image: "old",
    description:
      "Marked a momentous occasion for us as we joyously celebrated our anniversary. It had been an enchanting journey of love, filled with laughter, understanding, and profound connection that blossomed over the course of two beautiful months of courtship.",
  },
  {
    id: 2,
    date: "January, 2017",
    image: "beach",
    description:
      "Held a special place in our hearts as it marked two extraordinary occasions that intertwined to create a memorable chapter in our lives. We embarked on a journey of sun, sand, and love as we experienced our first beach vacation together, coinciding with a significant celebration Princess's birthday.",
  },
  {
    id: 3,
    date: "November, 2017",
    image: "apartment",
    description:
      "The journey of independence and self-discovery began for us as we decided to make the move into our own apartment. The bustling city of Makati, known for its vibrant atmosphere and thriving business district, became our new home. The decision was primarily driven by our work commitments, as it offered us the convenience of being closer to our workplaces, reducing commute time, and allowing us to immerse ourselves in the heart of the city's vibrant life.",
  },
  {
    id: 4,
    date: "May, 2019",
    image: "travel",
    description:
      "In May 2019, we embarked on a series of exciting adventures as we experienced two significant `firsts` in our relationship - our first flight together, both within our own country and internationally. This memorable journey marked the beginning of our exploration as a couple, creating cherished memories that would forever hold a special place in our hearts.",
  },
  {
    id: 5,
    date: "September, 2020",
    image: "tindahan",
    description:
      "Amidst the challenging times of the pandemic, we decided to embrace the spirit of resilience and entrepreneurship by venturing into a new and exciting endeavor - starting a small business. Fueled by determination and a shared vision, we navigated through uncertainty and obstacles, transforming our passion into a source of hope and innovation. Our journey as pandemic entrepreneurs not only brought us closer together but also allowed us to make a positive impact on our community, demonstrating that even in adversity, opportunities for growth and success can emerge.",
  },
  {
    id: 6,
    date: "May, 2021",
    image: "popoy",
    description:
      "Our first cat pet, named Popoy traveled from Caloocan to Rizal, filled our lives with love, laughter, and endless moments of companionship. From playful antics to affectionate purrs, Popoy quickly became an irreplaceable member of our family. With those big, expressive eyes and a personality that melted our hearts, Popoy's presence brought warmth and comfort us every day. We will forever cherish the memories we've created with our beloved feline friend, Popoy.",
  },
  {
    id: 7,
    date: "November 19, 2022",
    image: "baguio",
    description:
      "On a magical evening in Baguio City, a heartwarming love story reached a beautiful milestone. Paul, with a touch of casual charm, chose the serene ambiance of a park at night to express his deepest feelings. As the city lights twinkled around them, he took a leap of faith and asked the most important question of his life, proposing to his beloved. Surrounded by the tranquil beauty of nature, their love soared to new heights, and their lives were forever changed as they embraced the promise of a future filled with love and togetherness.",
  },
  {
    id: 8,
    date: "December 17, 2022",
    image: "pamamanhikan",
    description:
      "Paul decided to take the traditional Filipino step of Pamamanhikan. With utmost respect and sincerity, he and his family visited the home of his partner to formally ask for her hand in marriage. The gathering was filled with warmth, laughter, and the celebration of two families coming together to bless their union. It was a cherished day that solidified their love, honoring tradition while embracing a future filled with love and unity.",
  },
];

function OurStory() {
  return (
    <div className="flex flex-col items-center mt-10">
      {DATA.map((data) => (
        <div key={data.id} className="mb-20 flex flex-col items-center">
          <h3 className="text-3xl mb-4 text-[#17392B]">{data.date}</h3>
          <p className="max-w-screen-md text-center mb-8 text-[#17392B]">
            {data.description}
          </p>
          <Image
            src={`/images/our_story/${data.image}.png`}
            width={400}
            height={400}
            alt="our_story"
          />
          {data.id != DATA.length && (
            <Image
              src={leaves}
              width={70}
              height={70}
              alt="Entourage"
              className="mt-8"
              placeholder="blur"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default OurStory;
