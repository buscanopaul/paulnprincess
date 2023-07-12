import Footer from "@/components/Footer";
import Header from "@/components/Header";
import localFont from "@next/font/local";
import "./globals.css";

export const metadata = {
  title: "Paul & Princess",
  description: "Wedding WishList",
};

const maharlika = localFont({
  src: [
    {
      path: "../public/fonts/Maharlika-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-maharlika",
});

const bdscript = localFont({
  src: [
    {
      path: "../public/fonts/BDScript-Bold.otf",
      weight: "400",
    },
  ],
  variable: "--font-bdscript",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${maharlika.variable} ${bdscript.variable} font-sans`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
