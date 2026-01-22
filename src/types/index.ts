export type NavLink = { label: string; href: string };

export type Job = {
  company: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  posted: string;
  variant: 'sun' | 'ocean' | 'peach';
};
