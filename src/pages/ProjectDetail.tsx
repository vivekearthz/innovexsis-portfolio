import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, Star, Calendar, CheckCircle2, Zap, GitBranch, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/projects";
import * as Icons from "lucide-react";

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  slate: { bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  lime: { bg: "bg-lime-500/10", text: "text-lime-400", border: "border-lime-500/20" },
  sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  zinc: { bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/20" },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container-max section-padding py-32 text-center">
        <h1 className="font-display text-3xl font-semibold text-white mb-4">Project not found</h1>
        <Link to="/projects" className="text-brand-400 hover:text-brand-300">
          Back to all projects
        </Link>
      </div>
    );
  }

  const colors = colorMap[project.color] || colorMap.blue;
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[project.icon] || Icons.Box;
  const sortedRepos = [...project.repos].sort((a, b) => b.updated.localeCompare(a.updated));
  const sortedHighlights = [...project.highlights].sort((a, b) => b.date.localeCompare(a.date));
  const totalStars = project.repos.reduce((s, r) => s + r.stars, 0);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 border-b border-ink-800/60">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-15 blur-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.3), transparent)" }} />

        <div className="container-max section-padding relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div className={`h-16 w-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0`}>
              <IconComponent className={`h-8 w-8 ${colors.text}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
                  {project.name}
                </h1>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  project.status === "Active" ? "bg-success-500/10 text-success-400 border border-success-500/20" :
                  project.status === "In Development" ? "bg-warning-500/10 text-warning-400 border border-warning-500/20" :
                  "bg-brand-500/10 text-brand-400 border border-brand-500/20"
                }`}>
                  {project.status}
                </span>
              </div>
              <p className={`text-lg ${colors.text} font-medium`}>{project.tagline}</p>
            </div>
          </div>

          <p className="text-lg text-ink-300 leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-4">
              <GitBranch className="h-5 w-5 text-brand-400 mb-2" />
              <div className="font-display text-2xl font-semibold text-white">{project.repos.length}</div>
              <div className="text-xs text-ink-500">Repositories</div>
            </div>
            <div className="glass-card p-4">
              <Star className="h-5 w-5 text-warning-400 mb-2" />
              <div className="font-display text-2xl font-semibold text-white">{totalStars}</div>
              <div className="text-xs text-ink-500">Stars</div>
            </div>
            <div className="glass-card p-4">
              <Calendar className="h-5 w-5 text-accent-400 mb-2" />
              <div className="font-display text-2xl font-semibold text-white">
                {project.repos[0]?.created.slice(0, 7)}
              </div>
              <div className="text-xs text-ink-500">Created</div>
            </div>
            <div className="glass-card p-4">
              <Zap className="h-5 w-5 text-success-400 mb-2" />
              <div className="font-display text-2xl font-semibold text-white">{project.category}</div>
              <div className="text-xs text-ink-500">Category</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 flex items-center gap-2 flex-wrap">
            <Code2 className="h-4 w-4 text-ink-500" />
            {project.tech.map((tech) => (
              <span key={tech} className="text-sm px-3 py-1.5 rounded-lg bg-ink-800/60 text-ink-300 border border-ink-700/40">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container-max section-padding py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left: Features */}
          <div className="lg:col-span-2 space-y-16">
            {/* Features */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-success-400" />
                Key features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="glass-card p-5 flex items-start gap-3">
                    <div className={`h-6 w-6 rounded-md ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0 mt-0.5`}>
                      <CheckCircle2 className={`h-4 w-4 ${colors.text}`} />
                    </div>
                    <p className="text-sm text-ink-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* History & Highlights */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-accent-400" />
                History &amp; highlights
              </h2>
              <div className="relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink-800" />
                <div className="space-y-6">
                  {sortedHighlights.map((highlight, i) => (
                    <div key={i} className="relative flex gap-4">
                      <div className={`h-8 w-8 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0 z-10`}>
                        <div className={`h-2 w-2 rounded-full ${colors.text.replace("text", "bg")}`} />
                      </div>
                      <div className="glass-card p-5 flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white">{highlight.title}</h3>
                          <span className="text-xs text-ink-500 font-mono">{highlight.date}</span>
                        </div>
                        <p className="text-sm text-ink-400 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right: Repositories */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Github className="h-6 w-6 text-ink-400" />
              Repositories
            </h2>
            <div className="space-y-3">
              {sortedRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 hover:border-ink-700 transition-all group block"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Github className="h-4 w-4 text-ink-500 shrink-0" />
                        <h3 className="text-sm font-medium text-white truncate group-hover:text-brand-400 transition">
                          {repo.name}
                        </h3>
                      </div>
                      {repo.description && (
                        <p className="text-xs text-ink-500 ml-6">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-3 mt-2 ml-6 text-xs text-ink-500">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stars}
                        </span>
                        <span>Created {repo.created}</span>
                        <span>Updated {repo.updated}</span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-ink-500 group-hover:text-white transition shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}