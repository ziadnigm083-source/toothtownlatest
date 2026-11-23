import Panel from "../components/Panel";
import Icon from "../components/Icon";
import HeroSlideshow from "../components/HeroSlideshow";
import { rv } from "../hooks/useReveal";
import { useLang } from "../i18n";
import { highlights, highlightTones, services, toneBgText, branchContacts } from "../data";

const homeServiceTones = ["blue", "pink", "yellow", "orange"];

const whyChooseItems = [
  ["Easy-to-understand treatment plans", "blue"],
  ["Caring team and soft communication", "pink"],
  ["Modern hygiene-focused environment", "green"],
  ["Helpful guidance for every visit", "yellow"],
];
const dotColor = { blue: "bg-sky-400", pink: "bg-pink-400", green: "bg-emerald-400", yellow: "bg-yellow-300" };

export default function Home({ active, setTab }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-16">
      <div className="text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {t("Welcome to")}{" "}<span dir="ltr" className="tt-brand inline-block"><span className="text-sky-500">Tooth</span><span className="text-orange-500">Town</span></span>
        </h1>
        <p className="font-display mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          {t("Where healthy")}{" "}<span className="highlight-word"><span className="highlight-bg"></span><span className="highlight-text">{t("smiles")}</span></span>{" "}{t("grow!")}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] shadow-lg" style={{ aspectRatio: "16/9" }}>
        <HeroSlideshow />
      </div>

      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{t("Little Teeth..Big Smiles")}</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            {t("The first dental center for kids and orthodontics in Alexandria, now in Cairo.")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => setTab("Adult Services")} className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 text-white hover:bg-sky-600 transition">
              {t("View Services")} <Icon name="arrow-right" className="ml-2" />
            </button>
            <button onClick={() => setTab("Contact Us")} className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
              {t("Contact Us")}
            </button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, idx) => {
              const tone = highlightTones[idx % highlightTones.length];
              return (
                <div key={item} {...rv(idx, "flex items-start gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm")}>
                  <div className={`rounded-full p-2 ${toneBgText[tone]}`}><Icon name="check-circle-2" className="h-4 w-4" /></div>
                  <p className="text-sm font-medium text-slate-700">{t(item)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div data-parallax="-0.06" className="tt-blob absolute -left-8 -top-8 h-24 w-24 rounded-full bg-yellow-300/40 blur-2xl"></div>
          <div data-parallax="0.05" className="tt-blob tt-blob-b absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-pink-300/40 blur-2xl"></div>
          <div className="relative overflow-hidden card shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">{t("ToothTown Dental Center")}</h3>
                </div>
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <Icon name="smile" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl tone-orange p-4">
                  <Icon name="phone" className="mt-0.5" />
                  <div><p className="font-semibold text-slate-900">{t("Hotline")}</p><p className="text-sm text-slate-600"><a dir="ltr" href="tel:+201222289786" className="inline-block hover:underline">+20 12 22289786</a> · <a href="https://api.whatsapp.com/message/ZGTAIYDF2LGWI1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" className="text-green-700 hover:underline">{t("WhatsApp")}</a></p></div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl tone-yellow p-4">
                  <Icon name="mail" className="mt-0.5" />
                  <div><p className="font-semibold text-slate-900">{t("Email")}</p><p className="text-sm text-slate-600">toothtown@yahoo.com</p></div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex -space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm"><Icon name="shield-check" /></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white shadow-sm"><Icon name="heart-pulse" /></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm"><Icon name="sparkles" /></div>
                </div>
                <p className="text-sm text-slate-600">{t("Comfort-first care for children, teens, and adults.")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("What we offer")}</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("Complete dental care in one friendly place")}</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((s, i) => {
            const tone = homeServiceTones[i % homeServiceTones.length];
            return (
              <div key={s.title} {...rv(i, "card hoverable p-0")}>
                <div className="p-6">
                  <div className={`w-fit rounded-2xl p-3 ${toneBgText[tone]}`}><Icon name={s.icon} /></div>
                  <h3 className="mt-3 text-xl font-bold">{t(s.title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t(s.text)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card bg-slate-900 text-white shadow-xl border-none">
          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">{t("Why choose ToothTown")}</p>
            <h3 className="mt-3 text-3xl font-bold">{t("A calm clinic experience, designed for children")}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {whyChooseItems.map(([label, tone]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${dotColor[tone]}`}></div>
                    <p className="text-sm text-white/90">{t(label)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-xl font-bold">{t("Clinic snapshot")}</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-3 rounded-2xl tone-pink p-4"><Icon name="map-pin" className="mt-0.5" /><div><p className="font-semibold text-slate-900">{t("Locations")}</p><div className="mt-1 flex flex-col gap-1 text-sm text-slate-600">{branchContacts.map((b) => <a key={b.label} href={b.map} target="_blank" rel="noreferrer" className="hover:text-sky-600 hover:underline">📍 {t(b.label)}</a>)}</div></div></div>
            <div className="flex items-start gap-3 rounded-2xl tone-yellow p-4"><Icon name="mail" className="mt-0.5" /><div><p className="font-semibold text-slate-900">{t("Email")}</p><p className="text-sm text-slate-600">toothtown@yahoo.com</p></div></div>
            <div className="flex items-start gap-3 rounded-2xl tone-green p-4"><Icon name="phone" className="mt-0.5" /><div><p className="font-semibold text-slate-900">{t("Hotline")}</p><p className="text-sm text-slate-600"><a dir="ltr" href="tel:+201222289786" className="inline-block hover:underline">+20 12 22289786</a> · <a href="https://api.whatsapp.com/message/ZGTAIYDF2LGWI1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" className="text-green-700 hover:underline">{t("WhatsApp")}</a></p></div></div>
          </div>
        </div>
      </section>
    </Panel>
  );
}
