import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "GrooveHouse — Record Store",
  description: "A home for timeless records and music lovers."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body><Navbar />{children}<Footer /></body>
    </html>
  );
}
