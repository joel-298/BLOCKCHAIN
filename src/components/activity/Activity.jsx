import React from 'react'
import styles from "./Activity.module.css" ; 

const Activity = () => {
  return (
    <div className={styles.container}>
        <div className={styles.child1}>
            <h4>Last 30d transactions &nbsp;&nbsp;&nbsp;ⓘ</h4>
        </div>
        <div className={styles.child2}>
        <div className={styles.child2}>
            <div className={styles.table_container}>
                <table>
                    <thead>
                    <tr className={styles.box21}>
                        <th className={styles.columns1}>Outgoing transactions</th>
                        <th className={styles.columns1}>Volume</th>
                        <th className={styles.columns1}>Income</th>
                        <th className={styles.columns1}>Outcome</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={styles.box21}>
                        <td className={styles.columns2} data-label="Outgoing transactions">258940</td>
                        <td className={styles.columns2} data-label="Volume">$370,835.50</td>
                        <td className={styles.columns2} data-label="Income">+403,735.50</td>
                        <td className={styles.columns2} data-label="Outcome">-$429,040.02</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </div>
        <div className={styles.child3}>
            <hr />
            <h4>Recents</h4>
        </div>
    </div>
  )
}

export default Activity
