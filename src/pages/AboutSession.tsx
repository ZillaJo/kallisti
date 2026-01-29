"use client";

import { useState } from "react";
import aboutImg from "../assets/images/img10.png";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundHero from "@/components/custom/BgHeroProps";
import { Lightbulb, Globe, Award, RefreshCcw } from "lucide-react";

const valuesData = [
  {
    key: "innovation",
    title: "Innovation",
    icon: Lightbulb,
    description:
      "Nous développons et intégrons des solutions technologiques modernes, capables de répondre aux défis actuels et d’anticiper les besoins futurs.",
  },
  {
    key: "accessibilite",
    title: "Accessibilité",
    icon: Globe,
    description:
      "Nous concevons des solutions adaptées aux réalités locales, accessibles aussi bien aux particuliers qu’aux entreprises, afin de maximiser l’impact.",
  },
  {
    key: "excellence",
    title: "Excellence & Qualité",
    icon: Award,
    description:
      "Chaque projet est mené avec rigueur, exigence et professionnalisme, en plaçant la qualité et la durabilité au cœur de nos réalisations.",
  },
  {
    key: "adaptabilite",
    title: "Adaptabilité",
    icon: RefreshCcw,
    description:
      "Nous nous adaptons aux contextes, aux besoins spécifiques et à l’évolution rapide des technologies pour proposer des solutions flexibles.",
  },
];

export default function About() {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  const toggleValue = (key: string) => {
    setActiveValue(activeValue === key ? null : key);
  };

  return (
    <BackgroundHero>
      {/* SECTION À PROPOS */}
      <section className="relative mt-10 py-10 sm:py-15 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hidden w-full h-140 lg:w-1/2 lg:flex justify-center lg:justify-start"
          >
            <img
              src={aboutImg}
              alt="KALLISTI"
              className="w-full max-w-lg rounded-xl object-cover shadow-[0_10px_25px_rgba(241,131,13,0.4)]"
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              À propos de <span className="text-yellow-600">NOUS</span>
            </h2>

            <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
              <span className="text-yellow-600 font-semibold">KALLISTI</span> est une entreprise fondée par de jeunes étudiants animés
              par la volonté de contribuer activement au développement de leur
              pays à travers des solutions technologiques modernes et durables.
            </p>

            <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
              L’entreprise intervient principalement dans deux domaines clés :
              les télécommunications, notamment la mise en place de réseaux sans
              fil (LAN), et l’architecture à travers la conception de plans,
              l’élévation de bâtiments et les installations techniques.
            </p>

            <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
              Cette synergie entre technologie et construction permet à KALLISTI
              de concevoir des espaces intelligents, connectés et adaptés aux
              besoins actuels et futurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION ENGAGEMENT */}
      <section className="relative overflow-hidden py-10 sm:py-15 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Notre <span className="text-yellow-600">engagement</span>
            </h2>
            <p className="mt-4 text-gray-100 max-w-2xl mx-auto">
              Les fondements qui guident nos actions et définissent notre
              manière de travailler.
            </p>
          </motion.div>

          {/* CONTENU 50 / 50 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* GAUCHE : Mission & Vision */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl  shadow-[0_10px_25px_rgba(241,131,13,0.4)] backdrop-blur lg:mt-14 p-6 border border-amber-200 "
              >
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                  Notre mission
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Concevoir et déployer des solutions technologiques et
                  architecturales fiables, innovantes et adaptées afin de
                  contribuer au développement durable des infrastructures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] backdrop-blur p-6 border border-amber-200 "
              >
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                  Notre vision
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Devenir un acteur de référence dans l’intégration des
                  télécommunications et de l’architecture, en bâtissant des
                  environnements intelligents et connectés.
                </p>
              </motion.div>
            </div>

            {/* DROITE : Valeurs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
                Nos valeurs
              </h3>

              <div className="space-y-4">
                {valuesData.map((value) => {
                  const Icon = value.icon;
                  const isOpen = activeValue === value.key;

                  return (
                    <motion.div
                      key={value.key}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="rounded-2xl hover:shadow-[0_10px_25px_rgba(241,131,13,0.4)] bg-white backdrop-blur border border-amber-200 overflow-hidden shadow-sm"
                    >
                      {/* Header */}
                      <button
                        onClick={() => toggleValue(value.key)}
                        className="w-full flex items-center justify-between px-6 py-4 hover:bg-amber-50/60 transition"
                      >
                        <div className="flex items-center gap-3">
                          {/* Icône animée */}
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon className="w-5 h-5 text-yellow-700" />
                          </motion.div>

                          <span className="font-medium text-yellow-700">
                            {value.title}
                          </span>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xl text-gray-500"
                        >
                          +
                        </motion.span>
                      </button>

                      {/* Contenu animé */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="px-6 pb-5 text-gray-700 text-sm leading-relaxed"
                          >
                            {value.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </BackgroundHero>
  );
}
