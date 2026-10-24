import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
export default function HomePage() {
 return <main>
  <section className="hero"><div className="container hero-content"><p className="eyebrow">INDEPENDENT RECORD STORE · EST. 1998</p><h1>Find your next<br/><em>favorite sound.</em></h1><p className="hero-copy">A home for timeless records, legendary artists, and the joy of listening from beginning to end.</p><div className="hero-actions"><Link className="button button-light" href="/records">Explore records ↗</Link><Link className="text-link" href="/about">Our story</Link></div><p className="hero-note">◉ Curated with love. Played forever.</p></div></section>
  <section className="section container"><SectionTitle eyebrow="THE GROOVEHOUSE FEEL" title="More than a record store." description="Discover timeless albums, revisit old favorites, and find something new to love."/><div className="feature-grid"><article className="feature-card"><span>01</span><h3>Timeless vinyl</h3><p>Iconic albums and enduring sounds, handpicked for music lovers.</p></article><article className="feature-card"><span>02</span><h3>Stories in sound</h3><p>Every artist and album has a story worth hearing.</p></article><article className="feature-card"><span>03</span><h3>Made to discover</h3><p>Explore genres and find your next favorite record.</p></article></div></section>
  <section className="quote-band"><p>“Some music just sounds better on vinyl.”</p><span>THE GROOVEHOUSE MANIFESTO</span></section>
 </main>;
}
