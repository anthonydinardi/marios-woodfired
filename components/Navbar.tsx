import Image from 'next/image'
import React from 'react'
import { MapPinIcon, Bars3Icon } from "@heroicons/react/24/solid";
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

function Navbar() {
    return (
        <nav className="border-b-2">
            <div className='flex items-center justify-between flex-wrap p-4 2xl:px-0 2xl:mx-auto 2xl:max-w-7xl'>
                <div className=" text-white mr-6 items-center">
                    <Link href="/">
                        <Image
                            src="/img/marios-logo-2.png"
                            width={40}
                            height={40}
                            alt="mario's logo"
                            className='md:w-14 md:h-14'/>
                    </Link>
                </div>
                <div className="md:flex items-center flex-grow hidden">
                    {/* <div className='flex items-center space-x-6'>
                        <div className='font-bold'>
                            <Link href="/menu">MENU</Link>
                        </div>
                        <div className='font-bold'>
                            <Link href="/">REWARDS</Link>
                        </div>
                        <div className='font-bold'>
                            <Link href="/">GIFT CARDS</Link>
                        </div>
                        <div className='font-bold'>
                            <Link href="/">MORE</Link>
                        </div>
                    </div> */}
                </div>
                <div className='md:flex space-x-12 hidden'>
                    <div className='flex items-center space-x-6'>
                        <div className=''>
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
                        </div>
                    </div>
                </div>
                <div className='flex space-x-12 md:hidden'>
                    <div className='flex items-center space-x-2'>
                        <Bars3Icon
                            width={30}
                            height={30} />
                    </div>
                </div>
            </div>
        </nav>
        // <div className='grid grid-cols-7 px-6 py-2 border-b-2'>
        //     <div className='flex col-span-1'>
        //         <Image 
        //             src="https://www.freepnglogos.com/uploads/starbucks-logo-png-25.png"
        //             width={50}
        //             height={50}
        //             alt="Starbucks logo" />
        //     </div>
        //     <div className='col-span-6 grid grid-cols-7'>
        //         <div className='flex col-span-3 items-center space-x-6'>
        //             <div>
        //             </div>
        //             <div className='font-bold'>
        //                 <Link href="/">MENU</Link>
        //             </div>
        //             <div className='font-bold'>
        //                 <Link href="/">REWARDS</Link>
        //             </div>
        //             <div className='font-bold'>
        //                 <Link href="/">GIFT CARDS</Link>
        //             </div>
        //         </div>
        //         <div className='flex col-span-3 space-x-12 justify-end'>
        //             <div className='flex items-center space-x-2'>
        //                 <MapPinIcon 
        //                     width={20}
        //                     height={20} />
        //                 <span className='font-semibold'>Find a store</span>
        //             </div>
        //             <div className='flex items-center space-x-4'>
        //                 <button className='border border-black rounded-full px-3.5 py-1 font-semibold'>Sign in</button>
        //                 <button className='bg-black text-white rounded-full px-3.5 py-1 font-semibold'>Join now</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar