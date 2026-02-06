import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website A',
  description: 'Independent Next.js application - Website A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
