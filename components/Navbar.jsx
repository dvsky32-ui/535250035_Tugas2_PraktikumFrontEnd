'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/records", label: "Records" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">G<span>H</span></span>
          <span className="brand-name">GROOVEHOUSE<small>RECORD STORE</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(link => {
            const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(link.href + "/");
            return <Link key={link.href} href={link.href} className={`nav-link${active ? " active" : ""}`} aria-current={active ? "page" : undefined}>{link.label}</Link>;
          })}
        </nav>
        <Link className="nav-cta" href="/records">Find your groove ↗</Link>
      </div>
    </header>
  );
}
