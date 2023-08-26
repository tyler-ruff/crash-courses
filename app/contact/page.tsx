import type { Metadata } from 'next';
import Contact from '@/components/contact';

export const metadata: Metadata = {
    title: "Contact Us",
    description: 'Get in touch with us.',
}

export default function Page() {
  return (
    <>
      <Contact />
    </>
  );
}