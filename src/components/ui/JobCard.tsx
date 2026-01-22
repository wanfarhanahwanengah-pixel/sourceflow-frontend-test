import type { Job } from '../../types';

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(' ');
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconCash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7.5h16v9H4v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 10a2 2 0 0 1-2 2m14-2a2 2 0 0 0 2 2M7 14a2 2 0 0 0-2-2m14 2a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 14.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function JobCard({ job }: { job: Job }) {
  const palette =
    job.variant === 'sun'
      ? {
          card: 'bg-amber-200 text-slate-900',
          badge: 'bg-blue-900 text-white',
          button: 'bg-white text-blue-900 hover:bg-white/90',
          subtle: 'text-slate-900',
        }
      : job.variant === 'ocean'
        ? {
            card: 'bg-blue-900 text-white',
            badge: 'bg-blue-400 text-white',
            button: 'bg-white text-blue-900 hover:bg-white/90',
            subtle: 'text-white',
          }
        : {
            card: 'bg-orange-200 text-slate-900',
            badge: 'bg-blue-900 text-white',
            button: 'bg-white text-blue-900 hover:bg-white/90',
            subtle: 'text-slate-900',
          };

  return (
    <article
      className={classNames(
        palette.card,
        'relative overflow-hidden rounded-2xl p-6 shadow-sm ring-1 ring-black/5 flex flex-col h-full'
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-tight">{job.title}</h3>
        </div>
        <span className={classNames(palette.badge, 'rounded-full px-3 py-1 text-xs font-semibold shrink-0')}>
          {job.company}
        </span>
      </div>

      <div className={classNames(palette.subtle, 'flex flex-wrap items-center gap-4 text-sm mb-4')}>
        <span className="inline-flex items-center gap-2">
          <IconPin className="h-4 w-4" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <IconCash className="h-4 w-4" />
          {job.salary}
        </span>
      </div>

      <p className={classNames(palette.subtle, 'text-sm leading-relaxed font-normal mb-6 flex-grow')}>
        {job.description}
      </p>

      <div className="mt-auto flex flex-col gap-3">
        <a
          href="#job"
          className={classNames(
            palette.button,
            'inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold transition-colors w-full sm:w-auto self-start'
          )}
        >
          View this job
        </a>
        <p className={classNames(palette.subtle, 'text-xs font-medium')}>{job.posted}</p>
      </div>
    </article>
  );
}
