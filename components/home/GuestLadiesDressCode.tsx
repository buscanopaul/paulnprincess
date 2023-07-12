import Image from "next/image";

function GuestLadiesDressCode() {
  return (
    <div className="relative mb-20">
      <h2 className="text-2xl text-center text-[rgb(20,60,43)]">
        Guest Ladies
      </h2>
      <div className="flex items-center justify-center  gap-5 mt-5 flex-wrap">
        <Image
          src="/images/dresscode/color_guest_ladies.png"
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
        />
        <Image
          src="/images/dresscode/guest_ladies.png"
          width={200}
          height={200}
          alt="Entourage"
        />
      </div>
    </div>
  );
}

export default GuestLadiesDressCode;
