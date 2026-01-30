"use client";

import {
  Network,
  Building2,
  Wifi,
  Ruler,
  ShieldCheck,
  Cable,
} from "lucide-react";
import BgHeroProps from "../custom/BgHeroProps";

export default function ServicesPage() {
  return (
    <BgHeroProps>
      <section className=" py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">
              Nos <span className="text-amber-500">Services</span>
            </h2>
            <p className="mt-4 text-gray-200 text-sm sm:text-base">
              Nous concevons et déployons des solutions complètes alliant
              réseaux et architecture, pour bâtir des infrastructures
              intelligentes, durables et connectées.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-2xl border border-amber-500 p-6 transition hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
              <Network className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                Infrastructures Réseaux
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Conception, déploiement et maintenance de réseaux de
                communication performants, adaptés aux besoins des entreprises
                et collectivités.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl border border-amber-500 p-6 transition hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
              <Building2 className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                Architecture <span className="text-amber-500">&</span>{" "}
                Conception
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Études architecturales, conception de bâtiments et intégration
                harmonieuse des infrastructures technologiques.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl border border-amber-500 p-6 transition hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
              <Wifi className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                Solutions de Connectivité
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Mise en place de solutions Wi-Fi, fibre optique et réseaux sans
                fil sécurisés pour environnements professionnels.
              </p>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl border border-amber-500 p-6 transition hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
              <Ruler className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                Études <span className="text-amber-500">&</span> Ingénierie
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Analyse des besoins, études techniques et accompagnement
                stratégique pour des projets complexes et sur mesure.
              </p>
            </div>

            {/* Service 5 */}
            <div className="rounded-2xl border border-amber-500 p-6 transition hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
              <ShieldCheck className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                Sécurité <span className="text-amber-500">&</span> Fiabilité
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Sécurisation des infrastructures, contrôle d’accès, surveillance
                et garantie de continuité des services.
              </p>
            </div>

            {/* Service 6 */}
            <div className="rounded-2xl border border-amber-500 p-6 transition hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
              <Cable className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                Câblage <span className="text-amber-500">&</span> Intégration
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Installation de câblage structuré et intégration complète des
                équipements réseaux dans les infrastructures existantes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <a
            href="/services"
            className="rounded-full shadow-[0_10px_25px_rgba(241,131,13,0.4)] hover:shadow-yellow-700 bg-yellow-700 py-3 p-4 text-center text-sm font-semibold text-white hover:bg-black/90 transition"
          >
            En savoir plus
          </a>
        </div>
      </section>
    </BgHeroProps>
  );
}
