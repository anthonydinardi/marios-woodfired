import BillboardCard from '@/components/BillboardCard';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image'

export default function Home() {
  const images: string[] = [
    '/img/pizza-in-oven.jpg',
    '/img/tent-at-night.jpg',
    '/img/pizza/pizza-whiteonion.jpeg',
    '/img/wings.jpeg',
    '/img/pizza/pizza-roni-closeup.jpeg'
  ];

  return (
    <main className="space-y-6">
      <Carousel height={"h-[200px] md:h-[550px]"} imagePaths={images} pauseOnHover={false} />

      <BillboardCard
        backgroundColor='bg-[#0F4D05]'
        buttonColor='000000'
        buttonLink='/contact-us'
        buttonText='Book Now!'
        textColor='text-[#ffffff]'
        title='Neapolitan pizza expertly crafted in your backyard'
        subtitle='Perfect for all occasions, our wood-fired pizza catering is ready to elevate your event to new culinary heights.'
        imagePath='/img/tent-and-trailer.jpg' />

      <BillboardCard
        backgroundColor='bg-[#580606]'
        buttonColor='000000'
        buttonLink='/contact-us'
        buttonText='Book Now!'
        textColor='text-[#ffffff]'
        title='900 Degrees. 90 Seconds. Perfection.'
        subtitle='Experience the blazing speed and intense heat of our wood-fired oven. In just 90 seconds, your pizza emerges perfectly cooked with a charred crust and sensational flavors. Discover pizza perfection at its finest.'
        imagePath='/img/pizza-in-oven.jpg'
        imageFirst={true} />

      <BillboardCard
        backgroundColor='bg-[#0F4D05]'
        buttonColor='000000'
        buttonLink='/contact-us'
        buttonText='Book Now!'
        textColor='text-[#ffffff]'
        title='Serving the Hudson Valley and Connecticut'
        subtitle='Based out of Mahopac, NY, we bring our authentic wood-fired pizza experience to homes and events across the Hudson Valley and select areas of Connecticut.'
        imagePath='/img/tent-at-night.jpg'
        imageFirst={false} />
    </main>
  )
}
