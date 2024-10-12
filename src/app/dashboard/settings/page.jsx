import React from 'react'
import styles from "./dashboard.module.css"  ;
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import SettingsPage from '@/components/settings/Settings';

const DashboardPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className={styles.container}>
      <div className={styles.child1}>
        <Sidebar/>
      </div>
      <div className={styles.child2}>
        <SettingsPage/> 
      </div>
    </div>
    </>
  )
}

export default DashboardPage ;


// transactions
// multiaccounts
// NFT'S
// game 
// follow 