import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { toneBgText, whyFeatures, whyStats } from "../data";
import { useLang } from "../i18n";

export default function WhyUs({ active }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("Why ToothTown?")}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("The clinic kids beg to come back to")}</h2>
        <p className="mt-4 text-slate-600">{t("We rebuilt the whole dental visit around little humans — and their grown-ups.")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {whyStats.map((s, i) => (
          <div key={s.label} {...rv(i, "card p-6 text-center")}>
            <div className="text-3xl font-black text-emerald-600 sm:text-4xl"><span dir="ltr" className="inline-block">{s.value}</span></div>
            <p className="mt-1 text-sm text-slate-500">{t(s.label)}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {whyFeatures.map((f, i) => (
          <div key={f.title} {...rv(i, "card p-6")}>
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${toneBgText[f.tone]}`}><Icon name={f.icon} /></div>
            <h3 className="text-lg font-bold text-slate-900">{t(f.title)}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{t(f.text)}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
