// YouTubeEmbed — 16:9 반응형. lazy 로드.

export default function YouTubeEmbed({ id, title }) {
  if (!id) return null;
  return (
    <div className="relative w-full bg-ink-900 rounded-sm overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
        title={title || 'YouTube video'}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
