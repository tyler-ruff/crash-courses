import type { Metadata } from 'next';

import AboutCard from '@/components/about';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Destinations from '@/components/destinations';
import Gallery from '@/components/gallery';
import Story from '@/components/story';
import Subscribe from '@/components/subscribe';
import { IActionButton } from '@/components/hero/data';
import { social } from '@/config/site';
import Book from '@/components/book';

export const metadata: Metadata = {
  description: 'Why wait to find yourself disappointed by a real airline? Avoid the hassle with a fake one. We offer less, while you pay more!',
}

export default function Home() {
  return (
    <>
      <Hero 
        title="Book your course today so you can crash tomorrow" 
        body="Why wait to find yourself disappointed by a real airline? Avoid the hassle with a fake one. We offer less, while you pay more!"
        action={{
          label: "Start A Course",
          url: social.youtube || ``,
          target: "youtube"
        } as IActionButton }
      />
      <Book />
      <AboutCard onHome={true} />
      <Subscribe />
      <Testimonials />
      <Destinations />
      <Gallery />
      <Story />
    </>
  )
}
