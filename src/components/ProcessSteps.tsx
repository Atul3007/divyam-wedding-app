import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    title: "Private Consultation",
    text: "We understand your family, vision, preferences, budget and priorities.",
  },
  {
    title: "Requirement & Venue Understanding",
    text: "We study the venue, logistics, guest flow and function requirements.",
  },
  {
    title: "Celebration Design & Planning",
    text: "We design the experience, menus, décor, hospitality and execution plan.",
  },
  {
    title: "Production & Readiness",
    text: "We prepare, coordinate and test everything for a smooth celebration.",
  },
  {
    title: "Event-Day Command & Closure",
    text: "Our team runs every detail with discipline and finishes with grace.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-cream py-1 sm:py-5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="How We Plan Weddings in Prayagraj" />

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col items-center rounded-md border border-black/15 bg-white px-3 py-4 text-center shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-lg font-semibold text-gold">
                  {i + 1}
                </div>
                <h3 className="mt-2 font-display text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
