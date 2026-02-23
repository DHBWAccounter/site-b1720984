"use client";

import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";

interface LocationPartner {
  name: string;
  logo: string;
  url: string;
}

const locationPartners: LocationPartner[] = [
  {
    name: "Trust Square",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526644625552-BW81AAI2VT3SK71SIQPF/tr.jpg?format=300w",
    url: "https://www.trustsquare.ch/",
  },
  {
    name: "CV Labs",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1537969038775-2CPBS6A53NYZK5B0HW1Y/CV_Labs_Logo.png?format=300w",
    url: "https://www.cvlabs.com/",
  },
  {
    name: "FINANCE 2.0",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1597070217402-M7RUREYX7Q9I7SLT7PVY/unnamed.jpg?format=300w",
    url: "https://finance20.ch/",
  },
];

export function LocationPartnersSection() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3D9991]/10 border border-[#3D9991]/20 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#3D9991]" />
              <span className="text-xs text-[#3D9991] font-medium">Venues</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
              Location <span className="text-gradient-teal">Partners</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-md">
            Host venues for our events and meetups across Switzerland.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {locationPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-24 p-5 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:from-white/10 hover:to-white/5 hover:border-[#3D9991]/30 hover:shadow-lg">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-[#3D9991]/0 group-hover:bg-[#3D9991]/5 transition-colors duration-500" />
                
                <div className="relative h-full flex items-center justify-between gap-4">
                  {/* Logo */}
                  <div className="flex-1 flex items-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={40}
                      className="max-w-full max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      unoptimized
                    />
                  </div>
                  
                  {/* Arrow */}
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-[#3D9991] transition-colors duration-300 flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
