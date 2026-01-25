"use client";

import heroImg from "../../assets/images/img8.png";
import BgHeroProps from "../custom/BgHeroProps";

export default function HomePage() {
  return (
    <BgHeroProps>
      {/* Hero Section */}
      <section
        className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full mx-auto px-5 md:px-10 lg:px-20 py-20 lg:py-40 gap-5"
      >
        {/* Texte */}
        <div
          className="order-2 lg:order-1 w-full flex-col items-center space-y-6 text-center lg:items-start lg:text-left"
        >
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center lg:text-start w-full">
            Bienvenue chez <span className="text-amber-500">KALLISTI</span>
          </h1>

          <p className="text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
            <span className="text-amber-500">Think outside the box.</span>{" "}
            Découvrez nos services et projets innovants qui transforment vos
            idées en réalité.
          </p>

          {/* CTA */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-5">
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-amber-500
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-amber-400
              "
            >
              Voir nos projets
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-amber-500
                px-6
                py-3
                text-sm
                font-semibold
                text-amber-500
                transition
                hover:bg-white
                hover:text-black
              "
            >
              Contactez-nous
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="order-1 lg:order-2 w-full rounded-2xl overflow-hidden "
        >
          <img
            src={heroImg}
            alt="Hero illustration"
            className="
             w-full h-full object-cover
            "
          />
        </div>
      </section>
    </BgHeroProps>
  );
}
