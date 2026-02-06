import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website B',
  description: 'Independent Next.js application - Website B',
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
