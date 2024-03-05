"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { MapPinIcon, Bars3Icon, XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import logo from '../public/assets/img/logo.jpg'

//HOW TO GET ACTIVE LINKS

// {/* Get the current route */}
// const router = useRouter();
// const currentRoute = router.pathname;

// {/* Render Link */}
// <Link href="/some-path" 
//      className={currentRoute === "/some-path" 
//        ? "active-class-name" 
//        : "non-active-class-name"}>
//          Some Link
// </Link>

interface Props {
    links?: [name: string, link: string];
}

function Navbar({ links }: Props) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    function handleNavClick() {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <div className='w-full h-20 md:h-full top-0 left-0 z-10 max-w-[1080px] 2xl:max-w-[1440px] m-auto'>
            <div className='md:flex items-center justify-between py-4 md:px-2 lg:px:0 px-4'>
                <div className='font-bold text-2xl flex items-center
                    text-gray-800 space-x-3 z-[8] h-12 my-auto'>
                    <Link href="/" className=''>
                        <Image
                            src="/img/marios-logo.svg"
                            width={55}
                            height={55}
                            alt="mario's logo"
                            className='md:w-14' />
                    </Link>
                    <div className='flex justify-between w-full'>
                        <p className='text-[16px]'>Mario&apos;s Wood-Fired Mobile Pizza</p>
                        <div onClick={handleNavClick} className='text-3xl cursor-pointer md:hidden flex items-center'>
                            {navbarOpen ?
                                <XMarkIcon
                                    width={30}
                                    height={30}
                                    className='cursor-pointer' />
                                :
                                <Bars3Icon
                                    width={30}
                                    height={30}
                                    className='cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>


                <div className={`md:flex md:items-center md:pb-0 pb-2 md:border-0 border-t-[#e5e7eb] border-t-2 absolute md:static bg-slate-100 z-[1] left-0 w-full md:w-auto md:px-0 px-9 md:transition-none transition-all duration-500 ease-in ${navbarOpen ? 'top-20' : 'top-[-490px]'}`}>
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-lg border-b-slate-100 border-b-2 md:border-b-0 flex justify-between items-center'>
                        <Link href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link>
                        <ChevronRightIcon className='h-6 w-6 text-gray-800 md:hidden' />
                    </div>
                    {/* <div className='md:ml-8 md:my-0 my-7 md:text-base text-lg border-b-slate-100 border-b-2 md:border-b-0 flex justify-between items-center'>
                        <Link href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Menu</Link>
                        <ChevronRightIcon className='h-6 w-6 text-gray-800 md:hidden' />
                    </div> */}
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-lg border-b-slate-100 border-b-2 md:border-b-0 flex justify-between items-center'>
                        <Link href="/pricing" className='text-gray-800 hover:text-gray-400 duration-500'>Pricing</Link>
                        <ChevronRightIcon className='h-6 w-6 text-gray-800 md:hidden' />
                    </div>
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-lg border-b-slate-100 border-b-2 md:border-b-0 flex justify-between items-center'>
                        <Link href="/contact-us" className='text-gray-800 hover:text-gray-400 duration-500'>Contact Us</Link>
                        <ChevronRightIcon className='h-6 w-6 text-gray-800 md:hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar