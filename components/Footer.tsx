import Image from "next/image";
import footerInvited from "../public/images/footer_invited.png";
import FooterImage from "./footer/FooterImage";
import FooterTitle from "./footer/FooterTitle";

const DATA = [
  {
    id: "1",
    image: require("../public/images/footer_one.png"),
    description: "WE WILL MEET AGAIN",
    date: "November",
  },
  {
    id: "2",
    image: require("../public/images/footer_two.png"),
    description: "SEE YOU SOON",
    date: "04",
  },
  {
    id: "3",
    image: require("../public/images/footer_three.png"),
    description: "THE NEXT JOURNEY",
    date: "2023",
  },
];

function Footer() {
  return (
    <div className="relative bg-[#DABF94]">
      <div className="max-w-screen-xl mx-auto px-6  py-14">
        <div className="flex justify-around flex-col items-center lg:flex-row">
          <div className="pl-5 flex flex-col gap-20">
            <div className="flex flex-row lg:flex-col gap-10 lg:gap-0 md:max-w-auto max-w-sm flex-wrap justify-center">
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
            <div className="flex flex-col md:flex-row gap-10">
              {DATA.map((data) => (
                <div key={data.id}>
                  <FooterImage
                    image={data.image}
                    description={data.description}
                    date={data.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
