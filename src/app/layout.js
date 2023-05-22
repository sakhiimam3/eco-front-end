import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import FooterBottom from './components/footer'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecomerce app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterBottom />
      
      </body>
    </html>


  )
}
