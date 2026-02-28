"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "+5511937539259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

// Diferença real entre planos
const trimestralBenefits = [
  "3 consultas mensais",
  "Plano alimentar personalizado",
  "Suporte WhatsApp dias úteis",
  "Ebook de receitas",
];

const semestralBenefits = [
  "6 consultas mensais",
  "Plano alimentar personalizado",
  "Suporte WhatsApp diário",
  "Sessão estratégica com psicóloga parceira",
  "Ebook de receitas + sazonais",
  "Análise de exames laboratoriais",
  "Grupo exclusivo de apoio",
  "2 consultas extras emergenciais",
];

export function PricingPlans() {
  return (
    <section id="planos" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Acompanhamento Nutricional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Escolha como você quer ser acompanhada
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planos pensados para diferentes momentos da sua jornada.
              Todos com atendimento personalizado da Jennifer.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {/* Trimestral Plan */}
            <div className="relative bg-card rounded-3xl border border-border p-8 hover:border-primary/30 transition-all duration-300 flex flex-col">
              <div className="space-y-6 flex-1 flex flex-col">
                {/* Plan Name */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Acompanhamento Trimestral
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Para quem está começando agora
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3 flex-1">
                  {trimestralBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full py-5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Falar com Jennifer
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Semestral Plan - Featured */}
            <div className="relative bg-gradient-to-b from-secondary/10 to-card rounded-3xl border-2 border-secondary p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  Mais Escolhido
                </div>
              </div>

              <div className="space-y-6 pt-2 flex-1 flex flex-col">
                {/* Plan Name */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Acompanhamento Semestral
                    </h3>
                    <Star className="w-5 h-5 text-secondary fill-secondary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Para resultados profundos e duradouros
                  </p>
                </div>

                {/* Benefits - destacando diferenças */}
                <ul className="space-y-3 flex-1">
                  {semestralBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground text-sm leading-relaxed font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Value proposition */}
                <div className="bg-secondary/10 rounded-xl p-3 text-center">
                  <p className="text-sm text-secondary font-medium">
                    Economize em comparação ao trimestral
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full py-5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-lg"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Falar com Jennifer
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Valores conversados no WhatsApp sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
