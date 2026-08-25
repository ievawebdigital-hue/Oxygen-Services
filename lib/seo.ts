import { BRANCHES, COMPANY_CONTACT } from './data/branches';
import { SERVICES } from './data/services';
import { FAQS } from './data/faqs';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://oxybreathservices.in/#organization',
    name: 'Oxy Breath Services',
    alternateName: 'Oxy Breath Services India',
    description: 'Specialist vendor-independent technical service, diagnosis, repair, and maintenance for medical oxygen machines, oxygen concentrators, and portable oxygen equipment across Mumbai, Pune, and Lucknow.',
    url: 'https://oxybreathservices.in',
    telephone: '+919820370015',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+919820370015',
        contactType: 'technical support',
        areaServed: ['IN-MH', 'IN-UP', 'IN'],
        availableLanguage: ['English', 'Hindi', 'Marathi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+919819459421',
        contactType: 'emergency service hotline',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 11 Park, Gokul Village, Mira Road East',
      addressLocality: 'Mira Bhayandar, Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '401107',
      addressCountry: 'IN'
    },
    department: BRANCHES.map((b) => ({
      '@type': 'LocalBusiness',
      name: `Oxy Breath Services - ${b.name}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: b.address,
        addressLocality: b.city,
        addressRegion: b.state,
        postalCode: b.pincode,
        addressCountry: 'IN'
      },
      telephone: `+91${b.primaryPhone}`
    }))
  };
}

export function getBranchLocalBusinessSchema(branchId: 'mumbai' | 'pune' | 'lucknow') {
  const branch = BRANCHES.find((b) => b.id === branchId) || BRANCHES[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Oxy Breath Services - ${branch.name}`,
    description: `Specialist medical oxygen machine and oxygen concentrator service, diagnostic repair, and technician support in ${branch.city}.`,
    url: `https://oxybreathservices.in/locations/${branch.id}`,
    telephone: `+91${branch.primaryPhone}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressRegion: branch.state,
      postalCode: branch.pincode,
      addressCountry: 'IN'
    },
    areaServed: branch.keyAreas,
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    ]
  };
}

export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'MedicalBusiness',
        name: 'Oxy Breath Services'
      },
      areaServed: ['Mumbai', 'Pune', 'Lucknow', 'India'],
      serviceType: 'Medical Equipment Repair'
    }))
  };
}

export function getFaqSchema(faqs = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function getLocalBusinessSchema(branchId: 'mumbai' | 'pune' | 'lucknow') {
  return getBranchLocalBusinessSchema(branchId);
}

export function getArticleSchema(article: {
  title: string;
  summary: string;
  publishedDate: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    url: `https://oxybreathservices.in/resources/${article.slug}`,
    publisher: {
      '@type': 'MedicalBusiness',
      name: 'Oxy Breath Services',
      url: 'https://oxybreathservices.in'
    },
    about: {
      '@type': 'MedicalDevice',
      name: 'Medical Oxygen Concentrator'
    }
  };
}
