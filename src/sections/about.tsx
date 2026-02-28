"use client";

import { GraduationCap, Heart, Target, MessageCircle, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "+5511937539259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

const qualifications = [
  {
    icon: GraduationCap,
    text: "Nutricionista Esportiva",
    detail: "Especializada em saúde feminina"
  },
  {
    icon: Heart,
    text: "Pós-graduanda",
    detail: "Nutrição Esportiva e Saúde Estética da Mulher"
  },
  {
    icon: Award,
    text: "CRN3-86946",
    detail: "Nutricionista regularmente registrada"
  },
];

const stats = [
  { value: "100+", label: "Mulheres transformadas" },
  { value: "5+", label: "Anos de experiência" },
  { value: "98%", label: "Taxa de satisfação" },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sua Nutricionista
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Jennifer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nutricionista especializada em saúde feminina, ajudando mulheres
              a emagrecerem de forma saudável sem dietas restritivas.
            </p>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-border mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed text-center">
              "Acredito que toda mulher merece uma nutrição que respeite sua
              individualidade e sua vida real. Sem cortes radicais, sem proibições."
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-muted/30 border border-border">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Qualifications */}
          <div className="mb-12">
            <h3 className="font-semibold text-foreground mb-6 text-center">Formação e Especialização</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {qualifications.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{item.text}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Method CARES */}
          <div className="bg-muted/20 rounded-2xl p-8 border border-border">
            <h3 className="font-semibold text-foreground mb-4 text-center">Método CARES</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">
              Um método exclusivo que desenvolvi para ajudar mulheres a conquistar
              autonomia, consciência alimentar e hábitos sustentáveis.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Consciência alimentar
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Autonomia nas escolhas
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Hábitos sustentáveis
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Acompanhamento próximo
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="px-10 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              asChild
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar com Jennifer
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
