"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Users, GraduationCap, Globe } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Community",
    description: "Regular events and meetups bringing enthusiasts together across Switzerland.",
  },
  {
    icon: Shield,
    title: "Legal Clarity",
    description: "Working to resolve open legal questions surrounding Bitcoin and blockchain.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Public education and serving as a contact point for media inquiries.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Paving the way for Bitcoin to flourish and unfold its full potential.",
  },
];

export function Mission() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-32 bg-[#0D1117] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3D9991]/30 to-transparent" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-[#3D9991]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3D9991]/10 border border-[#3D9991]/20 text-[#3D9991] text-sm font-medium uppercase tracking-wider mb-6">
            Our Purpose
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Our <span className="text-gradient-teal">Mission</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We form an active community of enthusiasts with regular events, try to resolve 
            open legal questions, and educate the public by providing a contact point for media inquiries.
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className={`max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#161B22] to-[#0D1117] border border-white/10 relative overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3D9991]/20 to-transparent" />
          
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed relative z-10">
            Bitcoin has the potential not only to revolutionize online payments, but also to 
            give control over their financial transactions and assets back to individuals, and 
            to serve as an asset with exceptionally strong property guarantees. Furthermore, 
            its technology has the potential to serve as a platform for countless other services 
            that can benefit from decentralized consensus and cryptographically secure tracking 
            of property.
          </p>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-[#D4A84B] font-medium italic">
              &ldquo;As an Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.&rdquo;
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group p-6 rounded-xl bg-[#161B22]/50 border border-white/5 hover:border-[#3D9991]/30 hover:bg-[#161B22] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#3D9991]/10 flex items-center justify-center mb-5 group-hover:bg-[#3D9991]/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-[#3D9991]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
