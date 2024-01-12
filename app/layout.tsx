import Navbar from '@/components/Navbar'
import './globals.css'
import { Merriweather } from 'next/font/google'
import Head from 'next/head'
import { Metadata } from 'next'

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })


export const metadata: Metadata = {
  title: {
    template: "%s | Mario's Wood-Fired Mobile Pizza",
    default: "Mario's Wood-Fired Mobile Pizza", // a default is required when creating a template
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={merriweather.className} lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className='bg-slate-100'>
        <Navbar />
        <div className='flex min-h-screen flex-col items-center  max-w-[1080px] 2xl:max-w-[1440px] m-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
