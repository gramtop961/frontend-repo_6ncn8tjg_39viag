import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">ModernSoft</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              We design and engineer beautiful digital experiences for startups, creators, and bold brands.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="#home">Home</a></li>
              <li><a className="hover:underline" href="#features">Features</a></li>
              <li><a className="hover:underline" href="#work">Work</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Get in touch</h4>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 hover:bg-gray-50"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 hover:bg-gray-50"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 hover:bg-gray-50"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ModernSoft. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
