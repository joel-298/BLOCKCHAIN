"use client";

// HORIZONTAL TABLE :
import React, { useEffect, useState } from "react";
import styles from "./Activity.module.css";
import Image from "next/image";
import Web3 from "web3";

const Activity = () => {
  const [web3, setWeb3] = useState();
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    if (window) {
      if (!window.ethereum) {
        console.error(
          "MetaMask is not installed. Please install it to interact with the blockchain."
        );
        return;
      }
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  useEffect(() => {
    if (!window.ethereum) {
      console.error(
        "MetaMask is not installed. Please install it to interact with the blockchain."
      );
      return;
    }
    if (window && web3) {
      async function getTransactions(accountAddress) {
        const latestBlock = await web3.eth.getBlockNumber();
        const transactionCount = await web3.eth.getTransactionCount(
          accountAddress
        );

        const transactions = [];

        for (
          let blockNumber = latestBlock - 10;
          blockNumber <= latestBlock;
          blockNumber++
        ) {
          const block = await web3.eth.getBlock(blockNumber, true); // Include transactions

          if (block.transactions) {
            for (const transactionHash of block.transactions) {
              const transaction = await web3.eth.getTransaction(
                transactionHash
              );

              if (
                transaction.from === accountAddress ||
                transaction.to === accountAddress
              ) {
                transactions.push(transaction);
              }
            }
          }
        }

        console.log(transactions); //[x] TESTING
        return transactions;
      }

      console.log(web3);

      setTransactions(getTransactions(web3.eth.defaultAccount));
    }
  }, [web3]);

  const newTransaction = async (recipientAddress, amount) => {
    if (!window.ethereum) {
      console.error(
        "MetaMask is not installed. Please install it to interact with the blockchain."
      );
      return;
    }
    try {
      await window.ethereum.enable();
      const senderAddress = web3.eth.defaultAccount;

      const amountInWei = web3.utils.toWei(amount.toString(), "ether");
      const gasPrice = web3.utils.toHex(web3.utils.toWei("20", "gwei")); // TODO
      const gasLimit = "21000"; // TODO
      //   const data = '0xYOUR_CONTRACT_FUNCTION_DATA'; // If applicable

      const transactionObject = {
        from: senderAddress,
        to: recipientAddress,
        value: amountInWei,
        gasPrice,
        gasLimit,
        data,
      };

      const signedTransaction = await web3.eth.accounts.signTransaction(
        transactionObject,
        senderAddress
      );
      const transactionHash = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );

      console.log("Transaction sent:", transactionHash);
      return transactionHash;
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
  };

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
                  <td
                    className={styles.columns2}
                    data-label="Outgoing transactions"
                  >
                    258940
                  </td>
                  <td className={styles.columns2} data-label="Volume">
                    $370,835.50
                  </td>
                  <td className={styles.columns2} data-label="Income">
                    +403,735.50
                  </td>
                  <td className={styles.columns2} data-label="Outcome">
                    -$429,040.02
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.child3}>
        <hr />
        <h4 className={styles.h4}>Recents</h4>
        <div className={`${styles.table_container_child3}`}>
          <table className={styles.child3_table}>
            <tbody className={styles.child3_body}>
              {/* You can apply map function here and add as many rows as u want  */}
              <tr className={styles.box21}>
                <td className={`${styles.child_3} ${styles.child3_thead}`}>
                  <div className={styles.sameLine}>
                    <Image
                      src="/Circular_upward.svg"
                      alt="img"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>&nbsp;&nbsp;Sent</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Sent">
                  <h4>-0,01 ETH</h4>
                </td>
                <td className={`${styles.child_3}`} data-label="Sent">
                  <div className={styles.sameLine}>
                    <Image
                      src="/images.jpg"
                      alt="account_image"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>Eth...xyz</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Sent">
                  <h4>Apr 20, 2024</h4>
                </td>
              </tr>

              {/* if u uncomment this section then u will see an example how multiple entries will look like in this table  */}

              <tr className={styles.box21}>
                <td className={`${styles.child_3}  ${styles.child3_thead}`}>
                  <div className={styles.sameLine}>
                    <Image
                      src="/Circular_downward.svg"
                      alt="img"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>&nbsp;&nbsp;Received</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Received">
                  <h4>+$849,984</h4>
                </td>
                <td className={`${styles.child_3}`} data-label="Received">
                  <div className={styles.sameLine}>
                    <Image
                      src="/images.jpg"
                      alt="account_image"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>Eth...xyz</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Received">
                  <h4>Apr 20, 2024</h4>
                </td>
              </tr>
              <tr className={styles.box21}>
                <td className={`${styles.child_3}  ${styles.child3_thead}`}>
                  <div className={styles.sameLine}>
                    <Image
                      src="/Circular_files.svg"
                      alt="img"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>&nbsp;&nbsp;Contract</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Contract">
                  -
                </td>
                <td className={`${styles.child_3}`} data-label="Contract">
                  <div className={styles.sameLine}>
                    <Image
                      src="/images.jpg"
                      alt="account_image"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>Eth...xyz</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Contract">
                  <h4>Apr 20, 2024</h4>
                </td>
              </tr>
              <tr className={styles.box21}>
                <td className={`${styles.child_3}  ${styles.child3_thead}`}>
                  <div className={styles.sameLine}>
                    <Image
                      src="/Circular_approved.svg"
                      alt="img"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>&nbsp;&nbsp;Approved</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Approved">
                  -
                </td>
                <td className={`${styles.child_3}`} data-label="Approved">
                  <div className={styles.sameLine}>
                    <Image
                      src="/images.jpg"
                      alt="account_image"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>Eth...xyz</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Approved">
                  <h4>Apr 20, 2024</h4>
                </td>
              </tr>
              <tr className={styles.box21}>
                <td className={`${styles.child_3}  ${styles.child3_thead}`}>
                  <div className={styles.sameLine}>
                    <Image
                      src="/Circular_unknown.svg"
                      alt="img"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>&nbsp;&nbsp;Unknown</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Unknown">
                  -
                </td>
                <td className={`${styles.child_3}`} data-label="Unknown">
                  <div className={styles.sameLine}>
                    <Image
                      src="/images.jpg"
                      alt="account_image"
                      width={0}
                      height={0}
                      className={styles.img}
                    />
                    <h3>Eth...xyz</h3>
                  </div>
                </td>
                <td className={`${styles.child_3}`} data-label="Unknown">
                  <h4>Apr 20, 2024</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <button>Create new Transaction</button>
      </div>
    </div>
  );
};

export default Activity;
