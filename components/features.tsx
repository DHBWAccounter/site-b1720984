"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "About",
    description: "Find out about our organization and mission. Learn who we are and what drives us forward.",
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    href: "https://www.bitcoinassociation.ch/about-1",
    external: true,
  },
  {
    title: "Join Us",
    description: "You can become a contributor to our cause, or participate yourself. Get involved in the Swiss Bitcoin community.",
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    href: "https://www.bitcoinassociation.ch/meetups-events",
    external: true,
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#161B22] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgzdjNIMzZ2LTN6bTYgMGgzdjNINDJ2LTN6bTYgMGgzdjNINDh2LTN6bTAgNmgzdjNINDh2LTN6bTAgNmgzdjNINDh2LTN6bTAgNmgzdjNINDh2LTN6bS02IDZoM3YzSDQydi0zem0tNiAwaDN2M0gzNnYtM3ptLTYgMGgzdjNIMzB2LTN6bS02IDBoM3YzSDI0di0zem0tNiAwaDN2M0gxOHYtM3ptLTYgMGgzdjNIMTJ2LTN6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A84B]/10 border border-[#D4A84B]/20 text-[#D4A84B] text-sm font-medium uppercase tracking-wider mb-6">
            Get Involved
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Explore <span className="text-gradient-gold">Our Work</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              href={feature.href}
              target={feature.external ? "_blank" : undefined}
              rel={feature.external ? "noopener noreferrer" : undefined}
              className={`group relative block overflow-hidden rounded-2xl bg-[#0D1117] border border-white/5 hover:border-[#3D9991]/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#3D9991] transition-colors">
                    {feature.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#3D9991]/20 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-[#3D9991] transition-colors" />
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-[#3D9991] font-medium group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#3D9991]/20 transition-colors pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
