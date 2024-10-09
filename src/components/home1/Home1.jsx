import React from 'react'
import styles from "./home1.module.css" ; 
import Image from "next/image" ; 
import Link from 'next/link'; // Import the Link component

const Home1 = () => {
  return (
    <div id="home" className = {styles.container}>
      <div className={styles.child1}>
        <div className={styles.headings}>
            <h1>Your Space</h1>
            <h1>for the</h1>
            <h1>Web3 world</h1>
        </div>
        <div className={styles.home2_container}>
            <Link href="/#home2" passHref className={styles.link}>
                <Image src="/arrow-bottom.svg" alt="home_image" width={0} height={0} className={styles.arrow_image}/>
            </Link>
            <div className={styles.paragraph}>
                <p>We help companies design their</p>
                <p>product to be ready for web3 world</p>
            </div>
        </div>
      </div>
      <div className={styles.child2}>
        <Image src="/div.svg" alt="home_image" width={0} height={0} className={styles.image}/>
      </div>
    </div>
  )
}

export default Home1
