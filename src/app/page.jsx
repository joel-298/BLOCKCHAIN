import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Home1 from '@/components/home1/Home1';
import Home2 from '@/components/home2/Home2';
import Home3 from '@/components/home3/Home3';
import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';


const Page = () => {
  return (
    <div>
      {/* ID added to sections for scrolling */}
      <Navbar />
      <section id="home">
        <Home1 />
      </section>
      <section id="home2">
        <Home2 />
      </section>
        <Home3 />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Page;

