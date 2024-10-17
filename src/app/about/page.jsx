import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react'
import styles from './about.module.css'
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      
      <div className={styles.child1}>
        <div className={styles.heading1}>
          <h1>About Web3 Space</h1>
        </div>
        <div className={styles.content}>
          <p>Web3 Space is a decentralized, user-friendly platform designed to simplify the blockchain experience for everyone, especially those new to Web3. Our mission is to break down the barriers to blockchain adoption by offering a seamless and secure onboarding process, enhanced with features that make blockchain transactions as easy as possible.</p>
          <br />
          <p>At Web3 Space, we understand that the complexity of blockchain technology can be intimidating for non-technical users. That's why we've built a platform that offers one-click account creation, smart wallet integration, and the ability to buy crypto with fiat currencies—all with the simplicity of Web2 services. No more complicated wallet addresses or confusing transaction processes. With Web3 Space we bring the best of blockchain directly to your fingertips.</p>

        </div>
      </div>

      <div className={styles.child2}>
        <div className={styles.heading2}><h1 className={styles.h1}>Our Team</h1></div>
        <div className={styles.team}>
          <div className={styles.box}>
            <div className={styles.one}>
                <Image src="/noavatar.png" alt="profile_img" height={0} width={0} className={styles.img} />
                <p className={styles.p}>Lokesh</p>
              </div>

              <div className={styles.two}>
                <Link href="/" passHref><Image src="/linkedin.svg" alt="" height={0} width={0} className={styles.icon}  /></ Link>
                <Link href="/" passHref><Image src="/github.svg" alt="" height={0} width={0} className={styles.icon} /></Link>
              </div>
          </div>
          <div className={styles.box}>
            <div className={styles.one}>
                <Image src="/noavatar.png" alt="profile_img" height={0} width={0} className={styles.img} />
                <p className={styles.p}>Kavyam</p>
              </div>

              <div className={styles.two}>
                <Link href="/" passHref><Image src="/linkedin.svg" alt="" height={0} width={0} className={styles.icon}  /></ Link>
                <Link href="/" passHref><Image src="/github.svg" alt="" height={0} width={0} className={styles.icon} /></Link>
              </div>
          </div>
          <div className={styles.box}>
            <div className={styles.one}>
                <Image src="/noavatar.png" alt="profile_img" height={0} width={0} className={styles.img} />
                <p className={styles.p}>Joel</p>
              </div>

              <div className={styles.two}>
                <Link href="https://www.linkedin.com/in/joel-matthew-b40394258/" passHref target='/'><Image src="/linkedin.svg" alt="" height={0} width={0} className={styles.icon}  /></ Link>
                <Link href="https://github.com/joel-298" passHref target='/'><Image src="/github.svg" alt="" height={0} width={0} className={styles.icon} /></Link>
              </div>
          </div>
          <div className={styles.box}>
            <div className={styles.one}>
              <Image src="/noavatar.png" alt="profile_img" height={0} width={0} className={styles.img} />
              <p className={styles.p}>Kashish</p>
            </div>

            <div className={styles.two}>
              <Link href="https://www.linkedin.com/in/kashish-barthwal-875014280/" passHref target='/'><Image src="/linkedin.svg" alt="" height={0} width={0} className={styles.icon}  /></ Link>
              <Link href="https://github.com/kashish-2874" passHref target='/'><Image src="/github.svg" alt="" height={0} width={0} className={styles.icon} /></Link>
            </div>
          </div>
        </div>
      </div>  
    </div>

    <Footer /> 
    
    </>
    
  )
}

export default AboutPage ;
