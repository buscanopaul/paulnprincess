import Link from "next/link";

function Header() {
  return (
    <div className="text-[#143C2B] text-lg text-center mt-2 mb-3 animate-in fade-in slide-in-from-top-6 duration-300">
      <Link href="/" className="highlight font-serif text-7xl">
        Paul & Princess
      </Link>
    </div>
  );
}

export default Header;
