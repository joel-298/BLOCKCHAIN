import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Sidebar.module.css" ;

const Sidebar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.child1}>

          <div className={styles.box1}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
              <Image src="/document.svg" alt="Logo" width={0} height={0} className={styles.document_img} />
              <h3>&nbsp;&nbsp;Wallet</h3>
            </Link>
          </div>

          <div className={styles.box2}>
            <Link href="/dashboard/settings" passHref className={styles.link}>
              <Image src="/settings.svg" alt="Logo" width={0} height={0} className={styles.settings_img} />
              <h3>&nbsp;&nbsp;Settings</h3>
            </Link>
          </div>

      </div>

      <div className={styles.child2}>
        <Link href="/dashboard/accounts" passHref className={styles.link}>
          <Image src="/noavatar.png" alt="Logo" width={0} height={0} className={styles.avatar_img} />
          <h2>xojsbdipuwefw</h2>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
