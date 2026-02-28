import { Sparkles, Heart, Brain, Smile } from "lucide-react";

const results = [
  {
    icon: Sparkles,
    title: "Redução do Inchaço",
    description: "Sinta-se mais leve e desinchada com estratégias nutricionais específicas."
  },
  {
    icon: Heart,
    title: "Melhor Relação com a Comida",
    description: "Desenvolva uma relação saudável e livre de culpa com a alimentação."
  },
  {
    icon: Brain,
    title: "Mais Autonomia e Consistência",
    description: "Aprenda a fazer escolhas conscientes que se encaixam na sua rotina."
  },
  {
    icon: Smile,
    title: "Leveza e Confiança",
    description: "Sinta-se mais confiante e em harmonia com seu corpo."
  }
];

export function Results() {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resultados Esperados
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            O que você pode esperar em 21 dias
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Resultados reais e alcançáveis, respeitando seu corpo e seu tempo.
            Sem promessas milagrosas, apenas ciência e cuidado.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-background border border-border hover:shadow-sm transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {result.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          * Os resultados podem variar de pessoa para pessoa. O Protocolo ELLA não substitui 
          acompanhamento médico ou nutricional individualizado.
        </p>
      </div>
    </section>
  );
}
