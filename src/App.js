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
  return (
    <div className="">
      {/* HeroSection */}
      <HeroSection />

      {/* specifications */}
      <SpecificationSection />

      {/* Solutions Section */}
      <SolutionSection />

      {/* Join Course Section */}
      <ContactSection
        titleText="Join one of our free courses now"
        subText="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus."
        buttonText="Join Free Class Now"
        handleClick={() => {}}
      />

      {/* features section */}
      <FeaturesSection />

      {/* Scale Learning Section */}
      <ScaleLearningSection />

      {<CalculateSection />}

      {/* Join Course Section */}
      <ContactSection
        titleText="Join one of our free courses now"
        subText="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus."
        buttonText="Join Free Class Now"
        handleClick={() => {}}
      />

      {/* form section */}
      <WaitingFormSection />

      {/* header section */}
      <HeaderSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact us  */}
      <ContactSection
        titleText="Still have more questions? Contact us now."
        subText="We are happy to help you with any questions and take feedbacks to make
      the Sleeqbooking better for you’re Industry"
        buttonText="Contact us now"
        handleClick={() => {}}
      />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
