"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Installation & Mise en place de plafonds de luxe en Gyproc",
    description:
      "Nous concevons et installons des plafonds en Gyproc haut de gamme, alliant esthétique moderne, finitions soignées et durabilité. Nos solutions sur mesure apportent élégance, confort et valeur ajoutée à vos espaces résidentiels et professionnels.",
    image: "/images/img1.jpg",
  },
  {
    id: 2,
    title: "Aménagement intérieur élégant",
    description:
      "Conception et réalisation d’intérieurs raffinés, alliant esthétique, harmonie des volumes et finitions soignées. Chaque espace est pensé pour offrir confort, élégance et fonctionnalité, en créant une atmosphère chaleureuse et moderne adaptée au style de vie de ses occupants.",
    image: "/images/img3.jpg",
  },
  {
    id: 3,
    title: "Installation Starlink & Accès Internet haut débit",
    description:
      "Mise en place de solutions Starlink pour particuliers, entreprises et fournisseurs d’accès, garantissant une connexion Internet rapide, stable et fiable. Nous assurons l’installation complète, l’optimisation du signal et le partage sécurisé de la connexion afin de répondre aux besoins de connectivité résidentiels, professionnels et communautaires. Avec nous la connexion haut debit est a votre portée",
    image: "/images/img4.jpg",
  },
  {
    id: 4,
    title: "Transformer vos idées en architecture d’exception",
    description:
      "À partir d’une simple idée, nous concevons des plans architecturaux précis et détaillés, transformant votre vision en un projet concret et réalisable. Notre approche allie créativité, rigueur technique et écoute du client afin de donner vie à des bâtiments conformes à votre imagination, à vos besoins et à vos ambitions.",
    image: "/images/img5.jpg",
  },
];

export default function RealisationsPage() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const startX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  /* Auto-scroll */
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  /* Swipe mobile */
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startX.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    startX.current = null;
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="realisations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nos <span className="text-yellow-700">Réalisations</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Une sélection de projets illustrant notre expertise en
            télécommunications et en architecture.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden rounded-3xl border shadow-[0_8px_20px_rgba(241,131,20,0.4)]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex min-w-full flex-col lg:flex-row"
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover mb-8 md:mb-0 sm:h-80 lg:h-110"

                  />
                </div>

                {/* Description */}
                <div className="flex lg:w-1/2 flex-col justify-center p-6 sm:p-10">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Flèches */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-[0_10px_25px_rgba(241,131,13,0.4)] hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-yellow-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-[0_10px_25px_rgba(241,131,13,0.4)] hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-yellow-700" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === current
                  ? "bg-yellow-700"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
