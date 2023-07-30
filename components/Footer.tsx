import Image from "next/image";
import footerInvited from "../public/images/footer_invited.png";
import FooterImage from "./footer/FooterImage";
import FooterTitle from "./footer/FooterTitle";

function Footer() {
  return (
    <div className="relative bg-[#DABF94]">
      <div className="max-w-screen-xl mx-auto px-6  py-14">
        <div className="flex justify-around flex-col items-center lg:flex-row">
          <div className="pl-5 flex flex-col gap-20">
            <div className="flex flex-col md:flex-row lg:flex-col md:gap-10 lg:gap-0">
              <FooterTitle>Save</FooterTitle>
              <FooterTitle>The</FooterTitle>
              <FooterTitle>Date</FooterTitle>
            </div>
            <Image
              src={footerInvited}
              width={100}
              height={100}
              className="mb-10 lg:mb-0 self-center lg:self-start hover:animate-spin duration-100"
              alt="See you soon"
              placeholder="blur"
            />
          </div>
          <div>
            <div className="flex gap-10">
              <FooterImage description="WE WILL MEET AGAIN" date="November" />
              <FooterImage description="SEE YOU SOON" date="04" />
              <FooterImage description="THE NEXT JOURNEY" date="2023" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
