import React from 'react'
import Navbar  from '@/components/navbar/Navbar'
import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import Home1 from '@/components/home1/Home1'
import Home2 from '@/components/home2/page'
import Home3 from '@/components/home3/page'


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
        <Home2 />
        <Home3 />
        <About/>
        <Footer/>
        



    </div>
  )
}

export default page
