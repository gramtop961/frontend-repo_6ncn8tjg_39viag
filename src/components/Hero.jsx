import Spline from "@splinetool/react-spline";
import { Sparkles, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              Tech • Portfolio • Interactive • Playful
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Build modern experiences that feel alive
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We craft high-performance web apps and delightful product sites. Explore our interactive hero built with 3D for a playful, modern vibe.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black"
              >
                Explore Features
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-50"
              >
                <PlayCircle size={18} />
                See it in action
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-3xl font-bold">120+</div>
              <p className="text-sm text-gray-600">Projects shipped with performance-first design.</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-[5/4] xl:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            {/* Interactive 3D Scene */}
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Gradient glow overlays (pointer-events none so 3D stays interactive) */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background gradient band */}
      <div className="pointer-events-none absolute inset-x-0 -z-[0] top-0 h-[700px] bg-gradient-to-b from-indigo-50 via-white to-transparent" />
    </section>
  );
}
