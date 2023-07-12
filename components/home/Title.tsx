type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return (
    <div className="justify-center flex">
      <h1 className="font-serif text-7xl w-[600px] text-center text-[#143C2B]">
        {children}
      </h1>
    </div>
  );
}
