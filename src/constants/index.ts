import type { NavLink, Job } from '../types';

export const navLinks: NavLink[] = [
  { label: 'For jobseekers', href: '#jobseekers' },
  { label: 'For clients', href: '#clients' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Resources', href: '#resources' },
];

export const jobs: Job[] = [
  {
    company: 'Python',
    title: 'Software Engineer',
    location: 'London',
    salary: '£65,000',
    description:
      'We are looking for an experienced Software Engineer to join our dynamic team. You will work on developing innovative solutions and collaborating with cross-functional teams.',
    posted: 'Posted on 23/01/2026',
    variant: 'sun',
  },
  {
    company: 'Python',
    title: 'Software Engineer',
    location: 'London',
    salary: '£65,000',
    description:
      'We are looking for an experienced Software Engineer to join our dynamic team. You will work on developing innovative solutions and collaborating with cross-functional teams.',
    posted: 'Posted on 23/01/2026',
    variant: 'ocean',
  },
  {
    company: 'Python',
    title: 'Software Engineer',
    location: 'London',
    salary: '£65,000',
    description:
      'We are looking for an experienced Software Engineer to join our dynamic team. You will work on developing innovative solutions and collaborating with cross-functional teams.',
    posted: 'Posted on 23/01/2026',
    variant: 'peach',
  },
];
