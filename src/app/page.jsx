import React from 'react'
import Navbar  from '@/components/navbar/Navbar'
import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import Home1 from '@/components/home1/Home1'


const page = () => {
  return (
    <div>
         {/* FOR REFERENCE * */}
      {/* navbar             // routes smart scrolling 
      home1 
      home2
      home3
      about    // -> /about 
      footer   //  -> contact // */}   
      
        <Navbar/>
        <Home1/>
        <About/>
        <Footer/>



    </div>
  )
}

export default page
