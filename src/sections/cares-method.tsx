const caresSteps = [
  {
    letter: "C",
    title: "Consciência",
    description: "Desenvolva consciência sobre seus hábitos alimentares e entenda o que seu corpo realmente precisa."
  },
  {
    letter: "A",
    title: "Autonomia",
    description: "Ganhe autonomia para fazer escolhas alimentares saudáveis, mesmo fora de casa ou em situações sociais."
  },
  {
    letter: "R",
    title: "Reconhecimento",
    description: "Reconheça seus sinais de fome e saciedade, aprendendo a ouvir seu corpo."
  },
  {
    letter: "E",
    title: "Encorajamento",
    description: "Seja encorajada a cada passo da jornada, celebrando pequenas vitórias ao longo do caminho."
  },
  {
    letter: "S",
    title: "Sustentabilidade",
    description: "Construa hábitos sustentáveis que permanecem com você muito além dos 21 dias."
  }
];

export function CaresMethod() {
  return (
    <section id="metodo-cares" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium mb-4 border border-border">
            Método Exclusivo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Conheça o Método CARES
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um método criado para a vida real, que promove resultados verdadeiros 
            e duradouros, sem restrições extremas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {caresSteps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                  <span className="font-serif text-2xl font-bold text-primary-foreground">
                    {step.letter}
                  </span>
                </div>
                <div className="flex flex-col items-center w-full">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
