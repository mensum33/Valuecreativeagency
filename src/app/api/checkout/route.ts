import { NextResponse } from "next/server";

/**
 * Stripe Checkout API — placeholder for future implementation.
 *
 * When STRIPE_SECRET_KEY is configured, this route should:
 * 1. Accept POST { packageSlug: string }
 * 2. Look up package price from server-side data (never trust client price)
 * 3. Create a Stripe Checkout Session
 * 4. Return { url: session.url }
 *
 * On success: redirect to /thank-you
 * On cancel: redirect to /checkout?package={slug}
 *
 * @see https://stripe.com/docs/checkout/quickstart
 */
export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        error: "Checkout is not configured yet.",
        message:
          "Stripe Checkout will be enabled once STRIPE_SECRET_KEY is set in environment variables.",
      },
      { status: 503 }
    );
  }

  // Future implementation:
  // const { packageSlug } = await request.json();
  // const pkg = getPackageBySlug(packageSlug);
  // if (!pkg) return NextResponse.json({ error: "Package not found" }, { status: 404 });
  // const stripe = new Stripe(stripeSecretKey);
  // const session = await stripe.checkout.sessions.create({ ... });

  return NextResponse.json(
    { error: "Stripe Checkout implementation pending." },
    { status: 501 }
  );
}
