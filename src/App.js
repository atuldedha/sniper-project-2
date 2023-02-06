import ContactSection from "./components/ContactSection/ContactSection";
import FAQSection from "./components/FAQSection/FAQSection";
import HeaderSection from "./components/HeaderSection/HeaderSection";

function App() {
  return (
    <div className="">
      {/* header section */}
      <HeaderSection />
      {/* FAQ Section */}
      <FAQSection />
      {/* Contact us  */}
      <ContactSection />
    </div>
  );
}

export default App;
