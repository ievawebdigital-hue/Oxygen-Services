import LocationDetailPage, { generateMetadata as baseMetadata } from '@/app/locations/[id]/page';

export function generateMetadata() {
  return baseMetadata({ params: Promise.resolve({ id: 'lucknow' }) });
}

export default function LucknowServiceAliasPage() {
  return <LocationDetailPage params={Promise.resolve({ id: 'lucknow' })} />;
}
