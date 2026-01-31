import BgHeroProps from "../custom/BgHeroProps";
import {
  Loader,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  subject: "",
  email: "",
  message: "",
};

type AlertType = {
  type: "success" | "error";
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [isSending, setIsSending] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);

  // Référence pour éviter les timers multiples
  const alertTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID!;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID!;
  const emailUser = import.meta.env.VITE_EMAIL_PUBLIC_USER!;

  /** Affiche une alerte puis la fait disparaître automatiquement */
  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message });

    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }

    alertTimeoutRef.current = setTimeout(() => {
      setAlert(null);
    }, 5000); // ⏱️ 5 secondes
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setAlert(null);

    try {
      const result = await emailjs.send(serviceID, templateID, form, emailUser);

      if (result.status === 200) {
        setForm(INITIAL_FORM_STATE);
        showAlert(
          "success",
          "Message envoyé avec succès. Nous vous répondrons sous peu.",
        );
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      showAlert(
        "error",
        "Échec de l'envoi du message. Veuillez réessayer plus tard.",
      );
    } finally {
      setIsSending(false);
    }
  };
  return (
    <BgHeroProps>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-28">
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
                <a className="text-gray-300" href="tel:+250788635875">
                  +250 788 635 875
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-amber-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a className="text-gray-300" href="mailto:kallistiorg3.com">
                  kallistiorg3@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-6 text-gray-300 leading-relaxed">
              Nous combinons expertise en reseaux et architecture pour créer des
              solutions innovantes, durables et performantes.
            </div>
          </div>

          {/* Partie droite : Formulaire */}
          <div className=" rounded-3xl p-8 shadow-[0_10px_25px_rgba(241,131,13,0.4)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-amber-500 font-medium mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Votre nom"
                    className="mt-2 w-full rounded-xl border border-amber-700 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-amber-500 font-medium mb-1">
                    Numero
                  </label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Votre Numero..."
                    className="mt-2 w-full rounded-xl border border-amber-700 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-amber-500 font-medium mb-1">
                    Votre Sujet
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    required
                    placeholder="Sujet de votre message"
                    className="mt-2 w-full rounded-xl border border-amber-700 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-amber-500 font-medium mb-1">
                    Votre Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    placeholder="votre@email.com"
                    className="mt-2 w-full rounded-xl border border-amber-700 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-amber-500 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  placeholder="Votre message..."
                  className="mt-2 w-full rounded-xl border border-amber-700 shadow-2xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Alert message */}
              {alert && (
                <div
                  className={`mb-5 flex items-center gap-2 text-sm font-medium ${
                    alert.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {alert.type === "success" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertTriangle size={18} />
                  )}
                  <span>{alert.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-black font-semibold py-3 rounded-xl hover:bg-amber-400 transition shadow-2xl disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    Envoie
                    <Loader className="animate-spin" size={18} />
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </BgHeroProps>
  );
}
