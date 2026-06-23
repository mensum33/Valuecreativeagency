import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site section-padding text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-navy">Page not found</h1>
      <p className="mt-4 text-muted max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/packages" className="btn-secondary">Shop packages</Link>
      </div>
    </div>
  );
}
