import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CorporateMembersSection } from "@/components/corporate-members-section";
import { PartnerOrganisationsSection } from "@/components/partner-organisations-section";
import { LocationPartnersSection } from "@/components/location-partners-section";
import { GenerousDonorsSection } from "@/components/generous-donors-section";

export const metadata: Metadata = {
  title: "Our Corporate Members — Bitcoin Association Switzerland",
  description: "Organizations supporting Bitcoin Association Switzerland through corporate membership, partnerships, and generous donations.",
};

export default function CorporateMembersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Hero */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-mesh" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3D9991]/50 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3D9991]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3D9991]/10 border border-[#3D9991]/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#3D9991] rounded-full animate-pulse" />
                <span className="text-sm text-[#3D9991] font-medium">Membership</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our <span className="text-gradient-teal">Corporate</span> Members
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Organizations supporting the work of Bitcoin Association Switzerland through corporate membership, partnerships, and generous contributions.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Members Grid */}
        <CorporateMembersSection />
        
        {/* Partner Organisations */}
        <PartnerOrganisationsSection />
        
        {/* Location Partners */}
        <LocationPartnersSection />
        
        {/* Generous Donors */}
        <GenerousDonorsSection />
      </main>
      <Footer />
    </>
  );
}
