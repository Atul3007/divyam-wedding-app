import Image from "next/image";
import { LotusIcon, TagIcon, DocumentIcon, ChefHatIcon, ChairIcon, BadgeIcon } from "./icons";

const points = [
  { icon: LotusIcon, text: "Vegetarian-only handling protocol at all times" },
  { icon: TagIcon, text: "Labelled counters and separate serving lines" },
  { icon: DocumentIcon, text: "Advance documentation of Jain & Satvik requirements" },
  { icon: ChefHatIcon, text: "Trained service teams and chefs" },
  { icon: ChairIcon, text: "Dedicated preparation areas and utensils" },
  { icon: BadgeIcon, text: "FSSAI-licensed operations and regular audits" },
];

export default function PromiseOfPurity() {
  return (
    <section id="purity" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-white px-5 py-1 sm:py-5 lg:px-16">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">The Promise of Purity</h2>
        <div className="mt-3 h-px w-16 bg-gold" />
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
          For us, purity is not a statement. It is a discipline we follow in every kitchen, at
          every counter, for every celebration.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-8 w-8 shrink-0 text-gold" />
              <p className="text-[13px] leading-snug text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[320px] border-l border-black/10">
        <Image
          src="/images/purity-thali.png"
          alt="Pure vegetarian thali spread with a lit diya"
          fill
          className="object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/70 to-transparent sm:w-14 lg:w-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </section>
  );
}
