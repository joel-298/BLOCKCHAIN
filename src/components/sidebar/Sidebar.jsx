import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Sidebar.module.css" ;

const Sidebar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.child1}>

        {/* <div className={styles.box1}>
          <Link href="/" passHref>
            <Image src="/logo.svg" alt="Logo" width={0} height={0} className={styles.logo_img} />
          </Link>
          <h2>Web3 Space</h2>
        </div> */}
        <div className={styles.box2}>
          <Image src="/document.svg" alt="Logo" width={0} height={0} className={styles.document_img} />
          <h3>Wallet</h3>
        </div>
        {/* <div className={styles.box3}>
          <h3>NFTs</h3>
        </div> */}
        <div className={styles.box4}>
          <Image src="/settings.svg" alt="Logo" width={0} height={0} className={styles.settings_img} />
          <h3>Settings</h3>
        </div>

        {/* // Search bar */}
        <div className={styles.box5}>
          <form action="">
            <input type="text" />
            <button type="submit">Submit</button>
          </form>          
        </div>

      </div>

      <div className={styles.child2}>
        <Image src="/noavatar.png" alt="Logo" width={0} height={0} className={styles.avatar_img} />
        <h2>xojsbdipuwefw</h2>
      </div>
    </div>
  )
}

export default Sidebar
