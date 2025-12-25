import { opensourceList } from "@/data/opensource-registr"
import { ArrowBigRightDash, MoveRight } from "lucide-react"

export default function OpensourceSection() {
  return (
    <section id="opensource" className="content-max-width px-4 py-20 max-md:py-15 border-t border-foreground">
      <h2 className="brutalist-heading mb-12">Open source contributions</h2>

      <div className="space-y-6">
        {opensourceList.map((exp) => (
          <div key={exp.id} className="space-y-3 pb-6 border-b border-foreground last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="brutalist-heading">{exp.name}</h3>
              </div>
            </div>

            { exp.contributions.map((contribution, index) => (
              <p key={contribution.pr} className="text-sm leading-relaxed">
                - {contribution.description} {" "}
                <a href={contribution.pr} className="underline hover:opacity-60 transition-opacity text-nowrap">
                  Go to PR →
                </a>
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
