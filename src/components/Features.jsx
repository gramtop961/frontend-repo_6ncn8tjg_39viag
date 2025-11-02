import { Shield, Zap, Sparkles, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    desc: "Optimized with modern tooling and best practices for speed.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    desc: "Production-ready patterns, accessibility and security baked in.",
  },
  {
    icon: Layers,
    title: "Composable",
    desc: "Clean architecture with reusable components and clear sections.",
  },
  {
    icon: Sparkles,
    title: "Delightful",
    desc: "Thoughtful micro-interactions and smooth animations throughout.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to launch with confidence
          </h2>
          <p className="mt-3 text-gray-600">
            We ship polished pages with robust foundations: performance, reliability, and style.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-[0] bottom-0 h-40 bg-gradient-to-t from-indigo-50 to-transparent" />
    </section>
  );
}
