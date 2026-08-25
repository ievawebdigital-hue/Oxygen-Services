import { Metadata } from 'next';
import AboutPage from '../about/page';

export const metadata: Metadata = {
  title: 'About Us | Oxy Breath Services',
  description: 'Specialist oxygen concentrator repair, molecular sieve repours, compressor rebuilding, and calibrated purity testing in Mumbai, Pune, and Lucknow.',
  alternates: {
    canonical: 'https://oxybreathservices.in/about'
  }
};

export default function AboutUsPage() {
  return <AboutPage />;
}
