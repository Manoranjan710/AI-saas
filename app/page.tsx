import Image from "next/image";
import Navbar from './../components/homePageComponents/navbar';
import Hero from './../components/homePageComponents/Hero';
import HeroB from './../components/homePageComponents/HeroB';
import Companies from './../components/homePageComponents/Companies';
import Details from './../components/homePageComponents/Details';
import FundDetails from './../components/homePageComponents/FundDetails';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HeroB/>
      <Companies/>
      <Details/>
      <FundDetails/>
    </div>
  );
}
