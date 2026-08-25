import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Clock,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building,
  HelpCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import { FAQS } from '@/lib/data/faqs';
import { getLocalBusinessSchema } from '@/lib/seo';

export function generateStaticParams() {
  return [
    { id: 'mumbai' },
    { id: 'pune' },
    { id: 'lucknow' }
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const branch = BRANCHES.find((b) => b.id.toLowerCase() === id.toLowerCase());
  if (!branch) return { title: 'Branch Not Found' };

  return {
    title: `Oxygen Concentrator & Machine Service in ${branch.city} | Oxy Breath Services`,
    description: `Specialist oxygen machine and oxygen concentrator service by Oxy Breath Services in ${branch.city}, ${branch.state}. Molecular sieve repacking, compressor rebuilds, and ultrasonic purity testing at ${branch.address}.`,
    keywords: [
      `Oxy Breath Services ${branch.city}`,
      `oxygen concentrator service ${branch.city}`,
      `oxygen machine repair ${branch.city}`,
      `oxygen equipment repair ${branch.city}`,
      `oxygen concentrator repair near me ${branch.city}`,
      `biomedical oxygen service ${branch.city}`
    ]
  };
}

export default async function LocationDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const branch = BRANCHES.find((b) => b.id.toLowerCase() === id.toLowerCase());
  if (!branch) {
    notFound();
  }

  const localFaqs = FAQS.filter(
    (f) => f.category === 'Locations' || f.question.toLowerCase().includes(branch.city.toLowerCase()) || f.answer.toLowerCase().includes(branch.city.toLowerCase())
  );

  const localBusinessJsonLd = getLocalBusinessSchema(branch.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Navbar />

      <main className="flex-grow">
        {/* Location Hero */}
        <section className="bg-gradient-to-b from-slate-900 via-[#0B1F33] to-[#0D243D] text-white py-14 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-[#19C6D9]/40 text-[#19C6D9] text-xs font-bold uppercase tracking-wider">
                <Building className="w-4 h-4" />
                {branch.type} • {branch.state}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Oxygen Concentrator & Machine Service in {branch.city}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialist vendor-independent repair, molecular sieve canister repacking, and calibrated purity testing serving {branch.city} and adjoining regions.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <span className="bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#19C6D9]" />
                  {branch.name}
                </span>
                <span className="bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {branch.hours}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <Link
                  href={`/request-service?branch=${branch.id}&city=${encodeURIComponent(branch.city)}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Service at {branch.city} Branch</span>
                </Link>

                <a
                  href={`tel:+91${branch.primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0B1F33] px-6 py-3.5 rounded-xl font-bold text-sm shadow transition"
                >
                  <Phone className="w-4 h-4 text-[#1677FF]" />
                  <span>Call {branch.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Facility & Address Details */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Details & Coverage (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
                    Facility Details & Coverage
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] mt-1">
                    Serving Patients, Clinics & Hospitals across {branch.city}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {branch.description} Our {branch.city} diagnostic bench is equipped with certified ultrasonic oxygen analyzers, digital PSIG manometers, and air purity testing hoods.
                  </p>
                </div>

                {/* Exact Address Box */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Full Physical Address:
                  </p>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {branch.address}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps / Directions</span>
                    </a>
                  </div>
                </div>

                {/* Key Local Areas Covered */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Key Localities & Service Coverage in {branch.city}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {branch.keyAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-[#1677FF] px-3 py-1 rounded-lg text-xs font-medium border border-blue-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services Available */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Services Provided at this Facility:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {branch.servicesAvailable.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Google Map Embed & Direct Contact (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
                  <div className="p-4 bg-[#0B1F33] text-white">
                    <p className="font-bold text-xs">Branch Workshop Location</p>
                    <p className="text-[11px] text-slate-400">{branch.name}</p>
                  </div>
                  <div className="w-full h-64 bg-slate-200">
                    <iframe
                      title={`${branch.name} Location Map`}
                      src={branch.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5 space-y-3 bg-slate-50 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Direct Telephone:</span>
                      <a href={`tel:+91${branch.primaryPhone}`} className="font-bold text-[#1677FF]">
                        +91 {branch.primaryPhone}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">WhatsApp Support:</span>
                      <a
                        href={`https://wa.me/91${branch.whatsapp}?text=Hello%20Oxygen%20Services%2C%20I%20need%20service%20support%20in%20${branch.city}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-600"
                      >
                        +91 {branch.whatsapp}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Operating Hours:</span>
                      <span className="font-bold text-slate-800">{branch.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-[#0B1F33] text-white text-xs space-y-3">
                  <p className="font-bold text-white text-sm">
                    Drop-off or Arrange Pickup in {branch.city}
                  </p>
                  <p className="text-slate-300">
                    Drop off your unit at our workshop during operating hours, or submit an online request for coordinated pickup.
                  </p>
                  <Link
                    href={`/request-service?city=${branch.city}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full bg-[#1677FF] hover:bg-[#0958D9] text-white py-2.5 rounded-xl font-bold transition"
                  >
                    <span>Start {branch.city} Service Ticket</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        {localFaqs.length > 0 && (
          <section className="py-14 bg-[#F7FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
                  {branch.city} Specific Queries
                </span>
                <h2 className="text-2xl font-bold text-[#0B1F33] mt-1">
                  Frequently Asked Questions in {branch.city}
                </h2>
              </div>

              <div className="space-y-3">
                {localFaqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-700">
                    <p className="font-bold text-slate-900 text-sm mb-1.5">{faq.question}</p>
                    <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
