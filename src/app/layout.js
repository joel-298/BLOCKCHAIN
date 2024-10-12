import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from "@/components/navbar/Navbar"
// import Footer from "@/components/footer/Footer"


const inter = Inter({ subsets: ['latin'] })

// SEARCH ENGINE OPTIMIZATION
export const metadata = {
  title: "Web3 Space",
  description: "Web3 Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}



// Name: 