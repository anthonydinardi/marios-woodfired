import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    imagePath: string,
    title: string,
    subtitle?: string,
    buttonText: string,
    backgroundColor: string,
    textColor: string,
    buttonColor: string,
    buttonLink: string,
    imageFirst?: boolean
}

function BillboardCard({ imagePath, title, subtitle, buttonText, backgroundColor, textColor, buttonColor, buttonLink, imageFirst }: Props) {
    return (
        <div className={`${backgroundColor} flex flex-col-reverse max-w-[1440px] mx-auto ${imageFirst ? "md:flex-row-reverse": "md:flex-row"} `}>
            <div className={`text-center ${textColor} my-auto px-5 py-8 space-y-6 md:w-1/2`}>
                <p className="text-2xl font-semibold">{title}</p>
                <p className="text-xl font-normal">{subtitle}</p>
                <p><Link className={`border ${buttonColor} rounded-full px-3.5 py-1 font-semibold`} href={`${buttonLink}`}>{buttonText}</Link></p>
            </div>
            <Image alt='billboard-image' src={imagePath}
                className='object-contain md:w-1/2 md:' />
        </div>
    )
}

export default BillboardCard