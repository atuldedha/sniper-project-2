import ContactSection from "./components/ContactSection/ContactSection";
import FAQSection from "./components/FAQSection/FAQSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import SpecificationSection from "./components/SpecificationSection/SpecificationSection";
import WaitingFormSection from "./components/WaitingFormSection/WaitingFormSection";

function App() {
  return (
    <div className="">
      {/* features section */}
      <FeaturesSection />
      {/* specifications */}
      <SpecificationSection />
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
