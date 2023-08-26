import type { Metadata } from 'next';

import Gallery from '@/components/gallery';

export const metadata: Metadata = {
    title: "Gallery",
    description: 'Recent Aviation Events',
}

export default function Page() {
  return (
    <>
      <Gallery />
    </>
  );
}