import { useRef } from "react";
import CalculateSection from "./components/CalculateSection/CalculateSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FAQSection from "./components/FAQSection/FAQSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ScaleLearningSection from "./components/ScaleLearningSection/ScaleLearningSection";
import SolutionSection from "./components/SolutionSection/SolutionSection";
import SpecificationSection from "./components/SpecificationSection/SpecificationSection";
import WaitingFormSection from "./components/WaitingFormSection/WaitingFormSection";

function App() {
  const homeRef = useRef();
  const industryRef = useRef();
  const featuresRef = useRef();
  const faqRef = useRef();
  const aboutRef = useRef();
  const waitlistRef = useRef();

  const handleNavigation = (pageName) => {
    if (pageName === "home") {
      homeRef.current.scrollIntoView();
    } else if (pageName === "industry") {
      industryRef.current.scrollIntoView();
    } else if (pageName === "feature") {
      featuresRef.current.scrollIntoView();
    } else if (pageName === "faq") {
      faqRef.current.scrollIntoView();
    } else if (pageName === "about") {
      aboutRef.current.scrollIntoView();
    } else if (pageName === "waitlist") {
      waitlistRef.current.scrollIntoView();
    }
  };
  return (
    <div className="overflow-x-hidden">
      {/* HeroSection */}
      <HeroSection homeRef={homeRef} handleNavigation={handleNavigation} />

      {/* specifications */}
      <SpecificationSection innerRef={industryRef} />

      {/* Solutions Section */}
      <SolutionSection />

      {/* Join Course Section */}
      <ContactSection
        titleText="Join one of our free courses now"
        subText="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus."
        buttonText="Join Free Class Now"
        handleClick={() => handleNavigation("waitlist")}
      />

      {/* features section */}
      <FeaturesSection innerRef={featuresRef} />

      {/* Scale Learning Section */}
      <ScaleLearningSection innerRef={aboutRef} />

      {<CalculateSection />}

      {/* Join Course Section */}
      <ContactSection
        titleText="Join one of our free courses now"
        subText="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus."
        buttonText="Join Free Class Now"
        handleClick={() => handleNavigation("waitlist")}
      />

      {/* form section */}
      <WaitingFormSection innerRef={waitlistRef} />

      {/* header section */}
      <HeaderSection />

      {/* FAQ Section */}
      <FAQSection innerRef={faqRef} />

      {/* Contact us  */}
      <ContactSection
        titleText="Still have more questions? Contact us now."
        subText="We are happy to help you with any questions and take feedbacks to make
      the Sleeqbooking better for you’re Industry"
        buttonText="Contact us now"
        handleClick={() => handleNavigation("waitlist")}
      />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
