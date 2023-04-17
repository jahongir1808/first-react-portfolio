import React from "react";
import {
  About,
  Backtop,
  Contact,
  Facts,
  Footer,
  Header,
  Hero,
  Portfolio,
  Resume,
  Services,
  Testemonials,
} from "../../components/layout/front";

const HomeP = () => {
  return (
    <>
      <Backtop />
      <Header />
      <Hero />
      <About />
      <Facts />
      <Resume />
      <Portfolio />
      <Services />
      <Testemonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeP;
