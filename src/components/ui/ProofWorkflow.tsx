const workflowSteps = [
  { label: "Order placed", status: "complete" as const },
  { label: "Payment received", status: "complete" as const },
  { label: "Details uploaded", status: "active" as const },
  { label: "2 design options", status: "pending" as const },
  { label: "Final proof", status: "pending" as const },
  { label: "Approved", status: "approved" as const },
  { label: "Printed", status: "future" as const },
  { label: "Delivered", status: "future" as const },
];

const statusStyles = {
  complete: "bg-white/10 text-white/80 border-white/20",
  active: "bg-white text-black border-white",
  pending: "bg-lightgrey text-black border-border",
  approved: "bg-white/15 text-white border-trust/40",
  future: "bg-white/5 text-white/50 border-white/10",
};

export default function ProofWorkflow() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-6">
        Proof workflow
      </p>
      <div className="md:overflow-x-auto pb-2">
        <div className="flex flex-col md:flex-row md:min-w-max md:items-stretch gap-3">
          {workflowSteps.map((step, i) => (
            <div key={step.label} className="flex md:items-center gap-3">
              <div className="flex flex-col items-start md:items-center w-full md:w-auto">
                <div
                  className={`w-full md:w-auto rounded-lg px-4 py-3 text-sm font-semibold border ${statusStyles[step.status]}`}
                >
                  {step.label}
                </div>
                {step.status === "approved" && (
                  <span className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-white/70">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Required before print
                  </span>
                )}
              </div>
              {i < workflowSteps.length - 1 && (
                <svg className="hidden md:block h-4 w-4 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
