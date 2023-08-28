"use client";

import Image from "next/image";
import { useState } from "react";
import entourage from "../../public/images/entourage.png";
import DressCode from "./DressCode";
import OurPhotos from "./OurPhotos";
import OurStory from "./OurStory";
import Title from "./Title";

const DATA = [
  {
    id: 0,
    title: "Our Story",
  },
  {
    id: 1,
    title: "Photos",
  },
  {
    id: 2,
    title: "Entourage",
  },
  {
    id: 3,
    title: "Dress code",
  },
];

function HomeTabs() {
  const [active, setActive] = useState(0);
  const [title, setTitle] = useState(DATA[0].title);

  const handleChangeTab = (data: any) => {
    setActive(data.id);
    setTitle(data.title);
  };

  return (
    <div className="relative max-w-screen-xl mx-auto px-6">
      <div className="mb-7">
        <Title>{title}</Title>
      </div>
      <div className="flex-row flex gap-5 justify-center mb-5 flex-wrap">
        {DATA.map((data) => (
          <button
            key={data.id}
            onClick={() => handleChangeTab(data)}
            className={`${
              data.id === active && "border-b-[#143C2B] border-b-2"
            }  text-[#143C2B]`}
          >
            <h4>{data.title}</h4>
          </button>
        ))}
      </div>
      <div className={`${active == 0 ? "block" : "hidden"}`}>
        <OurStory />
      </div>
      <div className={`${active == 1 ? "block" : "hidden"}`}>
        <OurPhotos />
      </div>
      <div
        className={`${active == 2 ? "block" : "hidden"} justify-center flex`}
      >
        {/* <Image
          src={entourage}
          width={500}
          height={500}
          alt="Entourage"
          placeholder="blur"
        /> */}
        <iframe
          loading="lazy"
          className="w-[541px] h-screen border-y-2 border-black"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFs1GI-828&#x2F;view?embed"
        ></iframe>
      </div>
      <div className={`${active == 3 ? "block" : "hidden"}`}>
        <DressCode />
      </div>
    </div>
  );
}

export default HomeTabs;
