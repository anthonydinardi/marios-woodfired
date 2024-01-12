import BillboardCard from '@/components/BillboardCard';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image'

export default function Home() {
  const images: string[] = [
    '/img/tent-at-night.jpg',
    '/img/pizza-in-oven.jpg',
    '/img/trays-of-food.jpg'
  ];

  return (
    <main className="space-y-6">
      <Carousel height={"h-[200px] md:h-[550px]"} imagePaths={images} pauseOnHover={false} />

      <BillboardCard
        backgroundColor='bg-[#0F4D05]'
        buttonColor='000000'
        buttonLink='/'
        buttonText='Book Now!'
        textColor='text-[#ffffff]'
        title='Unleash the Flavor with our Mobile Pizza Kitchen!'
        subtitle='Perfect for all occasions, our wood-fired pizza catering is ready to elevate your event to new culinary heights.'
        imagePath='/img/tent-and-trailer.jpg' />

      <BillboardCard
        backgroundColor='bg-[#580606]'
        buttonColor='000000'
        buttonLink='/'
        buttonText='Book Now!'
        textColor='text-[#ffffff]'
        title='900 Degrees. 90 Seconds. Perfection.'
        subtitle='Experience the blazing speed and intense heat of our wood-fired oven. In just 90 seconds, your pizza emerges perfectly cooked with a charred crust and sensational flavors. Discover pizza perfection at its finest.'
        imagePath='/img/pizza-in-oven.jpg'
        imageFirst={true} />
    </main>
  )
}
