export function GoogleMapEmbed({ query, title }: { query: string; title: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-border bg-secondary">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
}
