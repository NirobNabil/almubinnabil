const CREATIVE_WORKS = [
  {
    id: 1,
    title: "Music Cover Series",
    type: "Music",
    description: "Original covers of contemporary indie tracks",
    media: "Vocals & Guitar",
  },
  {
    id: 2,
    title: "Digital Illustrations",
    type: "Art",
    description: "Abstract and conceptual digital artwork",
    media: "Digital Painting",
  },
  {
    id: 3,
    title: "Photography",
    type: "Photography",
    description: "Street and landscape photography collection",
    media: "Black & White",
  },
  {
    id: 4,
    title: "Writing",
    type: "Writing",
    description: "Thoughts on design, technology, and creative process",
    media: "Essays & Notes",
  },
]

export default function CreativeWorksSection() {
  return (
    <section id="creative" className="content-max-width px-4 py-20 border-t border-foreground">
      <h2 className="brutalist-heading mb-12">CREATIVE WORKS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CREATIVE_WORKS.map((work) => (
          <div key={work.id} className="brutalist-border p-6 space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="brutalist-heading text-lg">{work.title}</h3>
              <span className="brutalist-label text-xs">{work.type}</span>
            </div>

            <p className="text-sm leading-relaxed">{work.description}</p>

            <p className="text-xs opacity-70">{work.media}</p>

            <a href="#" className="inline-block text-xs hover:opacity-60 transition-opacity">
              VIEW →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
