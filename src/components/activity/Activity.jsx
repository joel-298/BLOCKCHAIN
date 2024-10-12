// VERTICLE TABLE : CASE 1

import React from 'react'
import styles from "./Activity.module.css" ; 
import Image from 'next/image';


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
            <div className={`${styles.table_container_child3}`}>
                <table className={styles.child3_table}>
                    <thead className={styles.child3_thead}>
                    <tr className={styles.box21}>
                        <th className={`${styles.child_3}`}>
                            <div className={styles.sameLine}>
                                <Image src="/Circular_upward.svg" alt="img" width={0} height={0} className={styles.img} />
                                <h3>&nbsp;&nbsp;Sent</h3>
                            </div>
                        </th>
                        <th className={`${styles.child_3}`}>
                            <div className={styles.sameLine}>
                                <Image src="/Circular_downward.svg" alt="img" width={0} height={0} className={styles.img} />
                                <h3>&nbsp;&nbsp;Received</h3>
                            </div>
                        </th>
                        <th className={`${styles.child_3}`}>
                            <div className={styles.sameLine}>
                                <Image src="/Circular_files.svg" alt="img" width={0} height={0} className={styles.img} />
                                <h3>&nbsp;&nbsp;Contract</h3>
                            </div>
                        </th>
                        <th className={`${styles.child_3}`}>
                            <div className={styles.sameLine}>
                                <Image src="/Circular_approved.svg" alt="img" width={0} height={0} className={styles.img} />
                                <h3>&nbsp;&nbsp;Approved</h3>
                            </div>
                        </th>
                        <th className={`${styles.child_3}`}>
                            <div className={styles.sameLine}>
                                <Image src="/Circular_unknown.svg" alt="img" width={0} height={0} className={styles.img} />
                                <h3>&nbsp;&nbsp;Unknown</h3>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody className={styles.child3_body}>
                        <tr className={styles.box21}>
                            <td className={`${styles.child_3}`} data-label="Sent">-0,01 ETH</td>
                            <td className={`${styles.child_3}`} data-label="Received">+$849,984 USDC</td>
                            <td className={`${styles.child_3}`} data-label="Contract">-</td>
                            <td className={`${styles.child_3}`} data-label="Approved">-</td>
                            <td className={`${styles.child_3}`} data-label="Unknown">-</td>
                        </tr>
                        <tr className={styles.box21}>
                            <td className={`${styles.child_3}`} data-label="Sent">  
                                <div className={styles.sameLine}>
                                    <Image src="/images.jpg" alt="account_image" width={0} height={0} className={styles.img} />
                                    <h3>Eth...xyz</h3>
                                </div>
                            </td>
                            <td className={`${styles.child_3}`} data-label="Received">
                                <div className={styles.sameLine}>
                                    <Image src="/images.jpg" alt="account_image" width={0} height={0} className={styles.img} />
                                    <h3>Eth...xyz</h3>
                                </div>
                            </td>
                            <td className={`${styles.child_3}`} data-label="Contract">
                                <div className={styles.sameLine}>
                                    <Image src="/images.jpg" alt="account_image" width={0} height={0} className={styles.img} />
                                    <h3>Eth...xyz</h3>
                                </div>
                            </td>
                            <td className={`${styles.child_3}`} data-label="Approved">
                                <div className={styles.sameLine}>
                                    <Image src="/images.jpg" alt="account_image" width={0} height={0} className={styles.img} />
                                    <h3>Eth...xyz</h3>
                                </div>
                            </td>
                            <td className={`${styles.child_3}`} data-label="Unknown">
                                <div className={styles.sameLine}>
                                    <Image src="/images.jpg" alt="account_image" width={0} height={0} className={styles.img} />
                                    <h3>Eth...xyz</h3>
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.box21}>
                            <td className={`${styles.child_3}`} data-label="Sent"><h4>Apr 20, 2024</h4></td>
                            <td className={`${styles.child_3}`} data-label="Received"><h4>Apr 20, 2024</h4></td>
                            <td className={`${styles.child_3}`} data-label="Contract"><h4>Apr 20, 2024</h4></td>
                            <td className={`${styles.child_3}`} data-label="Approved"><h4>Apr 20, 2024</h4></td>
                            <td className={`${styles.child_3}`} data-label="Unknown"><h4>Apr 20, 2024</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Activity





// // HORIZONTAL TABLE : CASE 2 
// import React from 'react'
// import styles from "./Activity.module.css" ; 
// import Image from 'next/image';


