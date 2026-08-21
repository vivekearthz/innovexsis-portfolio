import { useState } from "react";
import { Mail, MessageSquare, Send, Github, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 border-b border-ink-800/60">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-15 blur-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.3), transparent)" }} />

        <div className="container-max section-padding relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-700/60 bg-ink-900/40 text-xs font-medium text-ink-300 mb-6">
            <MessageSquare className="h-3.5 w-3.5 text-accent-400" />
            Get in touch
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight">
            Let's <span className="gradient-text">talk</span>.
          </h1>
          <p className="mt-4 text-lg text-ink-400 max-w-2xl">
            Have a question about an Innovexsis project, a partnership idea, or just want to
            connect? Send a message and we'll get back to you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="container-max section-padding py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-success-400 mx-auto mb-6" />
                <h2 className="font-display text-2xl font-semibold text-white mb-3">
                  Message sent
                </h2>
                <p className="text-ink-400 mb-8">
                  Thanks for reaching out. We'll get back to you at {form.email || "your email"} soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-3 text-sm font-medium text-white border border-ink-700 hover:border-ink-600 rounded-xl transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700/60 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700/60 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-300 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700/60 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700/60 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 rounded-xl hover:shadow-glow transition-all"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:hello@innovexsis.com"
              className="glass-card p-6 hover:border-ink-700 transition-all block group"
            >
              <Mail className="h-6 w-6 text-brand-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Email us</h3>
              <p className="text-sm text-ink-400 group-hover:text-brand-400 transition">
                hello@innovexsis.com
              </p>
            </a>

            <a
              href="https://github.com/vivekearthz"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover:border-ink-700 transition-all block group"
            >
              <Github className="h-6 w-6 text-accent-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">GitHub</h3>
              <p className="text-sm text-ink-400 group-hover:text-accent-400 transition">
                github.com/vivekearthz
              </p>
            </a>

            <div className="glass-card p-6">
              <MessageSquare className="h-6 w-6 text-success-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Response time</h3>
              <p className="text-sm text-ink-400">
                We typically respond within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}