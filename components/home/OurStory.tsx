import Image from "next/image";

const DATA = [
  {
    id: 1,
    date: "August, 2016",
    image: "our_story_template",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    date: "August, 2016",
    image: "our_story_template",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    date: "August, 2016",
    image: "our_story_template",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 4,
    date: "August, 2016",
    image: "our_story_template",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function OurStory() {
  return (
    <div className="flex flex-col items-center mt-10">
      {DATA.map((data) => (
        <div key={data.id} className="mb-20 flex flex-col items-center">
          <h3 className="text-3xl mb-4 text-[#17392B]">August, 2016</h3>
          <p className="max-w-screen-md text-center mb-8 text-[#17392B]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Image
            src="/images/our_story_template.png"
            width={400}
            height={400}
            alt="Entourage"
          />
          {data.id != DATA.length && (
            <Image
              src="/images/leaves.png"
              width={70}
              height={70}
              alt="Entourage"
              className="mt-8"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default OurStory;
