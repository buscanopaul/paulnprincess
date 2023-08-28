import HomeHeader from "@/components/home/HomeHeader";
import HomePlace from "@/components/home/HomePlace";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSeat from "@/components/home/HomeSeat";
import HomeTabs from "@/components/home/HomeTabs";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomePlace />
      <HomeTabs />
      <HomeProducts />
      <HomeSeat />
    </main>
  );
}
