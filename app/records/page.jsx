'use client';
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import RecordCard from "../../components/RecordCard";
import { records } from "../../lib/records";
export default function RecordsPage(){
 const [search,setSearch]=useState(""); const [genre,setGenre]=useState("All genres");
 const genres=["All genres",...new Set(records.map(r=>r.genre))];
 const filtered=records.filter(r=>`${r.title} ${r.artist} ${r.genre}`.toLowerCase().includes(search.toLowerCase())&&(genre==="All genres"||r.genre===genre));
 return <main><section className="page-hero"><div className="container"><p className="eyebrow">THE COLLECTION</p><h1>Records that made<br/><em>history.</em></h1><p>Legendary artists. Timeless albums. Your next favorite sound is waiting.</p></div></section><section className="section container"><SectionTitle eyebrow="BROWSE THE CRATE" title="The record collection" description="Search for an artist or album, or filter by genre."/><div className="records-toolbar"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search artist or album..." aria-label="Search artist or album"/><select value={genre} onChange={e=>setGenre(e.target.value)} aria-label="Filter genre">{genres.map(g=><option key={g}>{g}</option>)}</select></div><p className="results-count">{filtered.length} records found</p><div className="record-grid">{filtered.map(r=><RecordCard key={r.slug} record={r}/>)}</div></section></main>;
}
