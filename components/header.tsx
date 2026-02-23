"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "News",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland",
    external: true,
    children: [
      { label: "News", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland", external: true },
      { label: "Archive", href: "/archive", external: true },
    ],
  },
  {
    label: "Events",
    href: "#",
    children: [
      { label: "Roadshow 2025", href: "https://www.bitcoinassociation.ch/roadshow-2025", external: true },
      { label: "Meetup Zürich", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { label: "Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { label: "Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { label: "Meetup Neuchâtel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { label: "Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    label: "Membership",
    href: "#",
    children: [
      { label: "Private", href: "https://www.bitcoinassociation.ch/private", external: true },
      { label: "Corporate", href: "https://www.bitcoinassociation.ch/corporate", external: true },
      { label: "Our Corporate Members", href: "/our-corporate-members", external: true },
    ],
  },
  {
    label: "Participate",
    href: "https://www.bitcoinassociation.ch/meetups-events",
    external: true,
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About", href: "https://www.bitcoinassociation.ch/about-1", external: true },
      { label: "Board", href: "https://www.bitcoinassociation.ch/board", external: true },
      { label: "Finances", href: "https://www.bitcoinassociation.ch/finances", external: true },
      { label: "Statutes", href: "https://www.bitcoinassociation.ch/statutes", external: true },
      { label: "Media Kit", href: "https://www.bitcoinassociation.ch/media-kit", external: true },
      { label: "Contact", href: "https://www.bitcoinassociation.ch/contact-1", external: true },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-[#3D9991]/20 p-1 transition-all duration-300 group-hover:bg-[#3D9991]/30">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
                alt="Bitcoin Association Switzerland"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-serif text-lg font-semibold text-white hidden sm:block">
              Bitcoin Association
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 py-2 bg-[#161B22] border border-white/10 rounded-lg shadow-xl animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-[#3D9991] hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161B22] border-t border-white/10">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                    <span className="block px-3 py-2 text-sm font-medium text-white/60">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        rel={child.external ? "noopener noreferrer" : undefined}
                        className="block pl-6 pr-3 py-2 text-sm text-white/80 hover:text-[#3D9991]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-[#3D9991]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
