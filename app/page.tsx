import type { Metadata } from 'next';

import AboutCard from '@/components/about';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Destinations from '@/components/destinations';
import Gallery from '@/components/gallery';
import Story from '@/components/story';
import Subscribe from '@/components/subscribe';

export const metadata: Metadata = {
  description: 'Why wait to find yourself disappointed by a real airline? Avoid the hassle with a fake one. We offer less, while you pay more!',
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <Subscribe />
      <Testimonials />
      <Destinations />
      <Gallery />
      <Story />
    </>
  )
}
