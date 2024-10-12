import React from 'react'
import Image from "next/image"
import styles from "./SearchAccount.module.css" ; 


const SearchAccountPage = () => {
  return (
    <div className= {styles.container}>
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

    </div>
  )
}

export default SearchAccountPage ;
