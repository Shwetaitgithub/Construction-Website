import { Link } from "react-router-dom";
import {
  HardHat,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#24211d] text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#e7b85c] p-2.5 text-[#24211d]">
              <HardHat size={24} />
            </div>

            <h2 className="text-xl font-black">
              BUIL<span className="text-[#e7b85c]">DORA</span>
            </h2>
          </div>

          <p className="mt-5 leading-7 text-white/55">
            Building thoughtful spaces with strong engineering,
            honest craftsmanship and modern design.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Company</h3>

          <div className="flex flex-col gap-3 text-white/55">
            <Link to="/about" className="hover:text-[#e7b85c]">
              About Us
            </Link>

            <Link to="/projects" className="hover:text-[#e7b85c]">
              Projects
            </Link>

            <Link to="/portfolio" className="hover:text-[#e7b85c]">
              Portfolio
            </Link>

            <Link to="/services" className="hover:text-[#e7b85c]">
              Services
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Services</h3>

          <div className="flex flex-col gap-3 text-white/55">
            <p>Residential Construction</p>
            <p>Commercial Construction</p>
            <p>Interior & Renovation</p>
            <p>Project Management</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Contact</h3>

          <div className="space-y-4 text-white/55">

            <div className="flex gap-3">
              <Phone size={19} className="text-[#e7b85c]" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex gap-3">
              <Mail size={19} className="text-[#e7b85c]" />
              <span>hello@buildora.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin size={19} className="text-[#e7b85c]" />
              <span>Pune, Maharashtra, India</span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/35">
        © 2026 Buildora Construction Studio. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;