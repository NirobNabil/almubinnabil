import { awardsList } from "@/data/awards-registry"

export default async function AwardsSection() {

  return (
    <>
      <section id="awards" className="content-max-width px-4 py-20 max-md:py-15 border-t border-foreground">
        <h2 className="brutalist-heading mb-12">AWARDS</h2>

        <div className="space-y-4 grid grid-cols-2 max-md:grid-cols-2 gap-x-8 max-md:gap-x-4">
          {awardsList.map((award) => (
            <div key={award.name} >
                {award.name} <br/> <span className="text-sm opacity-70" >{award.position}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
