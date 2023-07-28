import Image from "next/image";
import bridesMaid from "../../public/images/dresscode/bridesmaid.png";
import colorBridesmaid from "../../public/images/dresscode/color_bridesmaid.png";

function BridesMaidDressCode() {
  return (
    <div className="relative mb-20 flex flex-col items-center">
      <h2 className="text-2xl text-center text-[#143C2B]">
        Bridesmaid (Emerald Green)
      </h2>
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <Image
          src={colorBridesmaid}
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
          placeholder="blur"
        />
        <Image
          src={bridesMaid}
          width={100}
          height={100}
          alt="Entourage"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default BridesMaidDressCode;
