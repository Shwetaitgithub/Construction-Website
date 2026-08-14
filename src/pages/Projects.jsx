import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    type: "Residential",
    title: "The Courtyard House",
    location: "Pune, Maharashtra",
    description: "Contemporary family residence with courtyard planning.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Commercial",
    title: "Axis Business Centre",
    location: "Mumbai, Maharashtra",
    description: "Modern business hub with an efficient floor plan.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Hospitality",
    title: "Stoneleaf Retreat",
    location: "Lonavala, Maharashtra",
    description: "Boutique retreat surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Residential",
    title: "Oakline Villa",
    location: "Nashik, Maharashtra",
    description: "Minimal villa designed around natural materials.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Commercial",
    title: "Forge Workspace",
    location: "Pune, Maharashtra",
    description: "Adaptive workspace built for modern businesses.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    type: "Hospitality",
    title: "Terracotta Stay",
    location: "Alibaug, Maharashtra",
    description: "Warm, earthy hospitality architecture.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
];

function Projects() {
  return (
    <main>

      <section className="bg-[#24211d] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[3px] text-[#e7b85c]">
            Our Work
          </p>

          <h1 className="mt-3 text-5xl font-black md:text-6xl">
            Projects
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
            Residential, commercial and hospitality spaces shaped with
            purpose and built with care.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

export default Projects;