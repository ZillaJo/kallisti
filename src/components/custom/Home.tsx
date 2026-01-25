"use client";

import heroImg from "../../assets/images/img1.jpeg";
import BgHeroProps from "../custom/BgHeroProps";

export default function HomePage() {
  return (
    <BgHeroProps>
      {/* Hero Section */}
      <section
        className="
          relative
          mt-10
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col-reverse
          items-center
          gap-12
          px-4
          py-12
          sm:px-6
          md:py-16
          lg:flex-row
          lg:gap-20
          lg:px-8
          lg:py-28
        "
      >
        {/* Texte */}
        <div
          className="
            flex
            w-full
            max-w-xl
            flex-col
            items-center
            space-y-6
            text-center
            lg:w-1/2
            lg:items-start
            lg:text-left
          "
        >
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Bienvenue chez <span className="text-amber-500">KALLISTI</span>
          </h1>

          <p className="text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
            <span className="text-amber-500">Think outside the box.</span>{" "}
            Découvrez nos services et projets innovants qui transforment vos
            idées en réalité.
          </p>

          {/* CTA */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
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
          className="
            flex
            w-full
            justify-center
            lg:w-1/2
            lg:justify-end
          "
        >
          <img
            src={heroImg}
            alt="Hero illustration"
            className="
              w-full
              max-w-xs
              rounded-3xl
              object-cover
              shadow-[0_10px_25px_rgba(241,131,13,0.4)]
              sm:max-w-sm
              md:max-w-md
            "
          />
        </div>
      </section>
    </BgHeroProps>
  );
}
