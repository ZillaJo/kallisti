"use client";

import aboutImg from "../../assets/images/img2.jpeg";

export default function AboutPage() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28">
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          flex
          flex-col
          gap-12
          lg:flex-row
          lg:items-center
          lg:gap-20
        "
      >
        {/* Image à gauche */}
        <div className="hidden w-full lg:w-1/2 lg:flex justify-center lg:justify-start">
          <img
            src={aboutImg}
            alt="Architecture & Télécommunications"
            className="
              w-full
              max-w-sm
              sm:max-w-md
              lg:max-w-lg
              rounded-3xl
              object-cover
              shadow-[0_10px_25px_rgba(241,131,13,0.4)]
            "
          />
        </div>

        {/* Texte à droite */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            À propos de <span className="text-amber-500">KALLISTI</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            KALLISTI est une entreprise innovante à la croisée des
            <span className="text-amber-500 font-medium">
              {" "}télécommunications
            </span>{" "}
            et de
            <span className="text-amber-500 font-medium">
              {" "}l’architecture
            </span>.
            Nous concevons et déployons des infrastructures intelligentes qui
            connectent les personnes, les bâtiments et les territoires.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Notre expertise repose sur la conception de réseaux performants,
            l’intégration de solutions technologiques avancées et une approche
            architecturale durable. Chaque projet est pensé comme une structure
            cohérente, fonctionnelle et évolutive.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            De la planification à la mise en œuvre, nous accompagnons nos clients
            dans la création d’espaces connectés, sécurisés et adaptés aux enjeux
            de demain.
          </p>

          {/* Valeurs */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] border border-gray-200 p-4">
              <span className="block font-semibold text-amber-500">
                Innovation
              </span>
              <span className="text-gray-600">
                Technologies modernes & solutions intelligentes
              </span>
            </div>

            <div className="rounded-xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] border border-gray-200 p-4">
              <span className="block font-semibold text-amber-500">
                Conception
              </span>
              <span className="text-gray-600">
                Architecture fonctionnelle et durable
              </span>
            </div>

            <div className="rounded-xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] border border-gray-200 p-4">
              <span className="block font-semibold text-amber-500">
                Connectivité
              </span>
              <span className="text-gray-600">
                Réseaux fiables et performants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
