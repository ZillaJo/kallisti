"use client";

import { useRef, useState } from "react";
import BackgroundHero from "@/components/custom/BgHeroProps";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import {
  Network,
  Server,
  Video,
  Activity,
  ShieldCheck,
  Satellite,
  X,
  Briefcase,
  Users,
  Clock,
  Shield,
} from "lucide-react";

/* IMAGES */
import enterpriseNetImg from "../assets/images/img1.jpg";
import infraNetImg from "../assets/images/img4.jpg";
import videoConfImg from "../assets/images/img5.webp";
import prtgImg from "../assets/images/img2.jpg";
import windowsImg from "../assets/images/img3.jpg";
import starlinkImg from "../assets/images/img5.webp";

/* TYPES */
type Project = {
  title: string;
  category: string;
  icon: any;
  image: string;
  description: string;
  details: string;
};

type Stat = {
  label: string;
  value: number;
  description: string;
  icon: any;
  suffix?: string;
};

/* PROJECTS DATA */
const projects: Project[] = [
  {
    title: "Réseau d’Entreprise",
    category: "Réseau",
    icon: Network,
    image: enterpriseNetImg,
    description: "Conception et déploiement de réseaux sécurisés.",
    details:
      "Analyse des besoins, architecture réseau, configuration, sécurisation et maintenance.",
  },
  {
    title: "Infrastructure Réseau",
    category: "Réseau",
    icon: Server,
    image: infraNetImg,
    description: "Infrastructures robustes et évolutives.",
    details: "Backbone réseau, redondance, haute disponibilité et performance.",
  },
  {
    title: "Visioconférence",
    category: "Systèmes",
    icon: Video,
    image: videoConfImg,
    description: "Solutions de visioconférence professionnelles.",
    details: "Teams, Zoom, salles connectées et support utilisateur.",
  },
  {
    title: "Monitoring PRTG",
    category: "Sécurité",
    icon: Activity,
    image: prtgImg,
    description: "Supervision réseau continue.",
    details: "Surveillance temps réel, alertes et reporting.",
  },
  {
    title: "Administration Windows",
    category: "Systèmes",
    icon: ShieldCheck,
    image: windowsImg,
    description: "Gestion avancée des systèmes Windows.",
    details: "Active Directory, GPO, sécurité et sauvegardes.",
  },
  {
    title: "VSAT / Starlink",
    category: "Satellite",
    icon: Satellite,
    image: starlinkImg,
    description: "Internet satellite en zones isolées.",
    details: "Installation, configuration et maintenance satellite.",
  },
];

const categories = [
  "Tous",
  "Réseau",
  "Sécurité",
  "Satellite",
  "Systèmes",
  "Bâtiment",
];

/* STATS DATA */
const stats: Stat[] = [
  {
    label: "Projets livrés",
    value: 120,
    description: "Déployés avec succès",
    icon: Briefcase,
  },
  {
    label: "Clients actifs",
    value: 95,
    description: "Entreprises & institutions",
    icon: Users,
  },
  {
    label: "Années d’expertise",
    value: 10,
    description: "Réseaux & systèmes",
    icon: Clock,
    suffix: "  +",
  },
  {
    label: "Disponibilité",
    value: 99,
    description: "Services critiques",
    icon: Shield,
    suffix: "%",
  },
];

/* COUNTER */
function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, value, {
          duration: 2,
          ease: "easeOut",
        });
      }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const marqueeImages = [...projects, ...projects];

  const openProjectFromMarquee = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <BackgroundHero>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* HEADER */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-100">
              Projets & <span className="text-amber-600">Réalisations</span>
            </h2>
            <p className="mt-3 text-gray-400">
              Solutions concrètes, fiables et professionnelles.
            </p>
          </div>

          {/* FILTRES */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeCategory === cat
                    ? "bg-amber-500 text-black"
                    : "border border-amber-500/40 shadow-[0_5px_20px_rgba(240,125,19,0.4)] text-amber-400 hover:bg-amber-500 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* BANDEAU */}
          <div className="relative rounded-2xl mb-12 overflow-hidden touch-pan-y">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marqueeImages.map((project, index) => (
                <div
                  key={index}
                  className="h-32 w-56 shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-80"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => openProjectFromMarquee(project)}
                    className="h-full w-full cursor-pointer object-cover transition hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* STATS */}
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-linear-to-br from-neutral-900 to-neutral-950 px-5 py-4"
                >
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />

                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                    <Icon className="h-5 w-5 text-amber-500" />
                  </div>

                  <p className="text-2xl font-bold leading-tight text-gray-100">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>

                  <p className="text-sm font-medium text-gray-300">
                    {stat.label}
                  </p>

                  <p className="mt-0.5 text-xs leading-snug text-gray-500">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* LISTE DES PROJETS */}
          <div
            ref={listRef}
            className="space-y-10 shadow-[0_5px_20px_rgba(240,125,19,0.4)] p-3 rounded-4xl"
          >
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-6 rounded-2xl border border-amber-500/20 p-6 md:flex-row md:justify-between"
                >
                  <div className="flex gap-4">
                    <Icon className="h-7 w-7 text-amber-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-lg border border-amber-500 px-5 py-2 text-sm text-amber-500 hover:bg-amber-500 hover:text-black"
                    >
                      Voir le projet
                    </button>
                    <button className="rounded-lg bg-amber-500 px-5 py-2 text-sm font-medium text-black hover:bg-amber-400">
                      Demander un devis
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="relative w-full max-w-2xl rounded-2xl bg-neutral-900 p-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                  <X />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="mb-5 h-56 w-full rounded-xl object-cover"
                />

                <h3 className="text-2xl font-bold text-gray-100">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 text-gray-300">{selectedProject.details}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex mt-15 justify-center items-center">
          <a
            href="/"
            className="rounded-full w-40 shadow-[0_10px_25px_rgba(241,131,13,0.4)] hover:shadow-yellow-700 bg-yellow-700  p-4 text-center text-sm font-semibold text-white hover:bg-black/90 transition"
          >
            Acceuil
          </a>
        </div>
      </section>
    </BackgroundHero>
  );
}
