import React from 'react'
import styles from "./CreateAccount.module.css"
import Image from 'next/image'

const CreateAccountPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src="/standing.gif" alt="" height={650} width={700} />
      </div>
      <div className={styles.form}>
        <input type="text" placeholder='enter your username' />
        <button>Create</button>
      </div>
    </div>
  )
}

export default CreateAccountPage