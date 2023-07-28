import Image from "next/image";
import colorNinong from "../../public/images/dresscode/color_ninong.png";
import colorBarong from "../../public/images/dresscode/sponsor_barong.png";
import sponsor_pants from "../../public/images/dresscode/sponsor_pants.png";
import sponsor_shoes from "../../public/images/dresscode/sponsor_shoes.png";

function SponsorDressCode() {
  return (
    <div className="relative mb-20">
      <h2 className="text-2xl text-center text-[#143C2B]">Ninong/Groomsmen</h2>
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <Image
          src={colorNinong}
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
          placeholder="blur"
        />
        <Image
          src={colorBarong}
          width={100}
          height={100}
          alt="Entourage"
          placeholder="blur"
        />
        <Image
          src={sponsor_pants}
          width={140}
          height={140}
          alt="Entourage"
          placeholder="blur"
        />
        <Image
          src={sponsor_shoes}
          width={140}
          height={140}
          alt="Entourage"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default SponsorDressCode;
