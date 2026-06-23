const workflowSteps = [
  "Order placed",
  "Details uploaded",
  "2 design options",
  "Final proof",
  "Approved",
  "Printed",
  "Delivered",
];

export default function ProofWorkflow() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-center gap-2 md:gap-3">
        {workflowSteps.map((step, i) => (
          <div key={step} className="flex items-center gap-2 md:gap-3">
            <div
              className={`rounded-xl px-4 py-3 text-xs md:text-sm font-semibold whitespace-nowrap ${
                i >= 4
                  ? "bg-trust/10 text-trust border border-trust/20"
                  : i === 3
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "bg-white border border-border text-navy"
              }`}
            >
              {step}
            </div>
            {i < workflowSteps.length - 1 && (
              <svg className="h-4 w-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
