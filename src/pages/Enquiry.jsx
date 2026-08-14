import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>

      <section className="bg-[#24211d] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[3px] text-[#e7b85c]">
            Contact
          </p>

          <h1 className="mt-3 text-5xl font-black md:text-6xl">
            Start a Project
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
            Tell us what you're planning and we'll help you shape the
            right next step.
          </p>

        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black">
              Let's talk about your project.
            </h2>

            <p className="mt-4 leading-7 text-[#716a61]">
              Whether it's a new home, commercial space or renovation,
              share a few details and our team will contact you.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="rounded-xl bg-white p-3 text-[#c96f43] shadow-sm ring-1 ring-black/5">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-bold">Call</p>
                  <p className="text-sm text-[#716a61]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white p-3 text-[#c96f43] shadow-sm ring-1 ring-black/5">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-sm text-[#716a61]">
                    hello@buildora.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white p-3 text-[#c96f43] shadow-sm ring-1 ring-black/5">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-bold">Studio</p>
                  <p className="text-sm text-[#716a61]">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 lg:col-span-3">

            {submitted ? (
              <div className="py-16 text-center">

                <CheckCircle2
                  size={55}
                  className="mx-auto text-green-600"
                />

                <h2 className="mt-5 text-3xl font-black">
                  Thank You
                </h2>

                <p className="mt-3 text-[#716a61]">
                  Your enquiry has been received. We'll contact you soon.
                </p>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid gap-5 md:grid-cols-2">

                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="rounded-xl border border-black/10 bg-[#f7f3ec] px-4 py-3.5 outline-none focus:border-[#c96f43]"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border border-black/10 bg-[#f7f3ec] px-4 py-3.5 outline-none focus:border-[#c96f43]"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border border-black/10 bg-[#f7f3ec] px-4 py-3.5 outline-none focus:border-[#c96f43]"
                  />

                  <select
                    required
                    className="rounded-xl border border-black/10 bg-[#f7f3ec] px-4 py-3.5 outline-none focus:border-[#c96f43]"
                  >
                    <option value="">Project Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Renovation</option>
                    <option>Hospitality</option>
                  </select>

                </div>

                <input
                  type="text"
                  placeholder="Approximate Budget"
                  className="w-full rounded-xl border border-black/10 bg-[#f7f3ec] px-4 py-3.5 outline-none focus:border-[#c96f43]"
                />

                <textarea
                  required
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f3ec] px-4 py-3.5 outline-none focus:border-[#c96f43]"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#24211d] px-5 py-4 font-bold text-white transition hover:bg-[#c96f43]"
                >
                  Send Enquiry
                  <Send size={18} />
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Enquiry;