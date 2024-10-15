// import React from 'react'
import Image from "next/image";
import styles from "./about.module.css" ; 
import Link from "next/link";


const About = () => {
  return (
    <div className={styles.container} id="about">
      <hr />
      <div className={styles.text}>
        <h1>About Us</h1>
        <p>Web3 Space is a decentralized, user-friendly platform designed to simplify the blockchain experience for everyone, especially those new to Web3. Our mission is to break down the barriers to blockchain adoption by offering a seamless and secure onboarding process, enhanced with features that make blockchain transactions as easy as possible.</p>
        <br />
        <div className={styles.more_about}>
          <Link href="/about" passHref className={styles.link}>
            <h2>More About Us </h2>
            <Image src="/arrow-right.svg" alt="arrow-right" width={0} height={0} className={styles.arrow} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About ; 
