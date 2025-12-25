import Link from "next/link";

export default function Hero() {
  return (
    <section className="content-max-width px-4 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="brutalist-title text-5xl mb-4">Al-Mubin Khan Nabil</h1>
          <p className="text-lg leading-relaxed max-w-xl"></p>
        </div>

        <div className="brutalist-border p-6 space-y-4">
          <p className="text-sm leading-relaxed">
            An engineer and researcher by heart and passion, solving problems and building systems using code since 2016.
          </p>

          <p className="text-sm leading-relaxed">
            <span className="brutalist-label">EDUCATION:</span> B.Sc in Computer Science and Engineering, SUST. CGPA - 3.77
          </p>

          <p className="text-sm leading-relaxed">
            <span className="brutalist-label">RESEARCHER:</span> LiDAR simulation research under the supervision of <a className="underline" href="https://www.umtri.umich.edu/people/arpan-kusari/">Dr. Arpan Kusari</a>, University of Michigan.
          </p>

          <p className="text-sm leading-relaxed">
            <span className="brutalist-label">RND ENGINEER:</span> Building pipeline for static analysis of source code at <a className="underline" href="https://krait.io">Krait.io</a>.
          </p>

          <div className="flex gap-6 text-xs">
            <div>
              <div className="brutalist-label">Links</div>
              <div className="space-y-1">
                <Link href="https://www.github.com/nirobnabil" className="block hover:opacity-60 transition-opacity">
                  GitHub →
                </Link>
                <Link href="https://www.linkedin.com/in/al-mubin-nabil-a43553197/" className="block hover:opacity-60 transition-opacity">
                  Linkedin →
                </Link>
              </div>
            </div>
            <div>
              <div className="brutalist-label">Contact</div>
              <div className="space-y-1">
                <a href="tel:+88018483333385" className="block hover:opacity-60 transition-opacity">
                  018483333385
                </a>
                <a href="mailto:almubinnabil@gmail.com" className="hover:opacity-60 transition-opacity">
                  almubinnabil@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
