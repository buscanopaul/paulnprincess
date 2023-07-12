import Image from "next/image";

function SponsorDressCode() {
  return (
    <div className="relative mb-20">
      <h2 className="text-2xl text-center text-[#143C2B]">Ninong/Groomsmen</h2>
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <Image
          src="/images/dresscode/color_ninong.png"
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
        />
        <Image
          src="/images/dresscode/sponsor_barong.png"
          width={100}
          height={100}
          alt="Entourage"
        />
        <Image
          src="/images/dresscode/sponsor_pants.png"
          width={140}
          height={140}
          alt="Entourage"
        />
        <Image
          src="/images/dresscode/sponsor_shoes.png"
          width={140}
          height={140}
          alt="Entourage"
        />
      </div>
    </div>
  );
}

export default SponsorDressCode;
