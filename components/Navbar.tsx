"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { MapPinIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
            <div className='md:flex items-center justify-between bg-white py-4 md:px-2 lg:px:0 px-5'>
                <div className='font-bold text-2xl flex items-center
      text-gray-800 space-x-3 z-[8] h-12 my-auto'>
                    <Link href="/" className=''>
                        <Image
                            src="/img/marios-logo-2.png"
                            width={40}
                            height={40}
                            alt="mario's logo"
                            className='md:w-14 md:h-14' />
                    </Link>
                    <p className='text-lg'>Mario's Wood-Fired Mobile Pizza</p>
                    <div onClick={handleNavClick} className='text-3xl absolute right-5  cursor-pointer md:hidden'>
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


                <div className={`md:flex md:items-center md:pb-0 pb-2 md:border-0 border-t-[#e5e7eb] border-t-2 absolute md:static bg-white z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 md:transition-none transition-all duration-500 ease-in ${navbarOpen ? 'top-20' : 'top-[-490px]'}`}>
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-xl'>
                        <Link href="/" className='text-gray-800 hover:text-gray-400 duration-500'>About</Link>
                    </div>
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-xl'>
                        <Link href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Menu</Link>
                    </div>
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-xl'>
                        <Link href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Pricing</Link>
                    </div>
                    <div className='md:ml-8 md:my-0 my-7 md:text-base text-xl'>
                        <Link href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Contact Us</Link>
                    </div>
                </div>

                {/* <div className=''>
                    <Link href="/">About</Link>
                </div>
                <div className=''>
                    <Link href="/">Menu</Link>
                </div>
                <div className=''>
                    <Link href="/">Pricing</Link>
                </div>
                <div className=''>
                    <Link href="/">Contact Us</Link>
                </div> */}
            </div>
        </div>

        // <nav className="border-b-2">
        //     <div className='flex md:items-center justify-between flex-wrap p-4 2xl:px-0 2xl:mx-auto 2xl:max-w-7xl'>
        //         <div className='flex flex-col'>

        //             <div className='flex flex-row'>
        //                 <div className=" text-white mr-6 items-center">
        //                     <Link href="/">
        //                         <Image
        //                             src="/img/marios-logo-2.png"
        //                             width={40}
        //                             height={40}
        //                             alt="mario's logo"
        //                             className='md:w-14 md:h-14' />
        //                     </Link>
        //                 </div>
        //                 <div className='flex space-x-12 md:hidden' >
        //                     <div className='flex space-x-2' onClick={handleNavClick}>
        //                         {navbarOpen ? 
        //                             <XMarkIcon
        //                                 width={30}
        //                                 height={30}
        //                                 className='cursor-pointer'/>
        //                                 :
        //                             <Bars3Icon
        //                                 width={30}
        //                                 height={30}
        //                                 className='cursor-pointer'/>
        //                         }
        //                     </div>
        //                 </div>

        //             </div>

        //             {/* mobile menu */}
        //             <div className={`items-center flex flex-row flex-grow md:hidden ${navbarOpen ? '' : 'hidden'}`}>
        //                 <div className='flex flex-col items-center space-y-3'>
        //                     <div className=''>
        //                         <Link href="/">About</Link>
        //                     </div>
        //                     <div className=''>
        //                         <Link href="/">Menu</Link>
        //                     </div>
        //                     <div className=''>
        //                         <Link href="/">Pricing</Link>
        //                     </div>
        //                     <div className=''>
        //                         <Link href="/">Contact Us</Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* desktop menu */}
        //         <div className='md:flex space-x-12 hidden'>
        //             <div className='flex items-center space-x-6'>
        //                 <div className=''>
        //                     <Link href="/">About</Link>
        //                 </div>
        //                 <div className=''>
        //                     <Link href="/">Menu</Link>
        //                 </div>
        //                 <div className=''>
        //                     <Link href="/">Pricing</Link>
        //                 </div>
        //                 <div className=''>
        //                     <Link href="/">Contact Us</Link>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </nav>
    )
}

export default Navbar