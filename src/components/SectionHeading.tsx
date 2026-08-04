type SectionHeadingProps = {
  title: string;
  className?: string;
  light?: boolean;
};

export default function SectionHeading({ title, className = "", light = false }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`font-display text-2xl font-semibold sm:text-3xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      <div className="mx-auto mt-3 h-px w-16 bg-gold" />
    </div>
  );
}
