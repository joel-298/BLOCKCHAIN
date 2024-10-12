import React from 'react' ;
import styles from "./footer.module.css" ; 
import Image from "next/image" ; 
import Link from "next/link" ; 

const Footer = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.child1}>
        <div className={styles.heading}>
            <h1>Web3 Space</h1>
            <h2>Start you web3 journey right now!</h2>
        </div>
        <div className={styles.gmail}>
            <h2>sample@gmail.com</h2>
            <Image src="/arrow-right.svg" alt="arrow-right" width={0} height={0} className={styles.arrow_right}/>
        </div>
      </div>
      <div className={styles.child2}>
        <div className={styles.heading}>
            <h2>Our Services</h2>
        </div>
        <div className={styles.lists}>
            <h3>Get Started</h3>
            <h3>Trackee</h3>
            <h3>Worldcoin+</h3>
            <h3>Audience</h3>
        </div>
      </div>
      <div className={styles.child3}>
        <div className={styles.heading}>
            <h2>Follow us</h2>
        </div>
        <div className={styles.lists}>
            <h3>Facebook</h3>
            <h3>Instagram</h3>
            <h3>Dribbble</h3>
            <h3>Linkedin</h3>
        </div>
      </div>
      <div className={styles.child4}>
        <Link href="/#home" passHref>
            <Image src="/arrow-up.svg" alt="arrow-up" width={0} height={0} className={styles.arrow_up}/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
