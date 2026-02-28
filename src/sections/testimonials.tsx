"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Em 3 meses perdi 8kg e o inchaço que me incomodava há anos simplesmente sumiu. O acompanhamento respeita minha rotina corrida.",
    highlight: "-8kg em 3 meses",
  },
  {
    name: "Fernanda L.",
    text: "Já tinha tentado tantas dietas que desisti. Com a Jennifer finalmente entendi que não precisava cortar tudo. Minha disposição mudou!",
    highlight: "Mais energia",
  },
  {
    name: "Camila R.",
    text: "O acompanhamento fez toda diferença. Não é só dieta, é um cuidado real. Perdi 6kg e hoje me sinto confiante de novo.",
    highlight: "-6kg transformação",
  },
  {
    name: "Patricia M.",
    text: "Finalmente um método que respeita meu corpo de mulher. Entendi meu ciclo, meu inchaço, e trabalhei a favor do meu metabolismo.",
    highlight: "Respeita o ciclo",
  },
  {
    name: "Juliana A.",
    text: "As receitas são deliciosas e práticas. Minha família toda começou a comer melhor junto comigo. Não sinto que estou de dieta.",
    highlight: "Receitas práticas",
  },
  {
    name: "Renata C.",
    text: "O suporte no WhatsApp é incrível. Sempre que tive dúvidas, fui respondida rapidamente. Me senti acolhida do início ao fim.",
    highlight: "Suporte diário",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Depoimentos Reais
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4 text-balance">
            Mulheres que transformaram sua relação com a comida
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Histórias reais de pacientes que encontraram no acompanhamento
            o caminho para uma vida saudável sem dietas restritivas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/20 mb-3" />

                <p className="text-foreground/90 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Os resultados variam de pessoa para pessoa. Acompanhamento personalizado respeita a individualidade de cada paciente.
          </p>
        </div>
      </div>
    </section>
  );
}
