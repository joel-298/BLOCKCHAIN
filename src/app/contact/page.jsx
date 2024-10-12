"use client"

import React from 'react'
import Image from "next/image";
import styles from "./contact.module.css"
import Navbar from '@/components/navbar/Navbar';

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      
      <div className={styles.imgContainer}>
        <Image src="/Singing Contract.gif" alt="" height={500} width={500} />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="email" placeholder="email address" />
          <input type="number" placeholder="phone number(optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default ContactPage ;
