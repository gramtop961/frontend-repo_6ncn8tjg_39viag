export default function Showcase() {
  const works = [
    {
      title: "SaaS Marketing",
      tag: "Landing",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title: "E‑Commerce UI",
      tag: "Shop",
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "Portfolio 3D",
      tag: "Experience",
      color: "from-violet-500 to-pink-500",
    },
  ];

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
            <p className="text-gray-600 mt-2">A quick look at recent builds and concepts.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            View availability
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <div
              key={w.title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-40 rounded-xl bg-gradient-to-br ${w.color} mb-4`} />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{w.title}</h3>
                  <p className="text-xs text-gray-600">{w.tag}</p>
                </div>
                <span className="text-xs rounded-full bg-gray-900 text-white px-2 py-1">Case</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-[0] bottom-0 h-40 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
