import type { Metadata } from 'next';

import Destinations from '@/components/destinations';

export const metadata: Metadata = {
    title: "Courses",
    description: 'Why drive to the casinos when we can get you there in twice the time and triple the price.',
}

export default function Page() {
  return (
    <>
      <Destinations />
    </>
  );
}
