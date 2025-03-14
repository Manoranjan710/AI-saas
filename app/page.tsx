import Image from "next/image";
import Navbar from './../components/homePageComponents/navbar';
import Hero from './../components/homePageComponents/Hero';
import HeroB from './../components/homePageComponents/HeroB';
import Companies from './../components/homePageComponents/Companies';
import Details from './../components/homePageComponents/Details';
import FundDetails from './../components/homePageComponents/FundDetails';
import Analytics from './../components/homePageComponents/Analytics';
import BetterUnderstand from './../components/homePageComponents/BetterUnderstand';
import DataInsights from './../components/homePageComponents/DataInsights';
import Apps from './../components/homePageComponents/Apps';
import StayUpdate from './../components/homePageComponents/StayUpdate';
import ScaleUp from './../components/homePageComponents/ScaleUp';
import Footer from './../components/homePageComponents/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HeroB/>
      <Companies/>
      <Details/>
      <FundDetails/>
      <Analytics/>
      {/* <BetterUnderstand/> */}
      {/* <DataInsights/> */}
      {/* <Apps/> */}
      {/* <StayUpdate/> */}
      {/* <ScaleUp/> */}
      {/* <Footer/> */}
    </div>
  );
}