// const Activity = () => {
//   return (
//     <div className={styles.container}>
//         <div className={styles.child1}>
//             <h4>Last 30d transactions &nbsp;&nbsp;&nbsp;ⓘ</h4>
//         </div>
//         <div className={styles.child2}>
//         <div className={styles.child2}>
//             <div className={styles.table_container}>
//                 <table>
//                     <thead>
//                     <tr className={styles.box21}>
//                         <th className={styles.columns1}>Outgoing transactions</th>
//                         <th className={styles.columns1}>Volume</th>
//                         <th className={styles.columns1}>Income</th>
//                         <th className={styles.columns1}>Outcome</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr className={styles.box21}>
//                         <td className={styles.columns2} data-label="Outgoing transactions">258940</td>
//                         <td className={styles.columns2} data-label="Volume">$370,835.50</td>
//                         <td className={styles.columns2} data-label="Income">+403,735.50</td>
//                         <td className={styles.columns2} data-label="Outcome">-$429,040.02</td>
//                     </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>

//         </div>
//         <div className={styles.child3}>
//             <hr />
//             <h4>Recents</h4>
//             <div className={`${styles.table_container_child3}`}>
//             <table className={styles.child3_table}>
//   <tbody className={styles.child3_body}>
//     <tr className={styles.box21}>
//       <td className={`${styles.child_3} ${styles.child3_thead}`}>
//         <div className={styles.sameLine}>
//           <Image src="/Circular_upward.svg" alt="img" width={0} height={0} className={styles.img} />
//           <h3>&nbsp;&nbsp;Sent</h3>
//         </div>
//       </td>
//       <td className={`${styles.child_3}`} data-label="Sent">-0,01 ETH</td>
//       <td className={`${styles.child_3}`} data-label="Sent">Eth...xyz</td>
//       <td className={`${styles.child_3}`} data-label="Sent"><h4>Apr 20, 2024</h4>4</td>
//     </tr>
//     <tr className={styles.box21}>
//       <td className={`${styles.child_3}  ${styles.child3_thead}`}>
//         <div className={styles.sameLine}>
//           <Image src="/Circular_downward.svg" alt="img" width={0} height={0} className={styles.img} />
//           <h3>&nbsp;&nbsp;Received</h3>
//         </div>
//       </td>
//       <td className={`${styles.child_3}`} data-label="Received">+$849,984 USDC</td>
//       <td className={`${styles.child_3}`} data-label="Received">Eth...xyz</td>
//       <td className={`${styles.child_3}`} data-label="Received"><h4>Apr 20, 2024</h4></td>
//     </tr>
//     <tr className={styles.box21}>
//       <td className={`${styles.child_3}  ${styles.child3_thead}`}>
//         <div className={styles.sameLine}>
//           <Image src="/Circular_files.svg" alt="img" width={0} height={0} className={styles.img} />
//           <h3>&nbsp;&nbsp;Contract</h3>
//         </div>
//       </td>
//       <td className={`${styles.child_3}`} data-label="Contract">-</td>
//       <td className={`${styles.child_3}`} data-label="Contract">Eth...xyz</td>
//       <td className={`${styles.child_3}`} data-label="Contract"><h4>Apr 20, 2024</h4></td>
//     </tr>
//     <tr className={styles.box21}>
//       <td className={`${styles.child_3}  ${styles.child3_thead}`}>
//         <div className={styles.sameLine}>
//           <Image src="/Circular_approved.svg" alt="img" width={0} height={0} className={styles.img} />
//           <h3>&nbsp;&nbsp;Approved</h3>
//         </div>
//       </td>
//       <td className={`${styles.child_3}`} data-label="Approved">-</td>
//       <td className={`${styles.child_3}`} data-label="Approved">Eth...xyz</td>
//       <td className={`${styles.child_3}`} data-label="Approved"><h4>Apr 20, 2024</h4></td>
//     </tr>
//     <tr className={styles.box21}>
//       <td className={`${styles.child_3}  ${styles.child3_thead}`}>
//         <div className={styles.sameLine}>
//           <Image src="/Circular_unknown.svg" alt="img" width={0} height={0} className={styles.img} />
//           <h3>&nbsp;&nbsp;Unknown</h3>
//         </div>
//       </td>
//       <td className={`${styles.child_3}`} data-label="Unknown">-</td>
//       <td className={`${styles.child_3}`} data-label="Unknown">Eth...xyz</td>
//       <td className={`${styles.child_3}`} data-label="Unknown"><h4>Apr 20, 2024</h4></td>
//     </tr>
//   </tbody>
// </table>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Activity