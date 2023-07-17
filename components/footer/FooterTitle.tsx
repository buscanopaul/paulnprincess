type FooterTitleProps = {
  children: string;
};
function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h1 className="font-serif text-[130px] text-[#143C2B] leading-none h-28">
      {children}
    </h1>
  );
}

export default FooterTitle;
