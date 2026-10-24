import Link from "next/link";
import { notFound } from "next/navigation";
import { records } from "../../../lib/records";
export function generateStaticParams(){return records.map(record=>({slug:record.slug}));}
export default async function RecordDetailPage({params}){
 const {slug}=await params; const record=records.find(item=>item.slug===slug); if(!record) notFound();
 return <main className="section container detail-layout"><div className="detail-art"><img src={record.cover} alt={`Cover of ${record.title}`}/></div><section><p className="eyebrow">GROOVEHOUSE COLLECTION</p><h1>{record.title}</h1><h2>{record.artist}</h2><p className="body-copy">{record.description}</p><p className="detail-meta">{record.genre} · {record.year}</p><Link className="button button-dark" href="/records">← Back to records</Link></section></main>;
}
