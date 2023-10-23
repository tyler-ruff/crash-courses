import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { brand, config } from '@/config/site';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: config.name
  },
  description: config.description,
  applicationName: config.name,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
  keywords: ['crash', 'courses', 'flight', 'school', 'aviation'],
  publisher: brand.company,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'}
    ],
    shortcut: {
      url: '/icons/mstile-150x150.png',
      sizes: '150x150',
      type: 'image/png'
    },
    apple: [
      { url: '/icons/apple-touch-icon.png', type: 'image/png' }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#992323"
      },
      {
        rel: "shortcut icon",
        url: "/favicon.ico"
      }
    ]
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" data-theme="crash">
      <body className={inter.className}>
        <header id="header">
          <Header />
        </header>
        <main role="main" id="content">
          {children}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
