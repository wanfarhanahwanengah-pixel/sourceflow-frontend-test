export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-900 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-orange-400 blur-[1px]" />
        <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-yellow-400 blur-[1px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm text-white/80 tracking-wider">Software Recruitment Specialists</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-5xl leading-tight">
              Elevate your career
            </h1>

            <form className="mt-7" action="#" method="get" aria-label="Job search">
              <div className="flex w-full max-w-md items-stretch overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
                <label className="sr-only" htmlFor="q">
                  Search jobs
                </label>
                <input
                  id="q"
                  name="q"
                  placeholder="e.g. networking"
                  className="w-full bg-transparent px-5 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  type="search"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-yellow-300 px-5 text-sm font-semibold text-gray-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 transition-colors"
                >
                  Search jobs
                </button>
              </div>
            </form>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-3xl bg-white/10 p-2 ring-1 ring-white/15">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/hero-woman.jpg"
                  alt="Professional woman with laptop"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
