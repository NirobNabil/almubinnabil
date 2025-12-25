import { experienceList } from "@/data/experience-registry";
import { FacebookIcon, GithubIcon, LinkedinIcon, PhoneIcon } from "lucide-react";


export default function ContactSection() {
  return (
    <section id="contact" className="content-max-width px-4 py-20 border-t border-foreground">
      <h2 className="brutalist-heading mb-12">CONTACT</h2>

      <div className="space-y-6">
        Find my CV at <a href="/content/John_Doe_CV.pdf" className="underline hover:opacity-60 transition-opacity text-nowrap">this link</a>.<br/>
        <br/>
        You can also reach me at:
        <div className="flex gap-x-4 mt-2 py-2" >
        <a href="https://github.com/nirobnabil" className="bg-background hover:bg-foreground border rounded-full p-2">
          <GithubIcon className="inline" />
        </a>
        <a href="https://linkedin.com/in/al-mubin-nabil-a43553197/" className="bg-background hover:bg-foreground border rounded-full p-2">
          <LinkedinIcon className="inline" />
        </a>
        <a href="https://facebook.com/almubin.nabil" className="bg-background hover:bg-foreground border rounded-full p-2">
          <FacebookIcon className="inline" />
        </a>
        <a href="tel:+88018483333385" className="bg-background hover:bg-foreground border rounded-full p-2">
          <PhoneIcon className="inline" />
        </a>
        
        </div>
      </div>
    </section>
  )
}
