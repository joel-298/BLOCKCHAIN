// import React from 'react'
import Image from "next/image";
import styles from "./about.module.css" ; 
import Link from "next/link" ;

const About = () => {
  return (
    <div className={styles.container} id="about">
      <hr />
      <div className={styles.text}>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis fugit nostrum optio magni, rem voluptatibus ipsam hic ea delectus veritatis tenetur adipisci ab distinctio alias quibusdam cum! Libero, eius ab.
        Ipsa beatae dolorum nobis suscipit doloremque nihil repudiandae, quo officiis nesciunt eos ducimus delectus dolorem odio laudantium impedit placeat distinctio. Distinctio amet quisquam eos perferendis eaque suscipit culpa consequuntur debitis!</p>
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
