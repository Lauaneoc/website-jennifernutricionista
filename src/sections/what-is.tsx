import { Heart, Scale, Brain, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Emagrecimento Saudável",
    description: "Perda de peso gradual e sustentável, respeitando seu corpo e metabolismo."
  },
  {
    icon: Heart,
    title: "Redução do Inchaço",
    description: "Estratégias nutricionais específicas para desinchar e sentir-se mais leve."
  },
  {
    icon: Brain,
    title: "Consciência Alimentar",
    description: "Desenvolva uma relação saudável e equilibrada com a comida."
  },
  {
    icon: Sparkles,
    title: "Nutrição Baseada em Evidências",
    description: "Orientações fundamentadas em ciência, sem promessas milagrosas."
  },
  {
    icon: Clock,
    title: "Aplicação Prática",
    description: "Pensado para rotinas ocupadas, com praticidade no dia a dia."
  }
];

export function WhatIs() {
  return (
    <section id="o-que-e" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            O que é o Protocolo ELLA?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um protocolo nutricional de 21 dias desenvolvido especialmente para mulheres 
            que buscam resultados reais, sem dietas restritivas ou promessas irreais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
