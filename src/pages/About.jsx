import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { toneBgText } from "../data";
import { useLang } from "../i18n";

const tones = ["blue", "pink", "yellow", "orange"];
const values = [
  ["Compassion", "We treat every patient with patience and respect."],
  ["Quality", "Care focused on detail, safety, and results."],
  ["Trust", "Clear communication and transparent guidance."],
  ["Comfort", "A calm setting for children and adults alike."],
];

export default function About({ active }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("About us")}</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("A clinic built on comfort, clarity, and care")}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-xl font-bold">{t("Our story")}</h3>
            <p className="text-slate-500 text-sm mt-1">{t("ToothTown is the first dental center for kids and orthodontics in Alexandria, now in Cairo.")}</p>
          </div>
          <div className="p-6 space-y-4 text-slate-600">
            <p>{t("From the first visit to follow-up care, the experience is designed to be clear, calm, and family-friendly.")}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <span className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium tone-blue">{t("Friendly team")}</span>
              <span className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium tone-pink">{t("Gentle approach")}</span>
              <span className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium tone-green">{t("Modern hygiene")}</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6 border-b border-slate-100"><h3 className="text-xl font-bold">{t("Mission")}</h3></div>
          <div className="p-6 space-y-4 text-slate-600">
            <p>{t("To provide high-quality dental care in a warm and reassuring environment.")}</p>
            <p>{t("To make every visit easy to understand and comfortable from start to finish.")}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {values.map(([title, desc], i) => {
          const tone = tones[i % tones.length];
          return (
            <div key={title} {...rv(i, "card")}>
              <div className="p-6">
                <div className={`mb-4 w-fit rounded-2xl p-3 ${toneBgText[tone]}`}><Icon name="check-circle-2" /></div>
                <h3 className="text-xl font-bold">{t(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t(desc)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
