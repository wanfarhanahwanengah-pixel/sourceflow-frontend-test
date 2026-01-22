export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-white/80">Software Recruitment co.</p>
            <div className="mt-4 flex items-center gap-4 text-white">
              <a className="hover:text-white/80 transition-colors" href="#linkedin" aria-label="LinkedIn">
                <span className="text-lg font-bold">in</span>
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#facebook" aria-label="Facebook">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="white" />
                  <path d="M13.5 8.5h-2v-2c0-.6.4-1 1-1h1v-2h-2c-1.7 0-3 1.3-3 3v2H7.5v3h2v7h3v-7h2l.5-3h-2.5v-2z" fill="#1A438F" />
                </svg>
              </a>
              <a className="hover:text-white/80 transition-colors" href="#instagram" aria-label="Instagram">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a className="hover:text-white/80 transition-colors" href="#twitter" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="#homepage">
                  Homepage
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#jobseekers">
                  For jobseekers
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#clients">
                  For clients
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#sectors">
                  Our Sectors
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#resources">
                  Resources
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Sectors</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="#software">
                  Software engineering
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#devops">
                  DevOps
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#cloud">
                  Cloud
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#infra">
                  Infrastructure
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#testing">
                  Testing
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#security">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="#service-1">
                  Nav item
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#service-2">
                  Nav item
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#service-3">
                  Nav item
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#service-4">
                  Nav item
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#service-5">
                  Nav item
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/70">
          © {new Date().getFullYear()} SourceFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
