import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import WhatsAppLiveChat from '@/components/layout/WhatsAppLiveChat';
import AboutPageContent from '@/components/about/AboutPageContent';
import { getOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us | Oxy Breath Services - Oxygen Concentrator Repair & Diagnostics',
  description: 'Learn about Oxy Breath Services: India’s specialist biomedical engineering team for oxygen concentrator repair, molecular sieve repours, compressor rebuilding, and calibrated purity testing across Mumbai, Pune, and Lucknow.',
  keywords: [
    'About Oxy Breath Services',
    'oxygen concentrator repair company',
    'biomedical engineers Mumbai',
    'oxygen machine repair Pune',
    'oxygen concentrator servicing Lucknow',
    'sieve bed repacking specialist India'
  ],
  alternates: {
    canonical: 'https://oxybreathservices.in/about'
  },
  openGraph: {
    title: 'About Oxy Breath Services | Specialist Oxygen Concentrator Repair',
    description: 'Biomedical engineering diagnostic workshops in Mumbai, Pune, and Lucknow. Guaranteed 93%-96% oxygen purity restoration.',
    url: 'https://oxybreathservices.in/about',
    siteName: 'Oxy Breath Services',
    locale: 'en_IN',
    type: 'website'
  }
};

export default function AboutPage() {
  const orgSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <AboutPageContent />
        </main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppLiveChat />
      </div>
    </>
  );
}
