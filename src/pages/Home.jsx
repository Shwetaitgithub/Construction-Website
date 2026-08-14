import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Ruler,
  ShieldCheck,
  HardHat,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    type: "Residential",
    title: "The Courtyard House",
    location: "Pune, Maharashtra",
    description:
      "A warm contemporary residence designed around light, concrete and landscaped courtyards.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Commercial",
    title: "Axis Business Centre",
    location: "Mumbai, Maharashtra",
    description:
      "A clean commercial development combining efficient planning with a bold architectural facade.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Hospitality",
    title: "Stoneleaf Retreat",
    location: "Lonavala, Maharashtra",
    description:
      "A boutique retreat focused on natural materials, landscape and seamless indoor-outdoor living.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
];

function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#24211d] text-white">

        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#c96f43]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-[#e7b85c]">
              <HardHat size={17} />
              Construction • Architecture • Design
            </div>

            <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
              We Build
              <span className="block text-[#e7b85c]">
                More Than
              </span>
              Spaces.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              From first sketch to final handover, Buildora creates
              thoughtful buildings that are made to last.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c96f43] px-6 py-3.5 font-bold text-white transition hover:bg-[#b96037]"
              >
                Explore Projects
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white hover:bg-white/10"
              >
                Start a Conversation
              </Link>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://www.constructionsupplymagazine.com/cdn/shop/articles/Green_Building_and_Sustainable_Construction__How_U.S._Contractors_Are_Meeting_the_Demand_1_1200x1200.jpg?v=1771462612"
                alt="Modern construction project"
                className="h-[430px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-2xl bg-[#f4f0e8] p-5 text-[#24211d] shadow-2xl sm:left-8">

              <p className="text-3xl font-black">
                15+
              </p>

              <p className="mt-1 text-sm font-bold text-[#716a61]">
                Years Building
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#e7b85c] text-[#24211d]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          <div className="border-b border-black/10 px-5 py-8 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-black">120+</p>
            <p className="mt-1 text-sm font-semibold">Projects Delivered</p>
          </div>

          <div className="border-b border-black/10 px-5 py-8 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-black">3.2M+</p>
            <p className="mt-1 text-sm font-semibold">Sq. Ft. Built</p>
          </div>

          <div className="border-b border-black/10 px-5 py-8 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-black">97%</p>
            <p className="mt-1 text-sm font-semibold">On-Time Delivery</p>
          </div>

          <div className="px-5 py-8 text-center">
            <p className="text-3xl font-black">4.9/5</p>
            <p className="mt-1 text-sm font-semibold">Client Rating</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="What We Do"
            title="Construction, but with a sharper point of view."
            description="We combine engineering discipline, thoughtful planning and architectural thinking across every stage of a project."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Building2,
                number: "01",
                title: "Residential",
                text: "Homes, villas and private residences designed around how people actually live.",
              },
              {
                icon: Ruler,
                number: "02",
                title: "Commercial",
                text: "Functional offices, retail spaces and commercial buildings with strong identity.",
              },
              {
                icon: HardHat,
                number: "03",
                title: "Renovation",
                text: "Thoughtful upgrades that refresh existing spaces without losing their character.",
              },
              {
                icon: ShieldCheck,
                number: "04",
                title: "Project Management",
                text: "End-to-end coordination focused on quality, timelines and transparent execution.",
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-2 hover:bg-[#24211d] hover:text-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-[#f4f0e8] p-3 text-[#c96f43] group-hover:bg-white/10">
                      <Icon size={25} />
                    </div>

                    <span className="text-sm font-black text-[#b2aaa0] group-hover:text-[#e7b85c]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#716a61] group-hover:text-white/60">
                    {service.text}
                  </p>

                  <ArrowUpRight className="mt-6 text-[#c96f43] group-hover:text-[#e7b85c]" />
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FEATURE PROJECT */}
      <section className="bg-[#24211d] px-5 py-20 text-white lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
              alt="Featured construction project"
              className="h-[480px] w-full object-cover"
            />
          </div>

          <div>

            <p className="text-sm font-black uppercase tracking-[3px] text-[#e7b85c]">
              Featured Project
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Architecture that feels intentional.
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              Our projects are designed around material honesty,
              intelligent planning and long-term usability. Every detail
              has a reason to exist.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="border-t border-white/15 pt-4">
                <p className="text-2xl font-black">18 Mo.</p>
                <p className="text-sm text-white/45">Build Time</p>
              </div>

              <div className="border-t border-white/15 pt-4">
                <p className="text-2xl font-black">48,000</p>
                <p className="text-sm text-white/45">Sq. Ft.</p>
              </div>

              <div className="border-t border-white/15 pt-4">
                <p className="text-2xl font-black">A+</p>
                <p className="text-sm text-white/45">Energy Rating</p>
              </div>

              <div className="border-t border-white/15 pt-4">
                <p className="text-2xl font-black">2026</p>
                <p className="text-sm text-white/45">Completed</p>
              </div>

            </div>

            <Link
              to="/portfolio"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e7b85c] px-6 py-3.5 font-bold text-[#24211d] hover:bg-[#f0c66d]"
            >
              View Portfolio
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <SectionTitle
              eyebrow="Selected Work"
              title="Projects with personality."
              description="A selection of residential, commercial and hospitality work."
            />

            <Link
              to="/projects"
              className="mb-12 inline-flex items-center gap-2 font-bold text-[#c96f43]"
            >
              All Projects
              <ArrowUpRight size={18} />
            </Link>

          </div>

          <div className="grid gap-7 lg:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#eee7db] px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Our Process"
            title="From idea to handover, clearly."
            description="A straightforward project journey keeps communication simple and decisions informed."
          />

          <div className="grid gap-6 md:grid-cols-4">

            {[
              ["01", "Discover", "We understand your goals, site and budget."],
              ["02", "Design", "We shape the concept, plans and material direction."],
              ["03", "Build", "Our teams coordinate execution with quality controls."],
              ["04", "Handover", "We complete, inspect and hand over your finished space."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t-2 border-[#24211d] pt-5">
                <span className="text-sm font-black text-[#c96f43]">
                  {number}
                </span>

                <h3 className="mt-3 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#70695f]">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#c96f43] px-7 py-14 text-white md:px-12">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-black uppercase tracking-[3px] text-white/70">
                Start Something Great
              </p>

              <h2 className="mt-3 max-w-2xl text-4xl font-black md:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-xl text-white/75">
                Tell us what you're planning and we'll help you turn
                the idea into a clear next step.
              </p>
            </div>

            <Link
              to="/enquiry"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-[#24211d] px-7 py-4 font-bold text-white hover:bg-black"
            >
              Send Enquiry
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;