import React from 'react'
import styles from "./dashboard.module.css"  ;
import Accounts from '@/components/accounts/Accounts';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import SearchAccountPage from '@/components/search_account/SearchAccount';
import SettingsPage from '@/components/settings/Settings';
import Activity from '@/components/activity/Activity';
import Related_wallets from '@/components/related_wallets/RelatedWallets';

const DashboardPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className={styles.container}>
      <div className={styles.child1}>
        <Sidebar/>
      </div>
      <div className={styles.child2}>
        <Accounts/>
        {/* <SearchAccountPage/> */}
        <Activity/>
        <Related_wallets/>
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