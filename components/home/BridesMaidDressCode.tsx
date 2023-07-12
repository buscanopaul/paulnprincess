import Image from "next/image";

function BridesMaidDressCode() {
  return (
    <div className="relative mb-20 flex flex-col items-center">
      <h2 className="text-2xl text-center text-[#143C2B]">
        Bridesmaid (Emerald Green)
      </h2>
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <Image
          src="/images/dresscode/color_bridesmaid.png"
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
        />
        <Image
          src="/images/dresscode/bridesmaid.png"
          width={100}
          height={100}
          alt="Entourage"
        />
      </div>
    </div>
  );
}

export default BridesMaidDressCode;
