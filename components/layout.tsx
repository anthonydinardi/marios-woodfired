import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col justify-center py-2 mt-6">
                <Head>
                    <title>Starbucks 2</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex w-full flex-1 flex-col items-center">
                    {children}
                </main>


            </div>
            <Footer />
        </>
    )
}