import React from 'react'
import styles from "./Settings.module.css"
import Image from 'next/image'


const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src="/images.jpg" alt="" height={100} width={100} />
      </div>
    </div>
  )
}

export default SettingsPage