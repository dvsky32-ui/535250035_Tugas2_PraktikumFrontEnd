import Link from "next/link";
export default function RecordCard({ record }) {
  return <Link href={`/records/${record.slug}`} className="record-card" aria-label={`View ${record.title} by ${record.artist}`}>
    <div className="record-art"><span className="record-tag">{record.tag}</span><div className="vinyl-disc"><span className="vinyl-label"/></div><img className="record-cover" src={record.cover} alt={`Cover of ${record.title}`} loading="lazy"/><span className="record-year">{record.year}</span></div>
    <div className="record-meta"><div><h3>{record.title}</h3><p>{record.artist}</p></div><span className="record-arrow">↗</span></div>
    <div className="record-submeta"><span>{record.genre}</span><span>Explore album</span></div>
  </Link>;
}
