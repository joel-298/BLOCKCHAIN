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
        <Home1 />
        <Home2 />
        {/* <Home3 /> */}         {/*Make sure in your own pc's that this component should remain commented out until i update this */} 
        <About />
        <Footer />
    </div>
  );
};

export default Page;

