import React from "react";
import MainBanner from "../components/HomeDemoThree/MainBanner";
import Features from "../components/HomeDemoThree/Features";
import Solution from "../components/HomeDemoThree/Solution";
import PriceTableTwo from "../components/Common/PriceTableTwo";
import WhyChooseUs from "../components/HomeDemoThree/WhyChooseUs";
import FaqSection from "../components/HomeDemoThree/FaqSection";
import Partners from "../components/Common/Partners";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Testimonials from "../components/Common/Testimonials";
import TeamMember from "../components/Common/TeamMember";
import Services from "../components/HomeDemoOne/Services";

const Index = () => {
  return (
    <React.Fragment>
      <div className="bg-f5f7fa">
        <Navbar />
        <MainBanner />
        <Features />
        <Partners />
        <Services />
        <TeamMember />
        <Solution />
        <WhyChooseUs />
        <PriceTableTwo />
        <Testimonials />
        <FaqSection />
        <div className="bg-white">
          <LatestNews />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Index;
