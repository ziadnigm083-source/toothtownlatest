import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { team, toneBgText } from "../data";
import { useLang } from "../i18n";

const tones = ["blue", "pink", "yellow", "orange"];

export default function Team({ active }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("Meet our team")}</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("The people behind your smile")}</h2>
        <p className="mt-4 text-slate-600">{t("Placeholder profiles — real names, photos, and bios coming soon.")}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {team.map((member, i) => {
          const tone = tones[i % tones.length];
          return (
            <div key={i} {...rv(i, "card p-6 text-center")}>
              <div className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full ${toneBgText[tone]}`}>
                <Icon name="user-round" className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{t(member.name)}</h3>
              <p className="text-sm text-slate-500">{t(member.role)}</p>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
