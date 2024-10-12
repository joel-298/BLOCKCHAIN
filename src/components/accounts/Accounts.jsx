import React from 'react'
import styles from "./Accounts.module.css" ; 
import Image from "next/image";

const Accounts = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.child1}>
        <div className={styles.box11}>
            {/*You can add a condition here : if user has no avtar image then show this image else you can display user's image*/}
            <Image src="/noavatar.png" alt='avatar' width={0} height={0} className={styles.avatar}/>
            <div className={styles.box111}>
              <h2>minooor.eth</h2>
              <h3><span>92</span>&nbsp;&nbsp;Supperrank</h3>
            </div>
        </div>
        <div className={styles.box12}>
          <h4>Last updated Apr 18</h4>
        </div>
      </div>

      <div className={styles.child2}>
        <div className={styles.table_container}>
          <table>
            <thead>
              <tr className={styles.box21}>
                <th className={styles.columns1}>Balance</th>
                <th className={styles.columns1}>Age</th>
                <th className={styles.columns1}>Outgoing transactions</th>
                <th className={styles.columns1}>Owned NFTs</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.box21}>
                <td className={styles.columns2}>$20,827.38</td>
                <td className={styles.columns2}>1y 2m 15d</td>
                <td className={styles.columns2}>3940</td>
                <td className={styles.columns2}>24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>  
  )
}

export default Accounts


