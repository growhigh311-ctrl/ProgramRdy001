import type { Metadata } from "next";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Accordion } from "@/components/Accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Olympics 2028: LA Games & Cricket's Big Return",
  description:
    "The 2028 Olympics in Los Angeles run 14–30 July — and cricket returns after 128 years. Dates, cricket format, qualification and what Indian fans need to know.",
  alternates: {
    canonical: "https://www.reddyreal.guru/olympics-2028-cricket/",
  },
  openGraph: {
    title: "Olympics 2028: LA Games & Cricket's Big Return",
    description:
      "The 2028 Olympics in Los Angeles run 14–30 July — and cricket returns after 128 years. Dates, cricket format, qualification and what Indian fans need to know.",
    url: "https://www.reddyreal.guru/olympics-2028-cricket/",
    siteName: "Reddy Anna Book",
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympics 2028: LA Games & Cricket's Big Return",
    description:
      "The 2028 Olympics in Los Angeles run 14–30 July — and cricket returns after 128 years. Dates, cricket format, qualification and what Indian fans need to know.",
  },
};

export default function OlympicsCricketPage() {
  const faqItems = [
    {
      question: "Where are the 2028 Olympics being held?",
      answer:
        "The 2028 Olympic Games will be held in Los Angeles, California, from July 14 to July 30. The city will host the Olympics for the third time in its history, after 1932 and 1984.",
    },
    {
      question: "Is cricket in the 2028 Olympics?",
      answer:
        "Yes, the 2028 Los Angeles Olympic Games will feature men's and women's T20 cricket tournaments — the first Olympic cricket since 1900.",
    },
    {
      question: "How many teams will compete in the 2028 Olympic cricket tournaments?",
      answer:
        "According to the announced structure, there will be six teams in each tournament, men's and women's. The qualification race will be fierce as a result.",
    },
    {
      question: "Who are the reigning Olympic champions in cricket?",
      answer:
        "Great Britain, who won the only cricket match ever played at the Olympics — beating France in Paris in 1900.",
    },
    {
      question: "Where will the Olympic cricket matches be held?",
      answer:
        "The venue has not been officially confirmed. Reports point to the Fairplex sports complex in Pomona, near Los Angeles, where Major League Cricket matches are already played — treat it as reported rather than official until the organisers confirm.",
    },
    {
      question: "What other sports feature at Los Angeles 2028?",
      answer:
        "Flag football, squash, lacrosse and baseball/softball also join the Olympic program.",
    },
  ];

  const sportsEventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Cricket at the 2028 Summer Olympics (LA28)",
    "description": "Men's and women's T20 cricket tournaments at the 2028 Summer Olympics in Los Angeles.",
    "startDate": "2028-07-14",
    "endDate": "2028-07-30",
    "location": {
      "@type": "Place",
      "name": "Fairplex, Pomona (reported)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pomona",
        "addressRegion": "CA",
        "addressCountry": "USA",
      },
    },
    "sport": "Cricket",
    "eventStatus": "https://schema.org/EventScheduled",
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          {/* Main Article Banner & H1 */}
          <section className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h1 className="text-[#AEEA00] font-black text-2xl md:text-4xl tracking-wide leading-tight">
              Olympics 2028: LA Games and Cricket's Big Return
            </h1>

            {/* Jump links */}
            <div className="bg-[#05080f]/50 border border-[#00C853]/10 rounded-2xl p-4 flex flex-wrap gap-4 text-xs md:text-sm font-bold text-gray-300">
              <span className="text-[#AEEA00]">Jump to:</span>
              <a href="#summary" className="hover:text-amber-300 transition-colors">
                Summary
              </a>
              <span className="text-gray-600">|</span>
              <a href="#cricket-return" className="hover:text-amber-300 transition-colors">
                Cricket's Return
              </a>
              <span className="text-gray-600">|</span>
              <a href="#format-qualification" className="hover:text-amber-300 transition-colors">
                Format & Qualification
              </a>
              <span className="text-gray-600">|</span>
              <a href="#matters-for-india" className="hover:text-amber-300 transition-colors">
                Why It Matters for India
              </a>
              <span className="text-gray-600">|</span>
              <a href="#faqs" className="hover:text-amber-300 transition-colors">
                FAQs
              </a>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The 2028 Summer Olympics takes place across Los Angeles, USA, between 14th and 30th July
              2028, and it has a special place in the hearts of cricket fans. For the first time since
              1900 — when Great Britain defeated France in the only Olympic cricket match ever played, back
              in Paris — the Olympics will include cricket. That 128-year wait ends in{" "}
              <Link
                href="/t20-world-cup-winners-list/"
                className="text-[#00ccff] hover:underline font-bold"
              >
                T20 format
              </Link>{" "}
              on American soil.
            </p>
          </section>

          {/* Section: Summary Table */}
          <section
            id="summary"
            className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black"
          >
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              Olympics 2028: Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-semibold border-separate border-spacing-y-2 text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#AEEA00] text-black font-extrabold">
                    <th className="p-3.5 rounded-l-xl">Detail</th>
                    <th className="p-3.5 rounded-r-xl">Information</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  <tr className="bg-[#05080f] border-b border-[#00C853]/5">
                    <td className="p-3.5 rounded-l-xl font-bold border-l-4 border-[#00C853]">Host City</td>
                    <td className="p-3.5 rounded-r-xl">Los Angeles, USA</td>
                  </tr>
                  <tr className="bg-[#05080f] border-b border-[#00C853]/5">
                    <td className="p-3.5 rounded-l-xl font-bold border-l-4 border-[#00C853]">Dates</td>
                    <td className="p-3.5 rounded-r-xl">14th to 30th July 2028</td>
                  </tr>
                  <tr className="bg-[#05080f] border-b border-[#00C853]/5">
                    <td className="p-3.5 rounded-l-xl font-bold border-l-4 border-[#00C853]">
                      Cricket format
                    </td>
                    <td className="p-3.5 rounded-r-xl">
                      T20 men's and women's tournaments with six participating teams each
                    </td>
                  </tr>
                  <tr className="bg-[#05080f] border-b border-[#00C853]/5">
                    <td className="p-3.5 rounded-l-xl font-bold border-l-4 border-[#00C853]">Venue</td>
                    <td className="p-3.5 rounded-r-xl">Fairplex, Pomona (reported — to be confirmed)</td>
                  </tr>
                  <tr className="bg-[#05080f] border-b border-[#00C853]/5">
                    <td className="p-3.5 rounded-l-xl font-bold border-l-4 border-[#00C853]">
                      Last time cricket was played
                    </td>
                    <td className="p-3.5 rounded-r-xl">Great Britain beat France in Paris in 1900</td>
                  </tr>
                  <tr className="bg-[#05080f]">
                    <td className="p-3.5 rounded-l-xl font-bold border-l-4 border-[#00C853]">
                      New/returning sports
                    </td>
                    <td className="p-3.5 rounded-r-xl">
                      Cricket, flag football, squash, lacrosse, baseball/softball
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Cricket at the Olympics */}
          <section
            id="cricket-return"
            className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black"
          >
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              Cricket at the Olympics: After 128 Years
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              In 1900, the first and only cricket match at the Olympic Games was played between two amateur
              club sides in Paris. Great Britain earned the gold medals and have held the title for 128 years.
              Cricket will be back on the program at the 2028 Olympics in Los Angeles as part of the sport's
              push into the US market. It marks a symbolic link between American and global cricket, with the
              reported venue at Fairplex, Pomona — a familiar name to anyone following Major League Cricket,
              whose matches are already played there. In other words,{" "}
              <Link
                href="/mlc-2026-major-league-cricket/"
                className="text-[#00ccff] hover:underline font-bold"
              >
                MLC
              </Link>{" "}
              fans have been watching Olympic cricket's warm-up act.
            </p>
          </section>

          {/* Section: Tournaments Format & Qualification */}
          <section
            id="format-qualification"
            className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black"
          >
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              Tournaments: Format and Qualification
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The men's and women's tournaments will follow a six-team T20 format, which means the
              qualification process will be exceptionally intriguing. The pathway —{" "}
              <Link href="/icc-team-rankings/" className="text-[#00ccff] hover:underline font-bold">
                rankings
              </Link>
              , qualifiers, or a combination — will be determined officially by the ICC and IOC, and there
              is genuine mystery about which teams will make the field. With only six spots in each
              tournament, at least one major cricket nation is guaranteed to miss out — a cliffhanger the
              sport has never had to face at a global event. This section will be updated with the confirmed
              pathway and qualified teams as announcements land.
            </p>
          </section>

          {/* Section: Why is it important to Indian fans */}
          <section
            id="matters-for-india"
            className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black"
          >
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              Why Is the LA 2028 Olympic Cricket Tournament So Important to Indian Fans?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              An Olympic gold in cricket would instantly rank among the most significant prizes in Indian
              sporting history — a first-ever chance at an Olympic medal in the country's most-followed game,
              and one India would enter as the format's dominant force. For Indian fans, it means a unique
              opportunity to see the sport on the biggest multi-sport stage in the world. The tournament falls
              between IPL seasons, and with Los Angeles 12.5 hours behind IST, many matches will land in Indian
              mornings — live viewing without staying up all night. This is why the 2028 Los Angeles Games are
              set to witness unprecedented cricket interest in India.
            </p>
          </section>

          {/* Section: FAQs */}
          <section
            id="faqs"
            className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black"
          >
            <h2 className="text-white font-extrabold text-xl md:text-2xl mb-2 tracking-wide border-b border-[#00C853]/10 pb-3 flex items-center gap-2">
              <span className="text-[#AEEA00]">❓</span> Olympics 2028 FAQs
            </h2>
            <Accordion items={faqItems} />
          </section>

          {/* Date Stamp */}
          <div className="text-xs text-gray-500 font-semibold mt-4 px-4">
            Last updated: 14 July 2026. Venue and qualification details to be confirmed on official
            IOC/ICC announcements; this page updates as they land.
          </div>
        </div>
      </div>
    </div>
  );
}
