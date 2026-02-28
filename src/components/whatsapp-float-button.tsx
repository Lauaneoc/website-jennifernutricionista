"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+5511937539259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

export function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-40" />

        {/* Main button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Falar no WhatsApp
      </span>
    </a>
  );
}
