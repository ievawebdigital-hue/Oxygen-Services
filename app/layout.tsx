import type {Metadata} from 'next';
import './globals.css'; // Global styles
import WhatsAppLiveChat from '@/components/layout/WhatsAppLiveChat';

export const metadata: Metadata = {
  title: 'Oxy Breath Services | Medical Oxygen Equipment Repair & Service',
  description: 'Specialist oxygen concentrator servicing, sieve bed repacking, compressor repairs, and calibrated purity testing in Mumbai, Pune, and Lucknow.',
  openGraph: {
    title: 'Oxy Breath Services | Medical Oxygen Equipment Repair & Service',
    description: 'Specialist oxygen concentrator servicing, sieve bed repacking, compressor repairs, and calibrated purity testing in Mumbai, Pune, and Lucknow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxy Breath Services | Medical Oxygen Equipment Repair & Service',
    description: 'Specialist oxygen concentrator servicing, sieve bed repacking, compressor repairs, and calibrated purity testing in Mumbai, Pune, and Lucknow.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <WhatsAppLiveChat />
      </body>
    </html>
  );
}
