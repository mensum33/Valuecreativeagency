import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="card-premium p-6 md:p-8">
      <h3 className="text-xl font-display font-semibold text-navy">{service.name}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{service.description}</p>
      <ul className="mt-4 space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-rich">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <Link href="/packages" className="btn-ghost mt-5 inline-flex">
        View packages
      </Link>
    </article>
  );
}
