import Image from "next/image";
import FooterDate from "./FooterDate";
import FooterDescription from "./FooterDescription";

type FooterImageProps = {
  description: string;
  date: string;
};
function FooterImage({ description, date }: FooterImageProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src="/images/footer_image.png" width={240} height={240} />
      <div className="bg-gradient-to-b from-[#143C2B] to-[#DABF94] h-20 w-[1px]" />
      <div>
        <FooterDate>{date}</FooterDate>
        <FooterDescription>{description}</FooterDescription>
      </div>
    </div>
  );
}

export default FooterImage;