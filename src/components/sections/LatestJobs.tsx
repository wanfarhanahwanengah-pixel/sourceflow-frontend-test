import JobCard from '../ui/JobCard';
import { jobs } from '../../constants';

export default function LatestJobs() {
  return (
    <section className="bg-sky-100/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">Latest Jobs</h2>
          <a href="#jobs" className="text-sm font-semibold text-blue-950 hover:underline">
            View more jobs
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3 items-stretch">
          {jobs.map((job) => (
            <JobCard key={job.company + job.variant} job={job} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-black/5 hover:bg-slate-50"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-800"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
