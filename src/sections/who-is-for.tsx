"use client";

import { Check, User } from "lucide-react";
import { useState, useEffect } from "react";

const targetAudience = [
  "Sente-se inchada com frequência e não sabe como resolver",
  "Está cansada de dietas restritivas que não funcionam a longo prazo",
  "Tem uma rotina corrida e precisa de praticidade na alimentação",
  "Busca resultados sustentáveis, não apenas soluções temporárias",
  "Quer cuidar da saúde e da estética de forma equilibrada",
  "Deseja mais autonomia e consciência sobre suas escolhas alimentares"
];

function AvatarImage() {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    import("@/assets/avatar.jpeg")
      .then((mod) => setImageSrc(mod.default))
      .catch(() => setImageError(true));
  }, []);

  if (imageError || !imageSrc) {
    return (
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
        <User className="w-12 h-12 text-primary/40" />
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt="Jennifer - Nutricionista"
      className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg"
      onError={() => setImageError(true)}
    />
  );
}

export function WhoIsFor() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Para quem é o acompanhamento nutricional?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O acompanhamento foi criado pensando em mulheres que querem transformar
              sua relação com a alimentação de forma leve e realista.
            </p>

            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Decorative card */}
          <div className="relative">
            <div className="bg-secondary rounded-3xl p-8 md:p-12 border border-border">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-2xl text-primary font-semibold">J</span>
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed">
                  {'"'}Eu criei meu método de acompanhamento porque acredito que toda mulher merece
                  uma nutrição que respeite sua individualidade e sua vida real.{'"'}
                </blockquote>
                <div className="flex justify-center pt-4">
                  <AvatarImage />
                </div>
                <p className="text-center text-sm font-medium text-foreground">
                  Jennifer - Nutricionista
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/5 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
