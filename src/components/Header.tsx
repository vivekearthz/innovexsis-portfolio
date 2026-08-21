import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-ink-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-max section-padding flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-display font-bold text-white text-lg shadow-glow transition-transform group-hover:scale-105">
              I
            </div>
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 opacity-20 blur-md -z-10" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Innovexsis
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? "text-white bg-ink-800/60"
                    : "text-ink-400 hover:text-white hover:bg-ink-800/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/vivekearthz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink-300 hover:text-white border border-ink-700 hover:border-ink-600 rounded-lg transition-all"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 rounded-lg hover:shadow-glow transition-all"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink-300 hover:text-white"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-xl border-b border-ink-800/60 animate-fade-in">
          <nav className="section-padding py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-white bg-ink-800/60"
                      : "text-ink-400 hover:text-white hover:bg-ink-800/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://github.com/vivekearthz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium text-ink-400 hover:text-white flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}