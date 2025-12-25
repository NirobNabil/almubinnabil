"use client"

const navItems = [
  { label: "PROJECTS", href: "/#projects" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "OPENSOURCE", href: "/#opensource" },
  { label: "AWARDS", href: "/#awards" },
  { label: "CONTACT", href: "/#contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-black border-b border-black z-50">
      <div className="content-max-width px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="brutalist-title text-lg">
            <a href="/" className="hover:opacity-60 transition-opacity">
              Nabil
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="brutalist-label text-xs hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <details className="group">
              <summary className="cursor-pointer list-none text-lg font-bold">≡</summary>
              <div className="z-50 absolute right-4 top-12 bg-white border border-foreground p-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block brutalist-label text-xs hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  )
}
