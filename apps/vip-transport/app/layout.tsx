import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
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
    <html lang="en" className={manrope.variable}>
      <body className={`${manrope.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
