"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss winter landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/70 via-[#0D1117]/50 to-[#0D1117]" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3D9991]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#3D9991] animate-pulse" />
          <span className="text-sm text-white/80 tracking-wide uppercase">
            Switzerland&apos;s Premier Bitcoin Community
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
          <span className="text-white">Bitcoin</span>
          <br />
          <span className="text-gradient-teal">Association</span>
          <br />
          <span className="text-white/90">Switzerland</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light animate-fade-in-up delay-200">
          Empowering individuals through decentralized finance, 
          education, and community since 2014.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="https://www.bitcoinassociation.ch/meetups-events"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#3D9991] text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#3D9991]/25"
          >
            <span className="relative z-10">Join Our Community</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D9991] to-[#5BBDB5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://www.bitcoinassociation.ch/about-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 text-white/90 font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#mission" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
