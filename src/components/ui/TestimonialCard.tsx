{/* Replace with real reviews before launch */}
interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export default function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <blockquote className="card-premium p-6 md:p-8">
      <svg className="h-8 w-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-sm md:text-base text-rich leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4 text-sm font-semibold text-muted">— {attribution}</footer>
    </blockquote>
  );
}
