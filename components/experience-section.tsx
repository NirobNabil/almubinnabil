import { experienceList } from "@/data/experience-registry";


export default function ExperienceSection() {
  return (
    <section id="experience" className="content-max-width px-4 py-20 border-t border-foreground">
      <h2 className="brutalist-heading mb-12">WORK EXPERIENCE</h2>

      <div className="space-y-6">
        {experienceList.map((exp) => (
          <div key={exp.id} className="space-y-3 pb-6 border-b border-foreground last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="brutalist-heading">{exp.position}</h3>
                <p className="text-sm opacity-70">{exp.company}</p>
              </div>
              <span className="brutalist-label text-xs">{exp.period}</span>
            </div>

            <p className="text-sm leading-relaxed">
              {exp.description.split("\n").map( (section, i) => 
                <span key={i}>{section.trim()} <br/> </span> 
              )}
            </p>

            <div className="flex gap-2 flex-wrap">
              {exp.tags.map((tag) => (
                <span key={tag} className="brutalist-label text-xs border border-foreground px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
