import { Link } from "react-router-dom";
import { ArrowRight, Target, Layers, Rocket, Code2, Users, TrendingUp } from "lucide-react";
import { stats, categories } from "@/data/projects";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 border-b border-ink-800/60">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-15 blur-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.3), transparent)" }} />

        <div className="container-max section-padding relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-6">
            <Users className="h-3.5 w-3.5 text-accent-400" />
            About Innovexsis
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight max-w-3xl text-balance">
            A software studio building <span className="gradient-text">AI-powered products</span> at scale.
          </h1>
          <p className="mt-6 text-lg text-ink-400 max-w-2xl leading-relaxed">
            Innovexsis develops and maintains a fleet of {stats.totalRepos} repositories across{" "}
            {stats.totalProjects} project families. From property management to government grant
            automation, AI presenters to QA testing engines, we build products that solve real
            problems with intelligent automation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container-max section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Code2, label: "Total Repositories", value: stats.totalRepos, color: "text-brand-400" },
            { icon: Layers, label: "Project Families", value: stats.totalProjects, color: "text-accent-400" },
            { icon: Rocket, label: "Active Projects", value: stats.activeProjects, color: "text-success-400" },
            { icon: TrendingUp, label: "Categories", value: stats.categories, color: "text-warning-400" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-3`} />
              <div className="font-display text-4xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm text-ink-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container-max section-padding py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-4">
              <Target className="h-3.5 w-3.5 text-brand-400" />
              Our Mission
            </div>
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              Automate everything, own the infrastructure.
            </h2>
            <p className="text-ink-400 leading-relaxed">
              Every Innovexsis project is built with a fleet-first mindset. We don't just build
              one app — we build the automation, patching, and deployment infrastructure that
              keeps an entire ecosystem of products running in sync. Guardian patches, martech
              slave architecture, and canonical version control ensure consistency across{" "}
              {stats.totalRepos}+ repositories.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-4">
              <Layers className="h-3.5 w-3.5 text-accent-400" />
              Categories
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to="/projects"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-ink-900/60 text-ink-300 border border-ink-700/60 hover:border-brand-500/40 hover:text-white transition-all"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-max section-padding py-20">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.3), transparent)" }} />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Explore the full ecosystem
            </h2>
            <p className="text-ink-400 max-w-xl mx-auto mb-8">
              Browse all {stats.totalProjects} project families, each with its own dedicated page,
              history, and highlights.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 rounded-xl hover:shadow-glow transition-all"
            >
              View all projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}