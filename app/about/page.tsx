import type { Metadata } from 'next';

import AboutCard from '@/components/about';

export const metadata: Metadata = {
    title: "About Us",
    description: 'We may be horrible at running an airline. However, we are a team of very knowledgeable and experienced aircraft mechanics. Our purpose is to promote aviation maintenance as a career. Point you in the right direction to get started. Help you obtain your airframe and powerplant license.',
}

export default function Page() {
  return (
    <>
      <AboutCard />
    </>
  );
}
