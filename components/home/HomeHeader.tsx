"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function HomeHeader() {
  const playerRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef(null);
  const [isPlay, setPlay] = useState(false);

  function play() {
    if (!isPlay) {
      playerRef.current?.play();
    } else {
      playerRef.current?.pause();
    }
    setPlay((prevIsPlay) => !prevIsPlay);
  }

  return (
    <div className="flex flex-col justify-center items-center font-maharlika text-6xl bg-[url('/images/bg_home.jpg')] bg-center bg-cover  bg-no-repeat lg:h-screen py-14 lg:py-0 w-full">
      <h2 className="text-white text-4xl drop-shadow-md animate-in fade-in slide-in-from-top-6 delay-75 duration-300">
        Nov. 4, 2023 - Antipolo
      </h2>
      <h5 className="text-lg text-white w-[400px] text-center drop-shadow-md animate-in fade-in slide-in-from-top-6 delay-150 duration-300">
        Nuestra Señora dela Annunciata Parish
      </h5>
      <h5 className="text-white text-2xl drop-shadow-md animate-in fade-in slide-in-from-top-6 delay-150 duration-300">
        Le Blanc Hotel
      </h5>
      <audio loop src={"/sound/audio.mp3"} autoPlay ref={playerRef} />
      <Image
        className="my-5 animate-in fade-in slide-in-from-top-6 delay-200 duration-500"
        src="/images/bg_center.png"
        width={600}
        height={600}
        alt="Paul&Princess"
      />
      <h2 className="text-white text-2xl drop-shadow-md animate-in fade-in slide-in-from-bottom-6 delay-150 duration-300">
        #PrincessSavedTheBestPaulast
      </h2>
      <button
        ref={buttonRef}
        onClick={play}
        className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-6 delay-75 duration-300"
      >
        <Image
          className={`my-5 transition-all duration-150 ${
            isPlay ? "scale-105" : "scale-100"
          }`}
          src={`${
            isPlay
              ? "/images/video-pause-button.png"
              : "/images/plug-and-play.png"
          } `}
          width={30}
          height={30}
          alt="Paul&Princess"
        />
        <p className="text-white text-lg">play me</p>
      </button>
    </div>
  );
}

export default HomeHeader;
