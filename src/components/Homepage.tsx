import Header from './Header';
import Footer from './Footer';
import Hero from './sections/Hero';
import CompanyLogos from './sections/CompanyLogos';
import LatestJobs from './sections/LatestJobs';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <CompanyLogos />
        <LatestJobs />
      </main>

      <Footer />
    </div>
  );
}
