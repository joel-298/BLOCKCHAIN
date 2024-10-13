import React from 'react'
import styles from "./dashboard.module.css"  ;
import Sidebar from '@/components/sidebar/Sidebar';
import SettingsPage from '@/components/settings/Settings';
import DashboardNavbar from '@/components/dashboard_navbar/DashboardNavbar';

const DashboardPage = () => {
  return (
    <>
    <DashboardNavbar/>
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
