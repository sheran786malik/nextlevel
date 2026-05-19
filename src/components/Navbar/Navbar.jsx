import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [provisionsOpen, setProvisionsOpen] = useState(false);
  const [mobileProvisionsOpen, setMobileProvisionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "/about-us"],
    ["Curriculum", "/curriculum"],
    ["Safeguarding", "/safeguarding"],
    ["Policies", "/policies"],
    
  ];

  const provisionLinks = [
    ["EBSA Support", "/provisions/ebsa-support"],
    ["Alternative Provisions", "/provisions/alternative-provisions"],
    ["Supported Accommodation", "/provisions/supported-accommodation"],
    ["Bespoke Curriculum", "/provisions/bespoke-curriculum"],
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0D1F17]/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4BC72] font-serif text-xl text-[#E4BC72]">
            N
          </div>

          <div>
            <p className="font-serif text-xl leading-none text-white">
              Next Level
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#E4BC72]">
              Support Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.slice(0, 1).map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="rounded-md px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProvisionsOpen(true)}
            onMouseLeave={() => setProvisionsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-2 rounded-md px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              Provisions
              <span className="text-[10px] text-[#E4BC72]">▾</span>
            </button>

            {provisionsOpen && (
              <div className="absolute left-0 top-full w-72 rounded-2xl border border-black/5 bg-white p-2 shadow-2xl shadow-black/20">
                {provisionLinks.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setProvisionsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[#163826] transition hover:bg-[#D4EDE0] hover:text-[#1F5C3A]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.slice(1).map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="rounded-md px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </Link>
          ))}

          <a
            href="mailto:   admin@nextlevelplus.co.uk"
            className="ml-3 rounded-lg bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-5 py-3 text-sm font-semibold text-[#0D1F17] shadow-lg shadow-[#C5973A]/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get In Touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/15 px-3 py-2 text-white lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0D1F17]/98 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/#about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-serif text-2xl text-white hover:bg-white/10"
            >
              About
            </Link>

            <button
              type="button"
              onClick={() => setMobileProvisionsOpen(!mobileProvisionsOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-left font-serif text-2xl text-white hover:bg-white/10"
            >
              Provisions
              <span className="text-base text-[#E4BC72]">▾</span>
            </button>

            {mobileProvisionsOpen && (
              <div className="ml-4 flex flex-col border-l border-white/10 pl-4">
                {provisionLinks.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2 text-base text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {links.slice(1).map(([label, href]) => (
              <Link
                key={label}
                to={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-serif text-2xl text-white hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}