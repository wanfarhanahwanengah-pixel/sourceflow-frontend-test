export default function LogoRow() {
  const logos = [
    { name: 'Microsoft', src: '/microsoft.png', alt: 'Microsoft' },
    { name: 'Oracle', src: '/Oracle.png', alt: 'Oracle' },
    { name: 'Atlassian', src: '/atlassian.png', alt: 'Atlassian' },
    { name: 'Cloudflare', src: '/cloudflare.png', alt: 'Cloudflare' },
    { name: 'VMware', src: '/vmware.png', alt: 'VMware' },
  ];
  return (
    <div className="overflow-x-auto xl:overflow-x-visible -mx-4 px-4 xl:mx-0 xl:px-0 scrollbar-hide">
      <ul className="flex flex-nowrap items-center justify-center gap-x-6 xl:gap-x-12 min-w-max xl:min-w-0">
        {logos.map((logo) => (
          <li key={logo.name} className="flex items-center justify-center shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain opacity-100 hover:opacity-90 transition-opacity xl:h-12 2xl:h-14"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
