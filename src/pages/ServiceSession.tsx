import {
  Network,
  Building2,
  Wifi,
  Ruler,
  ShieldCheck,
  Cable,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import BackgroundHero from "@/components/custom/BgHeroProps";
import telecomImg from "../assets/images/img2.jpg";
import architectureImg from "../assets/images/img1.jpg";
import connectivityImg from "../assets/images/img3.jpg";
import engineeringImg from "../assets/images/img4.jpg";
import securityImg from "../assets/images/img5.webp";
import cablingImg from "../assets/images/img6.webp";

const services = [
  {
    title: "Infrastructures Télécom",
    icon: Network,
    image: telecomImg,
    description: `
    Nous concevons, déployons et maintenons des infrastructures télécom robustes et évolutives,
    capables de supporter les besoins actuels et futurs des entreprises, institutions et collectivités.

    Nos solutions couvrent les réseaux filaires et sans fil, les backbone de communication,
    les interconnexions multi-sites et l’optimisation des performances réseau.
    `,
  },
  {
    title: "Architecture & Conception",
    icon: Building2,
    image: architectureImg,
    description: `
    Nous intégrons l’architecture et la technologie dès la phase de conception.
    Notre approche permet de créer des espaces fonctionnels, esthétiques et intelligents,
    où les infrastructures télécom s’intègrent naturellement au bâti.
    `,
  },
  {
    title: "Solutions de Connectivité",
    icon: Wifi,
    image: connectivityImg,
    description: `
    Nous mettons en place des solutions de connectivité performantes :
    Wi-Fi professionnel, fibre optique, réseaux sans fil longue portée et solutions hybrides.

    Chaque déploiement est optimisé pour offrir une couverture fiable
    et une expérience utilisateur fluide.
    `,
  },
  {
    title: "Études & Ingénierie",
    icon: Ruler,
    image: engineeringImg,
    description: `
    Audit, ingénierie réseau, dimensionnement, planification et accompagnement stratégique.
    Nous transformons une idée en solution concrète, maîtrisée et durable.
    `,
  },
  {
    title: "Sécurité & Fiabilité",
    icon: ShieldCheck,
    image: securityImg,
    description: `
    Nous déployons des solutions de sécurité avancées :
    contrôle d’accès, vidéosurveillance, protection réseau
    et garantie de continuité de service.
    `,
  },
  {
    title: "Câblage & Intégration",
    icon: Cable,
    image: cablingImg,
    description: `
    Installation de câblage structuré conforme aux normes internationales
    et intégration complète des équipements télécom
    dans les infrastructures existantes.
    `,
  },
];

const textVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction === 1 ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <BackgroundHero>
      <div className="mx-auto py-24 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isReversed = index % 2 !== 0;
          const direction = isReversed ? 1 : -1;

          return (
            <div
              key={service.title}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              {/* Texte */}
              <motion.div
                custom={direction}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={isReversed ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-8 w-8 text-amber-500" />
                  <h3 className="text-2xl font-bold text-gray-100">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`overflow-hidden rounded-2xl shadow-[0_10px_25px_rgba(241,131,13,0.4)] ${
                  isReversed ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-80 w-full object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </BackgroundHero>
  );
}
