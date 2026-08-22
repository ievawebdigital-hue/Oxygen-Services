import LocationDetailPage, { generateMetadata as baseMetadata } from '@/app/locations/[id]/page';

export function generateMetadata() {
  return baseMetadata({ params: Promise.resolve({ id: 'pune' }) });
}

export default function PuneServiceAliasPage() {
  return <LocationDetailPage params={Promise.resolve({ id: 'pune' })} />;
}
