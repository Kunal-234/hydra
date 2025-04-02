import {
  Navbar,
  Hero,
  About,
  Services,
  Technologies,
  Howto,
  ContactUs,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>

      <section className="xl:bg-body-background bg-cover bg-no-repeat bg-center">
        <About />
        <Services />
        <Technologies />
        <Howto />
        <ContactUs />
        <Footer />
      </section>
    </>
  );
}

export default App;
