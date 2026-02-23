"use client";

import Image from "next/image";
import { ExternalLink, Handshake } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "University of Basel",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520356559322-8UKNRYQO16Z2GTXPRAML/Uni-Basel.png?format=300w",
    url: "https://cif.unibas.ch/en/home/",
  },
  {
    name: "SICTIC",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1540280919184-RH9SE12KSTY2777PXEUT/sictic_logo.png?format=300w",
    url: "https://www.sictic.ch/",
  },
  {
    name: "Swiss Blockchain Federation",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1569996178809-N8448S1PPEBRDGJHT0E9/sbf.png?format=300w",
    url: "https://blockchainfederation.ch/",
  },
  {
    name: "Avalbit",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506741-Y72G6ITZERNQ8UOVVZLZ/a.png?format=300w",
    url: "https://avalbit.org/",
  },
  {
    name: "Hayekianer",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506913-WWZRVR2S1AD9U92L462X/hayek.png?format=300w",
    url: "https://hayekianer.ch/",
  },
  {
    name: "Swiss Finance Startups",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506935-BS73Y360VY3M5S58P3UC/sfs.png?format=300w",
    url: "https://www.swissfinancestartups.com/",
  },
  {
    name: "Swiss Fintech",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506110586651-SVS7P6PJWLFNRMGH85OK/sfta-logo-tiny.png?format=300w",
    url: "https://swissfinte.ch/",
  },
  {
    name: "Blockchain for Europe",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1618314774016-HWBC7ALLQEVOIVV6IXOD/logo_B4E_titre_Plan+de+travail+1+%284%29.png?format=300w",
    url: "https://www.blockchain4europe.eu/",
  },
];

export function PartnerOrganisationsSection() {
  return (
    <section className="relative py-20 bg-[#0a0d12]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A84B]/30 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/10 border border-[#D4A84B]/20 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-[#D4A84B]" />
            <span className="text-sm text-[#D4A84B] font-medium">Partnerships</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Partner <span className="text-gradient-gold">Organisations</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            The following organizations have chosen to support the work of the "Bitcoin Association Switzerland" (BAS) through various means and services, other than a corporate membership.
          </p>
          <p className="text-white/40 text-sm mt-4 italic">
            The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative h-28 p-5 bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#D4A84B]/30 hover:shadow-lg hover:shadow-[#D4A84B]/5">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A84B]/0 to-[#D4A84B]/0 group-hover:from-[#D4A84B]/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Logo */}
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={50}
                    className="max-w-full max-h-full object-contain filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    unoptimized
                  />
                </div>

                {/* External Link */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-3.5 h-3.5 text-[#D4A84B]" />
                </div>
              </div>
              
              {/* Name */}
              <div className="mt-3 text-center">
                <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
