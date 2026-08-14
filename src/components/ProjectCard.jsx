import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-[#24211d]/90 px-3 py-1.5 text-xs font-bold text-[#f4f0e8]">
          {project.type}
        </div>
      </div>

      <div className="p-6">

        <p className="text-xs font-bold uppercase tracking-[2px] text-[#c96f43]">
          {project.location}
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#24211d]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#716a61]">
          {project.description}
        </p>

        <button className="mt-5 inline-flex items-center gap-2 font-bold text-[#24211d] transition hover:text-[#c96f43]">
          View Project
          <ArrowUpRight size={17} />
        </button>

      </div>
    </div>
  );
}

export default ProjectCard;