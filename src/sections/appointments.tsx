import { User, Video, FileText, TrendingUp } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Atendimento Individualizado",
    description: "Consultas focadas nas suas necessidades únicas e objetivos pessoais."
  },
  {
    icon: Video,
    title: "Consultas Online e Presenciais",
    description: "Flexibilidade para atender você onde estiver, com a mesma qualidade."
  },
  {
    icon: FileText,
    title: "Planos Personalizados",
    description: "Estratégias alimentares criadas especialmente para sua rotina."
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento Contínuo",
    description: "Suporte e ajustes ao longo da sua jornada para garantir seus resultados."
  }
];

export function Appointments() {
  return (
    <section id="atendimento" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Como funciona o atendimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um cuidado nutricional completo, pensado para se adaptar à sua vida.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
