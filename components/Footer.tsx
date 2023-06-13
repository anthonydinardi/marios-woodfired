import React from 'react'
import CollapsableList from './CollapsableList'
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="border-t-2 p-5">
        <div className='lg:px-10 2xl:px-0 2xl:mx-auto 2xl:max-w-7xl'>
            <div className="grid grid-cols-1 py-5 border-b-2 lg:grid-cols-5 lg:gap-8">
                <CollapsableList title='About Us'>
                        <li>Our Company</li>
                        <li>Our Coffee</li>
                        <li>Stories and News</li>
                        <li>Starbucks Archive</li>
                        <li>Investor Relations</li>
                        <li>Customer Service</li>
                </CollapsableList>
                
                <CollapsableList title='Careers'>
                    <li>Culture and Values</li>
                    <li>Inclusion, Diversity, and Equity</li>
                    <li>College Achievement Plan</li>
                    <li>Alumni Community</li>
                    <li>U.S. Careers</li>
                    <li>International Careers</li>
                </CollapsableList>

                <CollapsableList title='Social Impact'>
                    <li>People</li>
                    <li>Planet</li>
                    <li>Environmental and Social Impact Reporting</li>
                </CollapsableList>

                <CollapsableList title='For Business Partners'>
                    <li>Landlord Support Center</li>
                    <li>Suppliers</li>
                    <li>Corporate Gift Card Sales</li>
                    <li>Office and Foodservice Coffee</li>
                </CollapsableList>

                <CollapsableList title='Order and Pickup'>
                    <li>Order on the App</li>
                    <li>Order on the Web</li>
                    <li>Delivery</li>
                    <li>Order and Pickup Options</li>
                    <li>Explore and Find Coffee for Home</li>
                </CollapsableList>
            </div>
            <div className="py-9 space-y-7">
                <div className='space-x-4'>
                    <SocialIcon bgColor='black' style={{ height: 35, width: 35 }} network='spotify'/>
                    <SocialIcon bgColor='black' style={{ height: 35, width: 35 }} network='facebook'></SocialIcon>
                    <SocialIcon bgColor='black' style={{ height: 35, width: 35 }} network='pinterest'></SocialIcon>
                    <SocialIcon bgColor='black' style={{ height: 35, width: 35 }} network='instagram'></SocialIcon>
                    <SocialIcon bgColor='black' style={{ height: 35, width: 35 }} network='youtube'></SocialIcon>
                    <SocialIcon bgColor='black' style={{ height: 35, width: 35 }} network='twitter'></SocialIcon>
                </div>
                <div className='space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:space-x-5'>
                    <div>Privacy Notice</div>
                    <div className='hidden lg:flex'>|</div>
                    <div>Terms of Use</div>
                    <div className='hidden lg:flex'>|</div>
                    <div>Do Not Share My Personal Information</div>
                    <div className='hidden lg:flex'>|</div>
                    <div>CA Supply Chain Act</div>
                    <div className='hidden lg:flex'>|</div>
                    <div>Cookie Preference</div>
                </div>
                <p className='text-sm text-gray-500'>© 2023 Starbucks Coffee Company. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer