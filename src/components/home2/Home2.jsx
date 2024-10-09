// import React from 'react'
import Image from 'next/image'
import styles from './home2.module.css'

const Home2 = () => {
  return (
    <>
    <div className={styles.box} id = "home2">
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>What is Web3 Space?</h1><br />
                <p>Things around crypto, NFTs and web3 as a whole are unbelievably interesting. Unfortunately, the overall usability as well as the quality of the UI is often still not up to the task.
                    To achieve mass adoption, overcoming those hurdles will be key. And this is where our story begins.</p><br />
                <button>Create Your Wallet</button>
            </div>
            <div className={styles.imgContainer}>
                {/* <Image src="/vector.svg" alt="" width={100} height={100} className={styles.img1} /> */}
                <div className={styles.t1}><p>Passion for the new wave of Web3</p></div>
                <div className={styles.t2}><p>Easy to navigate UI to help you get onchain</p></div>
            </div>
        </div>
        <br /><br /><br />
        <div className={styles.divider}>
            {/* <Image src="/divider.png" alt="" width={100} height={100} /> */}
        </div>
    </div>
    </>
  )
}

export default Home2