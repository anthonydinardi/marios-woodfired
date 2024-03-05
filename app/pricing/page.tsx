import Carousel from '@/components/Carousel/Carousel';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Pricing",
}

export default function Page() {
    

    const images: string[] = [
        '/img/pizza/pizza_pepperoni.jpg',
        '/img/pizza/pizza_rabe_sausage.jpg',
        '/img/pizza/pizza_white.jpg'
    ];

    return (
        <div className='text-center md:text-start md:grid md:grid-cols-2 md:gap-4 md:me-5'>
            <Carousel height={"h-[200px] md:h-[400px]"} imagePaths={images} pauseOnHover={false} />

            <div className='mt-4 mx-4 md:m-0'>
                <h1 className="text-3xl font-bold mb-8">Wood-Fired Pizza Extravaganza for 50+ Guests - Starting at $1,800 + Tax</h1>

                <p className="mb-4">
                    Embark on a culinary journey with our mobile wood-fired pizza oven service, perfect for gatherings of 50 guests or more.
                </p>
                <p className="mb-4">
                    For a base fee of $1,800 + tax, enjoy an all-you-can-eat pizza feast for 2 1/2 hours. This package includes four signature pizzas
                    (Margherita, Pepperoni, Four Cheese White, and your choice from the menu).
                </p>
                <p className="mb-4">
                    If you don&apos;t see a pizza you like, just let us know, and we can pretty much make anything!
                </p>
                <p className="mb-4">
                    Accompanied by refreshing salad for everyone.
                </p>

                <p><b>Additional guests beyond 50 are welcome at an extra charge of $20.00 per person.</b></p>
                <br />

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Create Your Perfect Pizza - Choose Your 4th Pizza (Included in the Package):</h2>
                    <ul className="list-none">
                        <li>Broccoli Rabe and Sausage</li>
                        <li>Arugula and Prosciutto</li>
                        <li>Fresh Veggie Pie</li>
                        <li>Spicy Soppressata</li>
                        <li>Sausage and Peppers</li>
                        <li>Chicken Parm</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Savor More Wood-Fired Delicacies with Our Tray Options:</h2>
                    <ul className="list-none">
                        <li>Wood-Fired Wings: $85.00</li>
                        <li>Sausage & Peppers: $75.00</li>
                        <li>Meatballs & Sausage in Tomato Sauce: $75.00</li>
                        <li>Stuffed Shells: $75.00</li>
                        <li>Eggplant Parm: $75.00</li>
                        <li>Chicken Parm: $95.00</li>
                        <li>Cheese Ravioli: $75.00</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Indulge in Dessert Delights - $10.00 per person:</h2>
                    <ul className="list-none">
                        <li>Freshly Stuffed Cannoli</li>
                        <li>Nutella Pizza with Fresh Strawberries and Bananas</li>
                        <li>Espresso also available</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}