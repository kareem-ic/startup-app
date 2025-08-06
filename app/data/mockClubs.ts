export interface Club {
  id: string;
  name: string;
  sport: string;
  location: string;
  city: string;
  zipCode: string;
  ageRange: string;
  competitiveLevel: 'recreational' | 'travel' | 'elite';
  fees: string;
  contactInfo: string;
}

export const mockClubs: Club[] = [
  {
    id: '1',
    name: 'Elite Soccer Academy',
    sport: 'Soccer',
    location: 'Downtown Sports Complex',
    city: 'New York',
    zipCode: '10001',
    ageRange: '8-14 years',
    competitiveLevel: 'elite',
    fees: '$200/month',
    contactInfo: '(555) 123-4567'
  },
  {
    id: '2',
    name: 'Community Basketball League',
    sport: 'Basketball',
    location: 'Community Center',
    city: 'New York',
    zipCode: '10002',
    ageRange: '10-16 years',
    competitiveLevel: 'recreational',
    fees: '$50/month',
    contactInfo: '(555) 234-5678'
  },
  {
    id: '3',
    name: 'Swim Team Champions',
    sport: 'Swimming',
    location: 'Aquatic Center',
    city: 'Brooklyn',
    zipCode: '11201',
    ageRange: '6-18 years',
    competitiveLevel: 'travel',
    fees: '$150/month',
    contactInfo: '(555) 345-6789'
  },
  {
    id: '4',
    name: 'Little League Baseball',
    sport: 'Baseball',
    location: 'Central Park Fields',
    city: 'New York',
    zipCode: '10003',
    ageRange: '7-12 years',
    competitiveLevel: 'recreational',
    fees: '$75/month',
    contactInfo: '(555) 456-7890'
  }
]; 