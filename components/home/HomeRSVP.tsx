import Image from "next/image";
import React from "react";
import RSVP from "../../public/images/RSVP.png";

function HomeRSVP() {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6 justify-center flex mb-20">
      <Image
        src={RSVP}
        width={400}
        height={400}
        alt="RSVP"
        placeholder="blur"
        className="border"
      />
    </div>
  );
}

export default HomeRSVP;
