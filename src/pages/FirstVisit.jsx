import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { visitSteps } from "../data";

export default function FirstVisit({ active }) {
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Your first visit</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Four easy steps to a happy smile</h2>
        <p className="mt-4 text-slate-600">No surprises — here's exactly how your child's first ToothTown adventure goes.</p>
      </div>

      <div className="relative hidden sm:block">
        <svg className="absolute left-0 top-6 w-full" height="24" viewBox="0 0 1000 24" preserveAspectRatio="none">
          <path d="M0 12 Q 125 -8 250 12 T 500 12 T 750 12 T 1000 12" stroke="#bae6fd" strokeWidth="3" fill="none" />
        </svg>
        <div className="relative grid grid-cols-4">
          {visitSteps.map((step, i) => (
            <div key={step.title} className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-md" style={{ background: step.color }}>{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {visitSteps.map((step, i) => (
          <div key={step.title} {...rv(i, "card p-6")}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${step.color}22`, color: step.color }}><Icon name={step.icon} /></div>
            <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
