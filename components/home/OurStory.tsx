import Image from "next/image";

function OurStory() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-3xl mb-4">August, 2016</h3>
      <p className="max-w-screen-md text-center mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <Image
        src="/images/our_story_template.png"
        width={400}
        height={400}
        alt="Entourage"
      />
    </div>
  );
}

export default OurStory;
