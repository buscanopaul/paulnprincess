"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import imageCenter from "../../public/images/bg_center.png";
import playImage from "../../public/images/plug-and-play.png";
import pauseImage from "../../public/images/video-pause-button.png";

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
    <div className="flex flex-col justify-center items-center font-maharlika text-6xl bg-[url('/images/bg_home.jpg')] bg-[#143C2B] bg-center bg-cover  bg-no-repeat lg:h-screen py-14 lg:py-0 w-full">
      <h2 className="text-white text-4xl drop-shadow-md animate-in fade-in slide-in-from-top-6 delay-75 duration-300">
        Nov. 4, 2023
      </h2>
      <h5 className="text-lg text-white w-[400px] text-center drop-shadow-md animate-in fade-in slide-in-from-top-6 delay-150 duration-300">
        San Antonio de Padua Parish, Antipolo
      </h5>
      <h5 className="text-white text-2xl drop-shadow-md animate-in fade-in slide-in-from-top-6 delay-150 duration-300">
        Le Blanc Hotel
      </h5>
      <audio loop src={"/sound/audio.mp3"} autoPlay ref={playerRef} />
      <img
        src="images/bg_center.png"
        alt="Paul&Princess"
        width="600"
        height="600"
      />
      <h2 className="text-white text-2xl drop-shadow-md animate-in fade-in slide-in-from-bottom-6 delay-150 duration-300">
        #PrincessSavedTheBestPaulast
      </h2>
      <button
        ref={buttonRef}
        onClick={play}
        className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-6 delay-75 duration-300"
      >
        {isPlay ? (
          <Image
            className={`my-5 transition-all duration-150 scale-105`}
            src={pauseImage}
            width={30}
            height={30}
            alt="Paul&Princess"
            placeholder="blur"
          />
        ) : (
          <Image
            className={`my-5 transition-all duration-150 scale-100`}
            src={playImage}
            width={30}
            height={30}
            alt="Paul&Princess"
            placeholder="blur"
          />
        )}
        <p className="text-white text-lg">play me</p>
      </button>
    </div>
  );
}

export default HomeHeader;
