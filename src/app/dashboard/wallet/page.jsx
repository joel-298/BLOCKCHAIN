import React from 'react'
import styles from "./dashboard.module.css"  ;
import Accounts from '@/components/accounts/Accounts';
import Sidebar from '@/components/sidebar/Sidebar';
import Activity from '@/components/activity/Activity';
import Related_wallets from '@/components/related_wallets/RelatedWallets';
import DashboardNavbar from '@/components/dashboard_navbar/DashboardNavbar';

const DashboardPage = () => {
  // fetch : 

  return (
    <>
    {/* <DashboardNavbar/> */}
    <div className={styles.container}>
      <div className={styles.child1}>
        <Sidebar/>
      </div>
      <div className={styles.child2}>
        <Accounts/>
        <Activity/>
        <Related_wallets/>
      </div>
    </div>
    </>
  )
}

export default DashboardPage ;

