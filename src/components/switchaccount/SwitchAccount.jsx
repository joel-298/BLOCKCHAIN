import React from 'react'
import Link from 'next/link' 
import Image from 'next/image'
import styles from "./SwitchAccount.module.css"; 

const SwitchAccount = () => {
  return (
    <div className={styles.container}>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>

        {/* YOU CAN ADD A MAP FUNCTION HERE IF USER HAS MULTIPLE ACCOUNTS LOGGED IN IN ITS DEVICE :  */}
        {/* <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div>
        <div className={styles.component}>
            <Link href="/dashboard/wallet" passHref className={styles.link}>
                <Image src="/images.jpg" alt="" height={0} width={0} />
                <h4 className={styles.heading}>cryptoboss.eth</h4>
                <h4 className={styles.number}>68</h4>
          </Link>
        </div> */}
    </div>
  )
}

export default SwitchAccount
