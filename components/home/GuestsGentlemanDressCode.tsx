import Image from "next/image";
import colorGuestMen from "../../public/images/dresscode/color_guest_men.png";
import guestLongSleeve from "../../public/images/dresscode/guest_longsleeve.png";
import guestPants from "../../public/images/dresscode/guest_pants.png";
import guestPolo from "../../public/images/dresscode/guest_polo.png";
import guestShoes from "../../public/images/dresscode/guest_shoes.png";

function GuestsGentlemanDressCode() {
  return (
    <div className="relative mb-20">
      <h2 className="text-2xl text-center text-[rgb(20,60,43)]">
        Guest Gentleman
      </h2>
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <Image
          src={colorGuestMen}
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
          placeholder="blur"
        />
        <Image
          src={guestPolo}
          width={150}
          height={150}
          alt="Entourage"
          placeholder="blur"
        />
        <h3>or</h3>
        <Image
          src={guestLongSleeve}
          width={140}
          height={140}
          alt="Entourage"
          placeholder="blur"
        />
        <Image
          src={guestPants}
          width={60}
          height={60}
          alt="Entourage"
          placeholder="blur"
        />
        <Image
          src={guestShoes}
          width={150}
          height={150}
          alt="Entourage"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default GuestsGentlemanDressCode;
