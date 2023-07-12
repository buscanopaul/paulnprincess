import Image from "next/image";

function GuestsGentlemanDressCode() {
  return (
    <div className="relative mb-20">
      <h2 className="text-2xl text-center text-[rgb(20,60,43)]">
        Guest Gentleman
      </h2>
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <Image
          src="/images/dresscode/color_guest_men.png"
          width={150}
          height={150}
          alt="Entourage"
          className="mr-10"
        />
        <Image
          src="/images/dresscode/guest_polo.png"
          width={150}
          height={150}
          alt="Entourage"
        />
        <h3>or</h3>
        <Image
          src="/images/dresscode/guest_longsleeve.png"
          width={140}
          height={140}
          alt="Entourage"
        />
        <Image
          src="/images/dresscode/guest_pants.png"
          width={60}
          height={60}
          alt="Entourage"
        />
        <Image
          src="/images/dresscode/guest_shoes.png"
          width={150}
          height={150}
          alt="Entourage"
        />
      </div>
    </div>
  );
}

export default GuestsGentlemanDressCode;
