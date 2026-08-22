import LocationDetailPage, { generateMetadata as baseMetadata } from '@/app/locations/[id]/page';

export function generateMetadata() {
  return baseMetadata({ params: Promise.resolve({ id: 'mumbai' }) });
}

export default function MumbaiServiceAliasPage() {
  return <LocationDetailPage params={Promise.resolve({ id: 'mumbai' })} />;
}
