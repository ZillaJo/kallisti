import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-gray-300">
      {/* Ligne dégradée */}
      <div className="h-1 w-full bg-linear-to-r from-transparent via-amber-500 to-transparent" />

      {/* Bouton Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-amber-500 p-3 text-black shadow-lg transition hover:bg-amber-400"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-semibold text-amber-500">
              KALLISTI
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Entreprise spécialisée en réseaux et architecture,
              offrant des solutions innovantes, performantes et durables.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/" className="hover:text-amber-500">Accueil</a></li>
              <li><a href="/about" className="hover:text-amber-500">À propos</a></li>
              <li><a href="/services" className="hover:text-amber-500">Services</a></li>
              <li><a href="/projects" className="hover:text-amber-500">Projets</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Infrastructure Réseau</li>
              <li>Bâtiments intelligents</li>
              <li>Architecture technique</li>
              <li>Consulting & Audit</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Contact
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                Kigali, Rwanda
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                +250 788 635 875
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                kallisti@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <span>
            © 2026 KALLISTI. Tous droits réservés.
          </span>
          <span className="mt-2 sm:mt-0">
            Conçu avec rigueur et innovation.
          </span>
        </div>
      </div>
    </footer>
  );
}
