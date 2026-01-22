import LogoRow from '../ui/LogoRow';

export default function CompanyLogos() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500">Who we work with</p>
        <div className="mt-6">
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
