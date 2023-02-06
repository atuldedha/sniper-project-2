import ContactSection from "./components/ContactSection/ContactSection";
import FAQSection from "./components/FAQSection/FAQSection";
import Footer from "./components/Footer/Footer";
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
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
