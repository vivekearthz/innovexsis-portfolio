import { Link } from "react-router-dom";
import { ArrowRight, Github, Star, GitFork, Box, Zap, Sparkles, TrendingUp } from "lucide-react";
import { projects, stats } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const recent = [...projects].sort((a, b) => {
    const aDate = a.repos.map((r) => r.updated).sort().pop() || "";
    const bDate = b.repos.map((r) => r.updated).sort().pop() || "";
    return bDate.localeCompare(aDate);
  }).slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] blur-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.15), rgba(6,182,212,0.08), transparent)" }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-20 blur-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.3), transparent)" }} />

        <div className="container-max section-padding py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700/60 bg-ink-900/40 backdrop-blur-sm text-xs font-medium text-ink-300 mb-8 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-accent-400" />
              {stats.totalRepos} repositories · {stats.totalProjects} project families · Patch {stats.latestPatch}
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.02] animate-fade-in-up text-balance">
              Building the
              <span className="gradient-text"> future</span>,
              <br />
              one repo at a time.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-ink-400 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
              Innovexsis is an ecosystem of AI-powered products spanning PropTech, GovTech,
              DevTools, AI companions, and automation infrastructure. Explore {stats.totalProjects}{" "}
              project families across {stats.totalRepos} repositories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <Link
                to="/projects"
                className="group flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 rounded-xl hover:shadow-glow transition-all"
              >
                Explore all projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/vivekearthz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 text-base font-medium text-ink-200 border border-ink-700 hover:border-ink-600 hover:text-white rounded-xl transition-all"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up animate-delay-500">
            {[
              { icon: Box, label: "Project Families", value: stats.totalProjects, color: "text-brand-400" },
              { icon: Github, label: "Repositories", value: stats.totalRepos, color: "text-accent-400" },
              { icon: Zap, label: "Active Projects", value: stats.activeProjects, color: "text-success-400" },
              { icon: TrendingUp, label: "Categories", value: stats.categories, color: "text-warning-400" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5">
                <stat.icon className={`h-5 w-5 ${stat.color} mb-3`} />
                <div className="font-display text-3xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs text-ink-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-max section-padding py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-4">
              <Star className="h-3.5 w-3.5 text-warning-400" />
              Featured
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Flagship projects
            </h2>
            <p className="mt-3 text-ink-400 max-w-xl">
              Our most active and impactful products, each with its own dedicated page.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition"
          >
            View all {stats.totalProjects}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Recently Updated */}
      <section className="container-max section-padding py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-4">
              <GitFork className="h-3.5 w-3.5 text-accent-400" />
              Recently Active
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Recently updated
            </h2>
            <p className="mt-3 text-ink-400 max-w-xl">
              Projects with the most recent repository activity across the fleet.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-ink-700 hover:border-ink-600 rounded-xl transition-all"
          >
            Browse all {stats.totalProjects} projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}