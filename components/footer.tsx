"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ExternalLink } from "lucide-react";

const meetups = [
  { name: "Zürich", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/" },
  { name: "Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva" },
  { name: "Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/" },
  { name: "Neuchâtel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/" },
  { name: "Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/" },
];

const resources = [
  { name: "News", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland" },
  { name: "Archive", href: "/archive" },
  { name: "Roadshow 2025", href: "https://www.bitcoinassociation.ch/roadshow-2025" },
  { name: "About", href: "https://www.bitcoinassociation.ch/about-1" },
  { name: "Board", href: "https://www.bitcoinassociation.ch/board" },
];

const membership = [
  { name: "Private", href: "https://www.bitcoinassociation.ch/private" },
  { name: "Corporate", href: "https://www.bitcoinassociation.ch/corporate" },
  { name: "Corporate Members", href: "/our-corporate-members" },
];

const legal = [
  { name: "Finances", href: "https://www.bitcoinassociation.ch/finances" },
  { name: "Statutes", href: "https://www.bitcoinassociation.ch/statutes" },
  { name: "Media Kit", href: "https://www.bitcoinassociation.ch/media-kit" },
  { name: "Contact", href: "https://www.bitcoinassociation.ch/contact-1" },
];

const socials = [
  { name: "Meetup", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg" },
  { name: "X (Twitter)", href: "https://x.com/bitcoin_ch" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0D1117] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-[#3D9991]/20 p-1">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
                  alt="Bitcoin Association Switzerland"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-serif text-lg font-semibold text-white">
                Bitcoin Association
                <span className="block text-sm font-normal text-white/60">Switzerland</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering individuals through decentralized finance, education, and community since 2014.
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm text-white/60 hover:text-[#3D9991] bg-white/5 hover:bg-white/10 rounded-full transition-colors flex items-center gap-1.5"
                >
                  {social.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Meetups
            </h4>
            <ul className="space-y-2">
              {meetups.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#3D9991] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#3D9991] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Membership
            </h4>
            <ul className="space-y-2">
              {membership.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#3D9991] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#3D9991] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Bitcoin Association Switzerland. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.bitcoinassociation.ch/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.bitcoinassociation.ch/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Terms & Conditions
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
