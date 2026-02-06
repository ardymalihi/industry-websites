import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VIP Transport',
  description: 'Independent Next.js application - VIP Transport',
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
