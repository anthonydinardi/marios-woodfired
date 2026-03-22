import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "Awards",
}

export default function Page() {
    

    return (
        <div className='sm:w-2/3 text-center md:text-start md:me-5'>

            <div className='flex flex-col justify-center mt-4 mx-4 md:m-0 bg-gray-300 p-5 rounded gap-5'>


                <img src='/img/daily_voice_banner.JPEG' />
                <p className='text-center'><Link className={`border rounded-full px-3.5 py-1 bg-black text-[#ffffff] font-semibold`} href="https://dailyvoice.com/ny/stony-point/best-pizza-in-the-hudson-valley-in-2025-marios-wood-fired-pizza-and-pasta/" target='_blank'>View Article</Link></p>
                <img src='/img/daily_voice_article.JPEG' />

                
            </div>
        </div>
    )
}