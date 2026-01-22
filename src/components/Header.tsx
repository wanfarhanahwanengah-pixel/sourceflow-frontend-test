import { navLinks } from '../constants';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 xl:px-6 2xl:px-12">
        <div className="flex h-16 items-center justify-between gap-2 xl:gap-4">
          {/* Mobile menu button */}
          <button
            type="button"
            className="xl:hidden p-2 text-blue-900 hover:text-blue-700"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Left-side: Company name */}
          <a href="#" className="hidden xl:block font-semibold text-blue-900 text-base xl:text-lg -ml-8 xl:-ml-12 truncate">
            Software Recruitment co.
          </a>

          {/* Middle: Navigation menu - takes remaining space */}
          <nav aria-label="Primary" className="hidden xl:block flex-1 flex justify-start pl-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-gray-900 tracking-wide">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gray-700 inline-flex items-center gap-1">
                    {l.label}
                    <svg className="h-3 w-3 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-side: Buttons */}
          <div className="flex items-center gap-1 xl:gap-2 ml-auto -mr-2 xl:-mr-4">
            <a
              href="#upload"
              className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-2 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-gray-700 hover:bg-yellow-200 transition-colors whitespace-nowrap"
            >
              Upload CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-300 px-2 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-gray-900 hover:bg-orange-200 transition-colors whitespace-nowrap"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
