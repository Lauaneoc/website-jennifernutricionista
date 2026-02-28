"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Leaf, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "+5511937539259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
const EMAIL = "Jennifercostanutri@gmail.com";

function FooterLogo() {
  const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    import("@/assets/logo2.jpeg")
      .then((mod) => setLogoSrc(mod.default))
      .catch(() => {});
  }, []);

  if (logoSrc) {
    return <img src={logoSrc} alt="Jennifer Nutri" className="h-10 w-auto object-contain" />;
  }

  return <Leaf className="w-6 h-6 text-primary" />;
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 md:px-6 py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand - 2 columns */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <FooterLogo />
              <span className="font-serif text-2xl font-semibold text-foreground">Jennifer Nutri</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Nutricionista especializada em saúde feminina. Acompanhamento personalizado
              para emagrecimento saudável e redução do inchaço.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/nutri.jennifer_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+55 11 93753-9259</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nutri.jennifer_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-sm">@nutri.jennifer_</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-sm text-muted-foreground hover:text-primary"
                >
                  Política de Privacidade
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* CRN */}
            <p className="text-sm text-muted-foreground">
              CRN3-86946 • Nutricionista Responsável: Jennifer
            </p>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jennifer Nutri. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
