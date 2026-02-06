import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EliteRide - Premium VIP Transportation Services',
  description: 'Experience luxury travel with EliteRide. Premium fleet, professional chauffeurs, and unmatched service for airport transfers, corporate events, and special occasions.',
  keywords: 'VIP transportation, luxury car service, airport transfers, corporate transportation, premium chauffeur service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
