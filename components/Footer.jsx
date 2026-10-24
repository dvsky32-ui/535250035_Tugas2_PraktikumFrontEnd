import Link from "next/link";
export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <Link className="brand footer-brand" href="/"><span className="brand-mark">G<span>H</span></span><span className="brand-name">GROOVEHOUSE<small>RECORD STORE</small></span></Link>
      <p>For the love of music,<br/>and everything in between.</p>
      <div className="footer-links"><Link href="/about">Our story</Link><Link href="/records">Collection</Link><Link href="/contact">Contact</Link></div>
    </div>
    <div className="container footer-bottom">© 2026 GrooveHouse Record Store</div>
  </footer>;
}
