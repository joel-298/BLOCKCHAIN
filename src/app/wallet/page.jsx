import React from "react";
import styles from "./wallet.module.css";
import Image from "next/image";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

const WalletPage = () => {
  // const client = createThirdwebClient({ secretKey: process.env.THIRDWEB_KEY });

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={0}
          height={0}
          className={styles.logo_img}
        />
      </div>
      <div className={styles.content}>Connect your wallet !</div>
      <div className={styles.button}>
        <button>Connect</button>
        {/* <ConnectButton client={client} /> */}
      </div>
    </div>
  );
};

export default WalletPage;

// import React, { useEffect } from 'react';
// import Image from 'next/image'; // This is how Next.js handles images
// import styles from './wallet.module.css'; // Assuming your CSS module is named `footer.module.css`

// const Wallet = () => {
//   useEffect(() => {
//     // Set a delay of 2 seconds to show the content and button
//     const timer = setTimeout(() => {
//       document.querySelector(`.${styles.content}`).classList.add(styles.show);
//       document.querySelector(`.${styles.buttotn}`).classList.add(styles.show);
//     }, 2000);

//     // Cleanup the timeout when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={styles.container}>
//       {/* Using Next.js's Image component for optimized images */}
//       <Image src="/logo.svg" alt="logo" width={200} height={200} className={styles.logo_img} />

//       {/* Content initially hidden */}
//       <div className={styles.content}>
//         <h1>Welcome to the website</h1>
//       </div>

//       {/* Button initially hidden */}
//       <button className={styles.buttotn}>Click Me</button>
//     </div>
//   );
// };

// export default Wallet;
