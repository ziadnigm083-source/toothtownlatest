import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { services, toneBgText } from "../data";
import { useLang } from "../i18n";

const tones = ["blue", "pink", "yellow", "orange", "green"];

export default function AdultServices({ active }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("Adult Services")}</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("Dental services for every stage of care")}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((s, i) => {
          const tone = tones[i % tones.length];
          return (
            <div key={s.title} {...rv(i, "card hoverable")}>
              <div className="p-6">
                <div className={`mb-4 w-fit rounded-2xl p-3 ${toneBgText[tone]}`}><Icon name={s.icon} /></div>
                <h3 className="text-xl font-bold text-slate-900">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t(s.text)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
