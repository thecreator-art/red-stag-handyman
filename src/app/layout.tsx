import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap', weight: ['400', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Handyman Services Los Angeles | Red Stag Handyman',
  description: 'Professional handyman services across 29 cities in Los Angeles County. Licensed & insured. Same-day drywall repair, door installs, fixture mounting, caulking & more. Call (323) 555-1234 for a free estimate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${montserrat.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
