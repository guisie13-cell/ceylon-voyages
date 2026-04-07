"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelers: string;
  circuit: string;
  dates: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  travelers: "2",
  circuit: "",
  dates: "",
  message: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactContent() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis";
    if (!form.email.trim()) newErrors.email = "L'email est requis";
    else if (!validateEmail(form.email)) newErrors.email = "Email invalide";
    if (!form.message.trim()) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState("submitting");
    setTimeout(() => {
      setState("success");
    }, 1500);
  };

  if (state === "success") {
    return (
      <>
        <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/28838276/pexels-photo-28838276.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Sri Lanka"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-heading text-white">Contact</h1>
          </div>
        </section>
        <section className="bg-ceylon-cream py-20">
          <Container>
            <div className="mx-auto max-w-md text-center">
              <CheckCircle size={48} className="mx-auto text-ceylon-emerald" />
              <h2 className="mt-6 font-heading text-2xl font-semibold text-ceylon-emerald-deep">
                Message envoyé !
              </h2>
              <p className="mt-3 text-ceylon-charcoal/60">
                Merci {form.name.split(" ")[0]}, nous avons bien reçu votre
                demande. Notre équipe vous répondra sous 24 à 48 heures avec
                une proposition personnalisée.
              </p>
              <Button variant="primary" size="md" href="/" className="mt-8">
                Retour à l&apos;accueil
              </Button>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Mini hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/28838276/pexels-photo-28838276.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Sri Lanka"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ceylon-charcoal/70 via-ceylon-charcoal/30 to-ceylon-charcoal/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-white">Nous Contacter</h1>
          <p className="mt-3 max-w-xl text-base text-white/70">
            Une question, un projet de voyage ? Écrivez-nous et recevez une
            réponse personnalisée sous 48h.
          </p>
        </div>
      </section>

      <section className="bg-ceylon-cream py-12 lg:py-16">
        <Container>
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-card sm:p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={cn(
                        "w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none",
                        errors.name ? "border-ceylon-coral" : "border-ceylon-emerald/15"
                      )}
                      placeholder="Jean Dupont"
                    />
                    {errors.name && <p className="mt-1 text-xs text-ceylon-coral">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={cn(
                        "w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none",
                        errors.email ? "border-ceylon-coral" : "border-ceylon-emerald/15"
                      )}
                      placeholder="jean@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-ceylon-coral">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full rounded-xl border border-ceylon-emerald/15 px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  {/* Travelers */}
                  <div>
                    <label htmlFor="travelers" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Nombre de voyageurs
                    </label>
                    <select
                      id="travelers"
                      value={form.travelers}
                      onChange={(e) => update("travelers", e.target.value)}
                      className="w-full rounded-xl border border-ceylon-emerald/15 px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "voyageur" : "voyageurs"}
                        </option>
                      ))}
                      <option value="7+">7 ou plus</option>
                    </select>
                  </div>

                  {/* Circuit */}
                  <div>
                    <label htmlFor="circuit" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Circuit intéressé
                    </label>
                    <select
                      id="circuit"
                      value={form.circuit}
                      onChange={(e) => update("circuit", e.target.value)}
                      className="w-full rounded-xl border border-ceylon-emerald/15 px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none"
                    >
                      <option value="">Choisir...</option>
                      <option value="7j">L&apos;Essentiel — 7 jours</option>
                      <option value="14j">Le Classique — 14 jours</option>
                      <option value="21j">Le Grand Tour — 21 jours</option>
                      <option value="custom">Sur mesure</option>
                    </select>
                  </div>

                  {/* Dates */}
                  <div className="sm:col-span-2">
                    <label htmlFor="dates" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Dates souhaitées
                    </label>
                    <input
                      id="dates"
                      type="text"
                      value={form.dates}
                      onChange={(e) => update("dates", e.target.value)}
                      className="w-full rounded-xl border border-ceylon-emerald/15 px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none"
                      placeholder="Ex: Février 2026, dates flexibles"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ceylon-charcoal/70">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={cn(
                        "w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:border-ceylon-gold focus:outline-none resize-none",
                        errors.message ? "border-ceylon-coral" : "border-ceylon-emerald/15"
                      )}
                      placeholder="Décrivez votre projet de voyage, vos centres d'intérêt, vos questions..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-ceylon-coral">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ceylon-gold px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-ceylon-gold-light disabled:opacity-60"
                >
                  {state === "submitting" ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  ) : (
                    <Send size={18} />
                  )}
                  {state === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="mt-10 lg:col-span-2 lg:mt-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-card">
                  <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep mb-5">
                    Coordonnées
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:contact@ceylonvoyages.fr"
                        className="flex items-center gap-3 text-sm text-ceylon-charcoal/70 transition-colors hover:text-ceylon-emerald"
                      >
                        <Mail size={18} className="text-ceylon-gold" />
                        contact@ceylonvoyages.fr
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+33123456789"
                        className="flex items-center gap-3 text-sm text-ceylon-charcoal/70 transition-colors hover:text-ceylon-emerald"
                      >
                        <Phone size={18} className="text-ceylon-gold" />
                        +33 1 23 45 67 89
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/33123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-ceylon-charcoal/70 transition-colors hover:text-ceylon-emerald"
                      >
                        <MessageCircle size={18} className="text-ceylon-gold" />
                        WhatsApp
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-ceylon-charcoal/70">
                      <Clock size={18} className="text-ceylon-gold" />
                      Lun-Ven 9h-18h (heure de Paris)
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-ceylon-emerald/5 p-6">
                  <h3 className="font-heading text-lg font-semibold text-ceylon-emerald-deep mb-3">
                    Réponse sous 48h
                  </h3>
                  <p className="text-sm leading-relaxed text-ceylon-charcoal/60">
                    Notre équipe spécialiste du Sri Lanka étudie chaque demande
                    individuellement et vous propose un itinéraire personnalisé
                    adapté à vos envies, votre budget et vos dates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
