import {
  Building2,
  Ruler,
  HardHat,
  ShieldCheck,
  Paintbrush,
  ClipboardCheck,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

function Services() {
  const services = [
    {
      icon: Building2,
      title: "Residential Construction",
      text: "Custom homes, villas and multi-unit residences built around your lifestyle.",
    },
    {
      icon: Ruler,
      title: "Commercial Construction",
      text: "Workplaces, retail spaces and commercial buildings designed for performance.",
    },
    {
      icon: Paintbrush,
      title: "Interior & Renovation",
      text: "Carefully planned renovations that improve function, character and value.",
    },
    {
      icon: HardHat,
      title: "General Contracting",
      text: "Complete construction execution with coordinated teams and transparent milestones.",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      text: "Planning, scheduling, site coordination and quality control from start to finish.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      text: "Structured site practices that prioritize quality, safety and long-term durability.",
    },
  ];

  return (
    <main>

      <section className="bg-[#24211d] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[3px] text-[#e7b85c]">
            What We Do
          </p>

          <h1 className="mt-3 text-5xl font-black md:text-6xl">
            Services
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Capabilities"
            title="Everything needed to build with confidence."
            description="From planning and design coordination to execution and handover, we bring the right people and process together."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="w-fit rounded-2xl bg-[#eee7db] p-3 text-[#c96f43]">
                    <Icon size={28} />
                  </div>

                  <h2 className="mt-6 text-xl font-black">
                    {service.title}
                  </h2>

                  <p className="mt-3 leading-7 text-[#716a61]">
                    {service.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;