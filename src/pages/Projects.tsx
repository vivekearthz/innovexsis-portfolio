import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <div>
      {/* Header */}
      <section className="relative py-20 border-b border-ink-800/60">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-15 blur-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.3), transparent)" }} />

        <div className="container-max section-padding relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-6">
            <Filter className="h-3.5 w-3.5 text-accent-400" />
            {projects.length} project families · {categories.length} categories
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight">
            All <span className="gradient-text">projects</span>
          </h1>
          <p className="mt-4 text-lg text-ink-400 max-w-2xl">
            Every Innovexsis project family, each with its own history, highlights, and dedicated
            page. Filter by category or search by name, tech, or keyword.
          </p>

          {/* Search */}
          <div className="mt-8 relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, or keywords..."
              className="w-full pl-12 pr-4 py-3.5 bg-ink-900/60 border border-ink-700/60 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === "All"
                  ? "bg-brand-600 text-white"
                  : "bg-ink-900/60 text-ink-400 hover:text-white border border-ink-700/60"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-brand-600 text-white"
                    : "bg-ink-900/60 text-ink-400 hover:text-white border border-ink-700/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-max section-padding py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-ink-400 text-lg">No projects found matching your search.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-ink-500 mb-6">
              Showing {filtered.length} of {projects.length} projects
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}