// import React from 'react'
import Image from "next/image";
import styles from "./about.module.css" ; 


const About = () => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.text}>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis fugit nostrum optio magni, rem voluptatibus ipsam hic ea delectus veritatis tenetur adipisci ab distinctio alias quibusdam cum! Libero, eius ab.
        Ipsa beatae dolorum nobis suscipit doloremque nihil repudiandae, quo officiis nesciunt eos ducimus delectus dolorem odio laudantium impedit placeat distinctio. Distinctio amet quisquam eos perferendis eaque suscipit culpa consequuntur debitis!</p>
        <br />
        <button>More About Us </button>
        <Image src="/i.svg" alt="" width={0} height={0} className={styles.arrow} />
      </div>
    </div>
  )
}

export default About ; 
