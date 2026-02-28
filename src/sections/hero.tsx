"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, User } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "+5511937539259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

function HeroImage() {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    import("@/assets/avatar.jpeg")
      .then((mod) => setImageSrc(mod.default))
      .catch(() => setImageError(true));
  }, []);

  if (imageError || !imageSrc) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl">
        <User className="w-32 h-32 text-primary/30" />
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt="Jennifer - Nutricionista"
      className="w-full h-full object-cover rounded-3xl shadow-2xl"
      onError={() => setImageError(true)}
    />
  );
}

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge - prova social */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
                ))}
              </div>
              <span className="text-sm text-foreground font-medium">
                +100 mulheres transformaram
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-6">
              Emagreça com saúde, sem dietas restritivas,{" "}
              <span className="text-primary">com acompanhamento que funciona</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Método exclusivo para mulheres que querem reduzir o inchaço, emagrecer de forma sustentável
              e construir uma relação saudável com a comida.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                "Sem cortes radicais",
                "Adaptado à sua rotina",
                "Resultados em 30 dias"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Quero Emagrecer Saudável
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                asChild
              >
                <a href="#planos">
                  Ver Planos
                </a>
              </Button>
            </div>

            {/* Credibilidade */}
            <p className="text-sm text-muted-foreground mt-6 flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              CRN3-86946 • Acompanhamento nutricional personalizado
            </p>
          </div>

          {/* Right - Photo */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] relative">
              <HeroImage />

              {/* Floating card - o "tchan" */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border max-w-[200px] animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Avaliação</p>
                    <p className="text-sm font-semibold text-foreground">5.0 ★★★★★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
