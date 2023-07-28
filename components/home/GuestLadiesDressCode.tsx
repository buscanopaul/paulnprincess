import Image from "next/image";
import colorGuestLadies from "../../public/images/dresscode/color_guest_ladies.png";
import guestLadies from "../../public/images/dresscode/guest_ladies.png";

function GuestLadiesDressCode() {
  return (
    <div className="relative mb-20">
      <h2 className="text-2xl text-center text-[rgb(20,60,43)]">
        Guest Ladies
      </h2>
      <div className="flex items-center justify-center  gap-5 mt-5 flex-wrap">
        <Image
          src={colorGuestLadies}
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
          placeholder="blur"
        />
        <Image
          src={guestLadies}
          width={200}
          height={200}
          alt="Entourage"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default GuestLadiesDressCode;
