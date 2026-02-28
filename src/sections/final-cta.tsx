"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+5511937539259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Pronta para começar sua transformação?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Tire suas dúvidas diretamente com a Jennifer. Sem compromisso, sem pressão.
            A primeira conversa é sobre entender suas necessidades reais.
          </p>

          {/* Primary CTA */}
          <Button
            size="lg"
            className="text-base px-12 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            asChild
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              Conversar no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Trust note */}
          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Resposta em até 24 horas • CRN3-86946
          </p>
        </div>
      </div>
    </section>
  );
}
