import React from 'react'
import styles from "./dashboard.module.css"  ;
import Sidebar from '@/components/sidebar/Sidebar';
import DashboardNavbar from '@/components/dashboard_navbar/DashboardNavbar';
import SearchAccountPage from '@/components/search_account/SearchAccount';

const DashboardPage = () => {
  return (
    <>
    <DashboardNavbar/>
    <div className={styles.container}>
      <div className={styles.child1}>
        <Sidebar/>
      </div>
      <div className={styles.child2}>
        <SearchAccountPage/>
      </div>
    </div>
    </>
  )
}

export default DashboardPage ;
