"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface CorporateMember {
  name: string;
  logo: string;
  url: string;
  width?: number;
  height?: number;
}

const corporateMembers: CorporateMember[] = [
  {
    name: "BitBox",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1596551209231-6DTNGQPKB6CHPIPF3GRS/02b+db-BitBox+margin+bkg-transparent.png?format=300w",
    url: "https://shiftcrypto.ch/",
  },
  {
    name: "Bitcoin Suisse",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1539339845417-XB6KMLWHKWCXKYOIDQLL/full_logo_new.png?format=300w",
    url: "https://www.bitcoinsuisse.com/",
  },
  {
    name: "Blockchain Source",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728027563887-9D9OLHIZYI2BQQB4XUNH/logo-354x59.png?format=300w",
    url: "https://blockchainsource.ch/",
  },
  {
    name: "Crypto Finance",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1556548120132-FDRR0QNN1G4YMFDGJHJO/Crypto-Finance-logo.jpg?format=300w",
    url: "https://www.cryptofinance.ch/",
  },
  {
    name: "21 Analytics",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1594364557839-RTANLGKYTOHNW3W7DWNB/Logo.png?format=300w",
    url: "https://www.21analytics.ch/",
  },
  {
    name: "Tatoshi Services",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727654250834-4V6KRLIF5N1AROCN4JT1/Logo+Tatoshi+Services.png?format=300w",
    url: "https://tatoshi-services.com/",
  },
  {
    name: "Apps with love",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624207019607-RBOKOAIK9P121899L034/Awl_Logo_17_black_rgb.png?format=100w",
    url: "https://appswithlove.com/",
    width: 100,
  },
  {
    name: "Hodling",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624369670385-FICD1IXHLKO0KISG37QF/hodling-logo.png?format=300w",
    url: "https://hodling.ch/",
  },
  {
    name: "Alephium",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636130674575-E9EBWE86QJOH1R038Z47/image_2021-11-01_09-39-50.png?format=300w",
    url: "https://alephium.org/",
  },
  {
    name: "Aktionariat",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636188901843-LKE49EDOBMHBW0NQLD2V/Aktionariat.jpg?format=300w",
    url: "https://aktionariat.com/",
  },
  {
    name: "21 Lectures",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1681299724574-ROJH85FPQ8DDD36W8MKJ/yellow_black.png?format=300w",
    url: "https://www.21lectures.com/",
  },
  {
    name: "InCore Bank",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1765804013568-ON3P0X10SFU43PP1GCK9/InC_Logotype_rgb-hex-1749C6_0724.jpg?format=300w",
    url: "https://incorebank.ch/",
  },
  {
    name: "Pocket",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1738872657909-DN85KSD3N76MHRTHKACR/pocket-light.png?format=300w",
    url: "#",
  },
  {
    name: "House of Satoshi",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920586590-25CR1IXKQRR83AL62VQG/HoS.jpg?format=300w",
    url: "https://www.house-of-satoshi.ch/",
  },
  {
    name: "Berglinde",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920800707-V2WQ0NY7MCAMG4F5W79I/Berglinde.jpg?format=300w",
    url: "https://www.berglinde.com/",
  },
  {
    name: "Infinity21",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1771766238083-70VZ6HFUKSBB481Z1GYQ/Infinity21_Logo.png?format=300w",
    url: "https://infinity21.com/",
  },
  {
    name: "Saynode",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568467135-P6HCSME3M25YDVSLY0BS/Logo+Saynode+B+transparent+%282%29.png?format=100w",
    url: "https://www.saynode.ch/",
    width: 100,
  },
  {
    name: "Nym",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728216316012-B4YYGCSVJ9I6K23GTI9R/nym_1200x630-2dfd28cf.png?format=300w",
    url: "https://nymtech.net/",
  },
  {
    name: "Zeus ATM",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568701020-HLH119V9BFJEPE1P3GM3/Zeus+Logo+ohne+Claim%403x.png?format=300w",
    url: "https://zeusatm.ch/",
  },
  {
    name: "Bitcoin Schweiz",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727571196505-TICAF3KK9275JC9NJGRW/Logo+bitcoin-schweiz.ch.jpg?format=300w",
    url: "https://bitcoin-schweiz.ch/",
  },
  {
    name: "Lamassu",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1730642437107-NM6E7FDWMOGHSA5DJ1H9/logo-atms-colored-b-320px.png?format=300w",
    url: "https://lamassu.is/",
  },
  {
    name: "Scholarium",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734428968346-05XILAMCMAT5R1B5GQ4C/scholarium-logo.png?format=300w",
    url: "http://scholarium.at/",
  },
  {
    name: "House of Test Swiss",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734444147758-EDKRGTOED8C3F698QV1L/hot-logotype-black-rebels.png?format=300w",
    url: "https://www.houseoftest.ch/",
  },
  {
    name: "Relai",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1736800666643-VZ8Z4HLZQD4QEZN5FGMM/Relai_Julian+Liniger_.png?format=300w",
    url: "https://relai.app/",
  },
  {
    name: "Nakamochi",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1741777487636-80VAQDB2JONCFEZ3M4XW/nakamochi-logo-black.png?format=300w",
    url: "https://nakamochi.io/",
  },
  {
    name: "Bittr",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/55fed4e7-3b42-4487-8653-cf50ca3fe23c/bittr_logo_dark%402x.png?format=300w",
    url: "https://getbittr.com/",
  },
  {
    name: "Unita Finance",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742910303034-A4PS8AGV0RLXQ0RU5EC7/unita.jpg?format=300w",
    url: "https://unitafinance.ch/",
  },
  {
    name: "NiceHash",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1744446762941-RQH7Y2A8OZXB8Z1ESJH9/logo_big_light.png?format=300w",
    url: "https://www.nicehash.com/",
  },
  {
    name: "Pandora Prime",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1752831944031-GC9P7Z15VHE0EPSRTKU5/logo.png?format=300w",
    url: "https://pandoraprime.ch/",
  },
  {
    name: "BitVault",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1755722769067-OPN83O8PS2ETJIW4LY2G/BitVault-logo_transparent.png?format=300w",
    url: "https://www.bitvault.sv/",
  },
];

export function CorporateMembersSection() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Corporate <span className="text-gradient-gold">Members</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            The following organizations have chosen to support the work of the "Bitcoin Association Switzerland" (BAS) financially, through a corporate membership.
          </p>
          <p className="text-white/40 text-sm mt-4 italic">
            The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {corporateMembers.map((member, index) => (
            <a
              key={member.name}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-32 p-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#3D9991]/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3D9991]/10">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D9991]/0 to-[#3D9991]/0 group-hover:from-[#3D9991]/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Logo Container */}
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={member.logo}
                    alt={member.name}
                    width={member.width || 200}
                    height={60}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    unoptimized
                  />
                </div>

                {/* External Link Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-[#3D9991]" />
                </div>
              </div>
              
              {/* Company Name Tooltip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="px-3 py-1 bg-[#161B22] border border-white/10 rounded-full text-xs text-white/80 whitespace-nowrap">
                  {member.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
