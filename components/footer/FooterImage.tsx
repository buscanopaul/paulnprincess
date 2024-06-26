import Image from "next/image";
import footerImage from "../../public/images/footer_one.png";
import FooterDate from "./FooterDate";
import FooterDescription from "./FooterDescription";

type FooterImageProps = {
  description: string;
  date: string;
  image: any;
};
function FooterImage({ description, date, image }: FooterImageProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image
        src={image}
        width={240}
        height={240}
        alt="November 4"
        placeholder="blur"
      />
      <div className="bg-gradient-to-b from-[#143C2B] to-[#DABF94] h-20 w-[1px]" />
      <div>
        <FooterDate>{date}</FooterDate>
        <FooterDescription>{description}</FooterDescription>
      </div>
    </div>
  );
}

export default FooterImage;
