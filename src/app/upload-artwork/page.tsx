import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TrustBadges from "@/components/ui/TrustBadges";
import { packages } from "@/data/packages";
import { CONTACT, mailtoUpload } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Upload Artwork",
  description:
    "Upload your logo, photos, menu text and project details for your design and print package.",
  path: "/upload-artwork",
});

export default function UploadArtworkPage() {
  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Upload Artwork" }]} />
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-black">
          Upload your artwork or project details
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Upload logos, photos, menu text, existing artwork, inspiration images and notes. We use these to prepare your design package — file storage will connect to Supabase in a future update.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-3 gap-10">
        <form className="lg:col-span-2 card-premium p-6 md:p-8 space-y-5" aria-label="Upload artwork form">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-1">Name *</label>
              <input id="name" name="name" type="text" required className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-1">Email *</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-black mb-1">Phone</label>
              <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-black mb-1">Business name</label>
              <input id="business" name="business" type="text" className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="order" className="block text-sm font-semibold text-black mb-1">Order number (optional)</label>
              <input id="order" name="order" type="text" className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" />
            </div>
            <div>
              <label htmlFor="package" className="block text-sm font-semibold text-black mb-1">Package interested in</label>
              <select id="package" name="package" className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black">
                <option value="">Select a package</option>
                {packages.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="files" className="block text-sm font-semibold text-black mb-1">Upload files</label>
            <input id="files" name="files" type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.svg,.ai,.eps,.doc,.docx" className="w-full rounded-lg border border-dashed border-border px-4 py-6 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white" />
            <p className="mt-2 text-xs text-muted">PDF, PNG, JPG, SVG, AI, EPS, DOC/DOCX. Large files may require a transfer link — we&apos;ll contact you.</p>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold text-black mb-1">Notes</label>
            <textarea id="notes" name="notes" rows={5} className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline focus:outline-2 focus:outline-black" placeholder="Tell us about your project, brand colours, inspiration..." />
          </div>
          <button type="submit" className="btn-primary" disabled>
            Submit online (coming soon)
          </button>
          <a href={mailtoUpload()} className="btn-secondary inline-flex justify-center">
            Email files instead
          </a>
          <p className="text-xs text-muted">For now, email us at <a href={`mailto:${CONTACT.email}`} className="text-black underline">{CONTACT.email}</a></p>
        </form>

        <aside className="space-y-6">
          <div className="card-premium p-6">
            <h2 className="font-display font-semibold text-black">Accepted files</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>PDF — preferred for print-ready artwork</li>
              <li>PNG / JPG — logos and photos</li>
              <li>SVG / AI / EPS — vector logos</li>
              <li>DOC / DOCX — menu text and copy</li>
            </ul>
          </div>
          <div className="card-premium p-6 bg-lightgrey">
            <h2 className="font-display font-semibold text-black">What to include</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Logo, business name, contact details, wording, photos, brand colours and any inspiration. See our{" "}
              <a href="/artwork-guidelines" className="text-black underline">artwork guidelines</a> for more detail.
            </p>
          </div>
          <TrustBadges variant="grid" tags={["Proof before print", "Two design options", "NZ-wide delivery"]} />
        </aside>
      </div>
    </div>
  );
}
