import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import * as Icons from "lucide-react";

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.3)]" },
  red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(239,68,68,0.3)]" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.3)]" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.3)]" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(245,158,11,0.3)]" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(244,63,94,0.3)]" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(6,182,212,0.3)]" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(20,184,166,0.3)]" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(234,179,8,0.3)]" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.3)]" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(236,72,153,0.3)]" },
  slate: { bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(100,116,139,0.3)]" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(249,115,22,0.3)]" },
  lime: { bg: "bg-lime-500/10", text: "text-lime-400", border: "border-lime-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(132,204,22,0.3)]" },
  sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(14,165,233,0.3)]" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(34,197,94,0.3)]" },
  zinc: { bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/20", glow: "group-hover:shadow-[0_0_30px_-8px_rgba(161,161,170,0.3)]" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const colors = colorMap[project.color] || colorMap.blue;
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[project.icon] || Icons.Box;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group glass-card ${colors.glow} hover:border-ink-700 transition-all duration-300 overflow-hidden flex flex-col`}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className={`h-12 w-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
            <IconComponent className={`h-6 w-6 ${colors.text}`} />
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            project.status === "Active" ? "bg-success-500/10 text-success-400 border border-success-500/20" :
            project.status === "In Development" ? "bg-warning-500/10 text-warning-400 border border-warning-500/20" :
            "bg-brand-500/10 text-brand-400 border border-brand-500/20"
          }`}>
            {project.status}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-brand-400 transition">
          {project.name}
        </h3>
        <p className={`text-xs font-medium ${colors.text} mb-3`}>{project.tagline}</p>
        <p className="text-sm text-ink-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-ink-800/60 text-ink-400 border border-ink-700/40">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs text-ink-500">+{project.tech.length - 3}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-ink-800/60">
          <div className="flex items-center gap-3 text-xs text-ink-500">
            <span className="flex items-center gap-1">
              <Github className="h-3.5 w-3.5" />
              {project.repos.length} repos
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {project.repos.reduce((s, r) => s + r.stars, 0)}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-brand-400 group-hover:gap-2 transition-all">
            View
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}