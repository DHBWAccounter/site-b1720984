"use client";

import { Heart, Bitcoin } from "lucide-react";

interface Donor {
  name: string;
  url?: string;
}

const donors: Donor[] = [
  { name: "Daniel Gutenberg", url: "http://www.gutenberg.ch/" },
  { name: "William Taborda" },
  { name: "Andre Drommershausen" },
  { name: "Thierry Fragniere", url: "https://thierryfragniere.ch/" },
];

export function GenerousDonorsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3D9991]/5 to-transparent" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/10 border border-[#D4A84B]/20 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#D4A84B]" />
              <span className="text-sm text-[#D4A84B] font-medium">Supporters</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Generous <span className="text-gradient-gold">Donors</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The following individuals donated 1 Bitcoin or more to support our mission:
            </p>
          </div>

          {/* Donors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {donors.map((donor, index) => (
              <a
                key={donor.name}
                href={donor.url}
                target={donor.url ? "_blank" : undefined}
                rel={donor.url ? "noopener noreferrer" : undefined}
                className="group"
              >
                <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl text-center transition-all duration-500 hover:bg-white/10 hover:border-[#D4A84B]/30 hover:shadow-lg hover:shadow-[#D4A84B]/10 hover:-translate-y-1">
                  {/* Bitcoin Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-[#D4A84B]/10 rounded-xl group-hover:bg-[#D4A84B]/20 transition-colors duration-300">
                    <Bitcoin className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-medium text-white group-hover:text-[#D4A84B] transition-colors duration-300">
                    {donor.name}
                  </h3>
                  
                  {/* Link indicator */}
                  {donor.url && (
                    <span className="block mt-2 text-xs text-white/30 group-hover:text-[#D4A84B]/60 transition-colors duration-300">
                      Visit website →
                    </span>
                  )}
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A84B]/0 to-[#D4A84B]/0 group-hover:from-[#D4A84B]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl">
              <p className="text-white/50 mb-4">
                Want to support our mission?
              </p>
              <a
                href="https://www.bitcoinassociation.ch/corporate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D9991] hover:bg-[#2D8078] text-white font-medium rounded-full transition-colors duration-300"
              >
                <Heart className="w-4 h-4" />
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
