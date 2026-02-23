"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChevronRight, Calendar, FileText, ExternalLink, Clock } from "lucide-react";

interface ArchiveEntry {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  href: string;
  isExternal?: boolean;
}

interface ArchiveMonth {
  monthYear: string;
  href: string;
  entries: ArchiveEntry[];
}

const archiveData: ArchiveMonth[] = [
  {
    monthYear: "December 2025",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2025",
    entries: [
      {
        id: "dec-2025-1",
        date: "2025-12-09",
        displayDate: "Dec 9, 2025",
        title: "Bitcoin in 10vor10",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10",
        isExternal: true,
      },
      {
        id: "dec-2025-2",
        date: "2025-12-09",
        displayDate: "Dec 9, 2025",
        title: "Marc Faber points readers to Bitcoin",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "May 2025",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2025",
    entries: [
      {
        id: "may-2025-1",
        date: "2025-05-31",
        displayDate: "May 31, 2025",
        title: "𝗦𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁 𝗼𝗻 𝘁𝗵𝗲 𝟭𝟮-𝗣𝗼𝗶𝗻𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗳𝗼𝗿 𝗮 𝗙𝗼𝗿𝘄𝗮𝗿𝗱-𝗟𝗼𝗼𝗸𝗶𝗻𝗴 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗖𝗲𝗻𝘁𝗲𝗿",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/-",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "February 2025",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=02-2025",
    entries: [
      {
        id: "feb-2025-1",
        date: "2025-02-28",
        displayDate: "Feb 28, 2025",
        title: "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "November 2024",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=11-2024",
    entries: [
      {
        id: "nov-2024-1",
        date: "2024-11-13",
        displayDate: "Nov 13, 2024",
        title: "Bitcoin Association Switzerland appoints new board, sets bold vision for the future",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "October 2024",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=10-2024",
    entries: [
      {
        id: "oct-2024-1",
        date: "2024-10-27",
        displayDate: "Oct 27, 2024",
        title: "Announcement from the Board of the Bitcoin Association Switzerland",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "August 2022",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=08-2022",
    entries: [
      {
        id: "aug-2022-1",
        date: "2022-08-10",
        displayDate: "Aug 10, 2022",
        title: "Prudential Treatment of Cryptoasset Exposures II",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2021",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2021",
    entries: [
      {
        id: "jun-2021-1",
        date: "2021-06-27",
        displayDate: "Jun 27, 2021",
        title: "Prudential Treatment of Cryptoasset Exposures",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "April 2021",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=04-2021",
    entries: [
      {
        id: "apr-2021-1",
        date: "2021-04-20",
        displayDate: "Apr 20, 2021",
        title: "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2020",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2020",
    entries: [
      {
        id: "jun-2020-1",
        date: "2020-06-20",
        displayDate: "Jun 20, 2020",
        title: "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "April 2020",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=04-2020",
    entries: [
      {
        id: "apr-2020-1",
        date: "2020-04-09",
        displayDate: "Apr 9, 2020",
        title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "March 2020",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=03-2020",
    entries: [
      {
        id: "mar-2020-1",
        date: "2020-03-13",
        displayDate: "Mar 13, 2020",
        title: "Our Comment on \"Designing a prudential treatment for cryptoassets\" of the Basel Committee on Banking Supervision",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "December 2019",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2019",
    entries: [
      {
        id: "dec-2019-1",
        date: "2019-12-03",
        displayDate: "Dec 3, 2019",
        title: "Crypto Valley Association Issues Questionable Recommendations",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2019",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2019",
    entries: [
      {
        id: "jun-2019-1",
        date: "2019-06-27",
        displayDate: "Jun 27, 2019",
        title: "Our Comment on the Swiss Blockchain Law",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "December 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2018",
    entries: [
      {
        id: "dec-2018-1",
        date: "2018-12-14",
        displayDate: "Dec 14, 2018",
        title: "On the Federal Council Report",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "September 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=09-2018",
    entries: [
      {
        id: "sep-2018-1",
        date: "2018-09-26",
        displayDate: "Sep 26, 2018",
        title: "Is the Ethereum system a legal subject?",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2018",
    entries: [
      {
        id: "jun-2018-1",
        date: "2018-06-01",
        displayDate: "Jun 1, 2018",
        title: "Why storing Bitcoins for clients does not make you a bank",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "May 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2018",
    entries: [
      {
        id: "may-2018-1",
        date: "2018-05-17",
        displayDate: "May 17, 2018",
        title: "Bitcoin Association Switzerland 2018: General Assembly",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "April 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=04-2018",
    entries: [
      {
        id: "apr-2018-1",
        date: "2018-04-19",
        displayDate: "Apr 19, 2018",
        title: "Better legal protection for clients of Bitcoin firms coming?",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "March 2018",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=03-2018",
    entries: [
      {
        id: "mar-2018-1",
        date: "2018-03-03",
        displayDate: "Mar 3, 2018",
        title: "The Latest Regulatory Threat",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "October 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=10-2017",
    entries: [
      {
        id: "oct-2017-1",
        date: "2017-10-31",
        displayDate: "Oct 31, 2017",
        title: "Bitcoin Gold - Do we need it and if yes, how many?",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj",
        isExternal: true,
      },
      {
        id: "oct-2017-2",
        date: "2017-10-02",
        displayDate: "Oct 2, 2017",
        title: "Tone Vays Meetup in Zurich September 2017",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "August 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=08-2017",
    entries: [
      {
        id: "aug-2017-1",
        date: "2017-08-09",
        displayDate: "Aug 9, 2017",
        title: "Self-made",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "July 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=07-2017",
    entries: [
      {
        id: "jul-2017-1",
        date: "2017-07-15",
        displayDate: "Jul 15, 2017",
        title: "Op Ed: Proof of Work, not Proof of Stake",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2017",
    entries: [
      {
        id: "jun-2017-1",
        date: "2017-06-10",
        displayDate: "Jun 10, 2017",
        title: "How to participate in the local Bitcoin community",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "May 2017",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2017",
    entries: [
      {
        id: "may-2017-1",
        date: "2017-05-15",
        displayDate: "May 15, 2017",
        title: "Our Regulatory Comment on the new Fintech-Regulation",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung",
        isExternal: true,
      },
      {
        id: "may-2017-2",
        date: "2017-05-14",
        displayDate: "May 14, 2017",
        title: "Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv",
        isExternal: true,
      },
      {
        id: "may-2017-3",
        date: "2017-05-13",
        displayDate: "May 13, 2017",
        title: "Welcoming new board members",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "August 2016",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=08-2016",
    entries: [
      {
        id: "aug-2016-1",
        date: "2016-08-05",
        displayDate: "Aug 5, 2016",
        title: "FinTech Made in Switzerland",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2016",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2016",
    entries: [
      {
        id: "jun-2016-1",
        date: "2016-06-20",
        displayDate: "Jun 20, 2016",
        title: "Swiss Move to Reduce Blockchain Regulation",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "December 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2014",
    entries: [
      {
        id: "dec-2014-1",
        date: "2014-12-05",
        displayDate: "Dec 5, 2014",
        title: "Talk at SIPUG day",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "June 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=06-2014",
    entries: [
      {
        id: "jun-2014-1",
        date: "2014-06-25",
        displayDate: "Jun 25, 2014",
        title: "Federal Council report: No special regulation needed",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed",
        isExternal: true,
      },
      {
        id: "jun-2014-2",
        date: "2014-06-15",
        displayDate: "Jun 15, 2014",
        title: "Miner's \"luck smoothing\" excuse does not hold up to scrutiny",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "May 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=05-2014",
    entries: [
      {
        id: "may-2014-1",
        date: "2014-05-07",
        displayDate: "May 7, 2014",
        title: "Finma comments on Bitcoin",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "February 2014",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=02-2014",
    entries: [
      {
        id: "feb-2014-1",
        date: "2014-02-25",
        displayDate: "Feb 25, 2014",
        title: "The MtGox debacle would not have happened in a free market",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market",
        isExternal: true,
      },
      {
        id: "feb-2014-2",
        date: "2014-02-17",
        displayDate: "Feb 17, 2014",
        title: "General Assembly 2014",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/02/17/general-assembly-2014",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "December 2013",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=12-2013",
    entries: [
      {
        id: "dec-2013-1",
        date: "2013-12-04",
        displayDate: "Dec 4, 2013",
        title: "Bitcoin in Echo der Zeit",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
        isExternal: true,
      },
    ],
  },
  {
    monthYear: "November 2013",
    href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?month=11-2013",
    entries: [
      {
        id: "nov-2013-1",
        date: "2013-11-08",
        displayDate: "Nov 8, 2013",
        title: "General Discussion Meetup",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
        isExternal: true,
      },
      {
        id: "nov-2013-2",
        date: "2013-11-07",
        displayDate: "Nov 7, 2013",
        title: "Bitcoin on RTS and Euronews",
        href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews",
        isExternal: true,
      },
    ],
  },
];

function ArchiveEntryCard({ entry, index }: { entry: ArchiveEntry; index: number }) {
  return (
    <a
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative flex gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#3D9991]/30 transition-all duration-300">
        {/* Date Badge */}
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#3D9991]/20 to-[#3D9991]/5 flex flex-col items-center justify-center border border-[#3D9991]/20">
          <span className="text-xs text-[#3D9991] font-medium">
            {entry.displayDate.split(" ")[0]}
          </span>
          <span className="text-sm text-white/80 font-semibold">
            {entry.displayDate.split(" ")[1].replace(",", "")}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white/90 font-medium leading-snug group-hover:text-[#3D9991] transition-colors line-clamp-2">
            {entry.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-xs text-white/40">
            <Clock className="w-3 h-3" />
            <span>{entry.displayDate}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <FileText className="w-3 h-3" />
            <span>News Article</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-5 h-5 text-[#3D9991]" />
        </div>
      </div>
    </a>
  );
}

function ArchiveMonthSection({ month, index }: { month: ArchiveMonth; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index < 6); // First 6 months expanded by default

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3D9991]/30 via-[#3D9991]/10 to-transparent" />

      {/* Month Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative z-10 flex items-center gap-4 w-full group mb-4"
      >
        {/* Timeline dot */}
        <div className="w-12 h-12 rounded-full bg-[#0D1117] border-2 border-[#3D9991]/30 flex items-center justify-center group-hover:border-[#3D9991] group-hover:bg-[#3D9991]/10 transition-all duration-300">
          <Calendar className="w-5 h-5 text-[#3D9991]" />
        </div>

        {/* Month Label */}
        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#3D9991] transition-colors">
              {month.monthYear}
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/60">
              {month.entries.length} {month.entries.length === 1 ? "article" : "articles"}
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>

      {/* Entries */}
      <div
        className={`ml-6 pl-10 space-y-3 overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? "max-h-[2000px] opacity-100 pb-8" : "max-h-0 opacity-0"
        }`}
      >
        {month.entries.map((entry, entryIndex) => (
          <div
            key={entry.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${entryIndex * 50}ms` }}
          >
            <ArchiveEntryCard entry={entry} index={entryIndex} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArchivePage() {
  const totalArticles = archiveData.reduce((sum, month) => sum + month.entries.length, 0);

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3D9991]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-[#3D9991] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="https://www.bitcoinassociation.ch/bitcoin-association-switzerland"
              className="hover:text-[#3D9991] transition-colors"
            >
              News
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#3D9991]">Archive</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              News <span className="text-gradient-teal">Archive</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed animate-fade-in-up delay-100">
              Browse our complete history of announcements, regulatory comments, and community updates from {archiveData[archiveData.length - 1].monthYear} to {archiveData[0].monthYear}.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8 animate-fade-in-up delay-200">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <FileText className="w-5 h-5 text-[#3D9991]" />
                <span className="text-white/80">
                  <strong className="text-white">{totalArticles}</strong> articles
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-5 h-5 text-[#D4A84B]" />
                <span className="text-white/80">
                  <strong className="text-white">{archiveData.length}</strong> months
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Timeline */}
      <section className="relative pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            {archiveData.map((month, index) => (
              <div
                key={month.monthYear}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArchiveMonthSection month={month} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
