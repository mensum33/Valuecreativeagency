import { notFound } from "next/navigation";
import PolicyPageLayout from "@/components/ui/PolicyPageLayout";
import { policies, getPolicyBySlug } from "@/data/policies";
import { createMetadata } from "@/lib/metadata";

type Props = { params: { policy: string } };

export function generateStaticParams() {
  return policies.map((p) => ({ policy: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const policy = getPolicyBySlug(params.policy);
  if (!policy) return {};
  return createMetadata({
    title: policy.title,
    description: policy.description,
    path: `/${params.policy}`,
  });
}

export default function PolicyPage({ params }: Props) {
  const policy = getPolicyBySlug(params.policy);
  if (!policy) notFound();
  return <PolicyPageLayout policy={policy} />;
}
