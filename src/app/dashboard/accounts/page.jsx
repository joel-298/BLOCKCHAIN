import React from 'react'
import styles from "./dashboard.module.css"  ;
import Sidebar from '@/components/sidebar/Sidebar';
import DashboardNavbar from '@/components/dashboard_navbar/DashboardNavbar';
import SwitchAccount from '@/components/switchaccount/SwitchAccount';

const DashboardPage = () => {
  return (
    <>
    <DashboardNavbar/>
    <div className={styles.container}>
      <div className={styles.child1}>
        <Sidebar/>
      </div>
      <div className={styles.child2}>
        <SwitchAccount/>
      </div>
    </div>
    </>
  )
}

export default DashboardPage ;
