import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Leaf,
} from "lucide-react";

function About() {
  return (
    <main>

      <section className="bg-[#24211d] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[3px] text-[#e7b85c]">
            About Buildora
          </p>

          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            We believe good construction should feel simple.
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
              alt="Construction team"
              className="h-[470px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[3px] text-[#c96f43]">
              Our Story
            </p>

            <h2 className="mt-3 text-4xl font-black">
              People, process and craftsmanship.
            </h2>

            <p className="mt-5 leading-8 text-[#716a61]">
              Buildora is a construction studio focused on delivering
              high-quality spaces through thoughtful planning, experienced
              teams and dependable execution.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="rounded-xl bg-[#eee7db] p-3 text-[#c96f43]">
                  <Users size={22} />
                </div>

                <div>
                  <h3 className="font-black">Experienced Team</h3>
                  <p className="mt-1 text-sm text-[#716a61]">
                    Skilled professionals across construction and project
                    management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-[#eee7db] p-3 text-[#c96f43]">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3 className="font-black">Quality Driven</h3>
                  <p className="mt-1 text-sm text-[#716a61]">
                    Clear quality checkpoints throughout every stage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-[#eee7db] p-3 text-[#c96f43]">
                  <Leaf size={22} />
                </div>

                <div>
                  <h3 className="font-black">Responsible Building</h3>
                  <p className="mt-1 text-sm text-[#716a61]">
                    Smarter materials and efficient planning wherever possible.
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/enquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#24211d] px-6 py-3.5 font-bold text-white hover:bg-[#c96f43]"
            >
              Work With Us
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;