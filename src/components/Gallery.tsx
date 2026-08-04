import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { ArrowRightIcon } from "./icons";

const celebrations = [
  {
    src: "/images/celebration-traditional-wedding.png",
    alt: "Traditional wedding mandap with red, white and pink floral drapes",
    title: "Traditional Wedding",
    tags: "Full Planning | Catering | Décor | Hospitality",
    guests: "600+ Guests",
  },
  {
    src: "/images/celebration-multiday.png",
    alt: "Palace venue lit up at night",
    title: "Multi-day Celebration",
    tags: "Planning | Catering | Production | Hospitality",
    guests: "1000+ Guests",
  },
  {
    src: "/images/celebration-jain-wedding.png",
    alt: "Pastel floral mandap seating area",
    title: "Jain Wedding",
    tags: "Jain Catering | Décor | Hospitality",
    guests: "450+ Guests",
  },
  {
    src: "/images/celebration-reception.png",
    alt: "Reception lounge with hanging string lights",
    title: "Reception Celebration",
    tags: "Décor | Catering | Hospitality | Production",
    guests: "800+ Guests",
  },
];

export default function Gallery() {
  return (
    <section id="celebrations" className="bg-cream py-1 sm:py-5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="Real Celebrations in Prayagraj" />

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {celebrations.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-md border border-black/15 bg-white shadow-sm">
                <div className="relative h-40 w-full">
                  <Image src={c.src} alt={c.alt} fill className="object-cover" />
                </div>
                <div className="px-3 py-2.5">
                  <h3 className="font-display text-sm font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1 text-[11px] text-ink-muted">{c.tags}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide-xs text-gold-dark">
                    {c.guests}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#celebrations"
            className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-wide-xs text-white transition hover:bg-navy-light"
          >
            View More Celebrations
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
