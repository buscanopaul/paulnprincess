import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReduxProvider } from "@/redux/provider";
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
      <head>
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <meta property="og:title" content="#PrincessSavedTheBestPaulast" />
        <meta property="og:description" content="Save The Date" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
