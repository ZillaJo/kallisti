import { MapPin, Phone, Mail } from "lucide-react";
import BgHeroProps from "./BgHeroProps";

export default function Contact() {
  return (
    <BgHeroProps>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-28" id="contact">
        {/* Titre */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-100">
            Contactez-<span className="text-amber-500">nous</span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Une question, un projet ou une collaboration ? Notre équipe est à
            votre écoute.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Partie gauche : Infos */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-amber-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Adresse</h3>
                <p className="text-gray-300">
                  Kigali, Rwanda <br />
                  Avenue de la Paix, Immeuble Kallisti
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-amber-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                <p className="text-gray-300">+250 788 635 875</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-amber-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">kallisti@gmail.com</p>
              </div>
            </div>

            <div className="pt-6 text-gray-300 leading-relaxed">
              Nous combinons expertise en télécommunications et architecture
              pour créer des solutions innovantes, durables et performantes.
            </div>
          </div>

          {/* Partie droite : Formulaire */}
          <div className=" rounded-3xl p-8 shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-amber-500">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="mt-2 w-full rounded-xl border border-amber-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="mt-2 w-full rounded-xl border border-amber-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-500">
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="Sujet de votre message"
                  className="mt-2 w-full rounded-xl border border-amber-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-500">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Votre message..."
                  className="mt-2 w-full rounded-xl border border-amber-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-6 py-3 text-black font-semibold hover:bg-amber-400 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </BgHeroProps>
  );
}
