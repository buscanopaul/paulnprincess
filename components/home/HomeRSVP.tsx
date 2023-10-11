import Image from "next/image";
import React from "react";
import RSVP from "../../public/images/RSVP.png";

function HomeRSVP() {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6 justify-center flex mb-20">
      <video preload="auto" playsInline controls className="w-[700px] mt-3">
        <source src="/videos/pnp.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeRSVP;
