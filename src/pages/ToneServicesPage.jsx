import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { toneBgText } from "../data";
import { useLang } from "../i18n";

// Shared layout for the Pediatric and Orthodontics tabs (same markup in the original).
export default function ToneServicesPage({ active, eyebrow, title, intro, list }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl mx-auto text-center">
        {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t(eyebrow)}</p>}
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t(title)}</h2>
        <p className="mt-4 text-slate-600">{t(intro)}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {list.map((s, i) => (
          <div key={s.title} {...rv(i, "card hoverable")}>
            <div className="p-6">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${toneBgText[s.tone]}`}><Icon name={s.icon} /></div>
              <h3 className="text-xl font-bold text-slate-900">{t(s.title)}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{t(s.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
