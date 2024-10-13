import React from 'react'
import styles from "./CreateAccount.module.css"
import Image from 'next/image'

const CreateAccountPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
      <Image src="/standing.gif" alt="Standing gif" width={0} height={0} layout="responsive" className={styles.image} />
      </div>
      <div className={styles.form}>
        <div className={styles.heading}><h1>Join Us Today! Create Your Account and Start Exploring</h1></div>
        <div className={styles.input}>
          <input type="text" placeholder='enter your username' />
          <button>Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage