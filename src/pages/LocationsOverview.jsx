import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { locations, toneBgText } from "../data";
import { useLang } from "../i18n";

const tones = ["blue", "pink", "yellow", "orange", "green"];

// Not linked from the nav in the original either, but kept so nothing is lost.
export default function LocationsOverview({ active }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("Locations")}</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("Find a ToothTown near you")}</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {locations.map((loc, i) => {
          const tone = tones[i % tones.length];
          return (
            <div key={loc.label} {...rv(i, "card p-6 flex flex-col gap-4")}>
              <div className="flex items-start gap-3">
                <div className={`rounded-2xl p-3 ${toneBgText[tone]}`}><Icon name="map-pin" /></div>
                <div>
                  <p className="font-semibold text-slate-900">{t(loc.label)}</p>
                  <p className="text-sm text-slate-500">{t("Open branch page for current hours")}</p>
                </div>
              </div>
              {loc.url ? (
                <a href={loc.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm text-white hover:bg-sky-600 transition">
                  {t("View on Google Maps")} <Icon name="arrow-right" className="ml-2" />
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-400">{t("Map link coming soon")}</span>
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
