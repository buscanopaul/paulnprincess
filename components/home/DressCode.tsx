import BridesMaidDressCode from "./BridesMaidDressCode";
import GuestLadiesDressCode from "./GuestLadiesDressCode";
import GuestsGentlemanDressCode from "./GuestsGentlemanDressCode";
import SponsorDressCode from "./SponsorDressCode";

function DressCode() {
  return (
    <div className="flex flex-col items-center mt-9">
      <SponsorDressCode />
      <BridesMaidDressCode />
      <GuestsGentlemanDressCode />
      <GuestLadiesDressCode />
    </div>
  );
}

export default DressCode;
