import { Link } from "react-router-dom";
import { Github, Mail, ArrowUpRight } from "lucide-react";
import { stats } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/60 bg-ink-950 mt-20">
      <div className="container-max section-padding py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-display font-bold text-white text-lg">
                I
              </div>
              <span className="font-display text-lg font-semibold text-white">
                Innovexsis
              </span>
            </Link>
            <p className="text-sm text-ink-400 max-w-md leading-relaxed">
              Building AI-powered products and automation tools across PropTech, GovTech,
              DevTools, and more. {stats.totalRepos} repositories. {stats.totalProjects} project
              families. One unified ecosystem.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com/vivekearthz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg border border-ink-700 text-ink-400 hover:text-white hover:border-ink-600 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@innovexsis.com"
                className="flex items-center justify-center h-10 w-10 rounded-lg border border-ink-700 text-ink-400 hover:text-white hover:border-ink-600 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-ink-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-ink-400 hover:text-white transition">
                  All Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-ink-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-ink-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Ecosystem</h4>
            <ul className="space-y-3">
              <li className="text-sm text-ink-400">{stats.totalRepos} Repositories</li>
              <li className="text-sm text-ink-400">{stats.totalProjects} Project Families</li>
              <li className="text-sm text-ink-400">{stats.categories} Categories</li>
              <li className="text-sm text-ink-400">Patch {stats.latestPatch}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Innovexsis. All rights reserved.
          </p>
          <p className="text-xs text-ink-500 flex items-center gap-1.5">
            Innovexsis.com
            <ArrowUpRight className="h-3 w-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}