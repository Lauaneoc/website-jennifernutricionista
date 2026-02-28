import { MapPin, Clock, Building } from "lucide-react";

const locations = [
  {
    city: "Santo André",
    code: "STA",
    name: "Unidade Santo André",
    address: "Av. Portugal, 1285 – 3º andar – Centro",
    cep: "CEP 09040-001",
    schedule: "Quintas-feiras, 12h às 14h",
    type: "Consulta presencial – Sala Multi",
    followUp: "Acompanhamento quadrimestral"
  },
  {
    city: "São Paulo",
    code: "PLT",
    name: "Avenida Paulista",
    address: "Av. Paulista, 2064/2086 – 21º andar – Bela Vista",
    cep: "CEP 01310-928",
    schedule: "Quartas e Quintas, 9h às 14h",
    type: "Consulta presencial – Sala Multi",
    followUp: null
  }
];

export function Locations() {
  return (
    <section id="locais" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Atendimento Presencial
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Locais de Atendimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Escolha o local mais conveniente para você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col items-start">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-2">
                    {location.code}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {location.city}
                  </h3>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-foreground">{location.name}</p>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                    <p className="text-sm text-muted-foreground">{location.cep}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-foreground">{location.schedule}</p>
                    <p className="text-sm text-muted-foreground">{location.type}</p>
                  </div>
                </div>
                
                {location.followUp && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground">{location.followUp}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
