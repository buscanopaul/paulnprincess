import Image from "next/image";

function HomeHeader() {
  return (
    <div className="flex flex-col justify-center items-center font-maharlika text-6xl bg-[url('/images/bg_home.jpg')] bg-center bg-cover  bg-no-repeat h-screen w-full">
      <h2 className="text-white text-4xl drop-shadow-md">
        Nov. 4, 2023 - Antipolo
      </h2>

      <h5 className="text-lg text-white w-[400px] text-center drop-shadow-md">
        Nuestra Señora dela Annunciata Parish
      </h5>
      <h5 className="text-white text-2xl drop-shadow-md">Le Blanc Hotel</h5>

      <Image
        className="my-5"
        src="/images/bg_center.png"
        width={600}
        height={600}
        alt="Paul&Princess"
      />
      <h2 className="text-white text-2xl drop-shadow-md">
        #PrincessSavedTheBestPaulast
      </h2>
    </div>
  );
}

export default HomeHeader;
