import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { socialLinks, branchContacts } from "../data";

export default function Contact({ active }) {
  return (
    <Panel active={active} className="space-y-6">
      <div className="card">
        <div className="p-6 border-b border-slate-100"><h3 className="text-xl font-bold">Clinic details</h3></div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 rounded-2xl tone-blue p-4"><Icon name="map-pin" className="mt-0.5" /><div><p className="font-semibold text-slate-900">Locations</p><div className="mt-1 flex flex-col gap-1 text-sm text-slate-600">{branchContacts.map((b) => <a key={b.label} href={b.map} target="_blank" rel="noreferrer" className="hover:text-sky-600 hover:underline">📍 {b.label}</a>)}</div></div></div>
          <div className="flex items-start gap-3 rounded-2xl tone-pink p-4"><Icon name="phone" className="mt-0.5" /><div><p className="font-semibold text-slate-900">Phone</p><div className="text-sm text-slate-600 space-y-2">{branchContacts.map((b) => <p key={b.label}>{b.label.split(" • ").pop()}: <a className="hover:underline" href={`tel:${b.phone.replace(/\\s/g, "")}`}>{b.phone}</a> · <a className="text-green-700 hover:underline" href={b.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></p>)}</div></div></div>
          <div className="flex items-start gap-3 rounded-2xl tone-yellow p-4"><Icon name="mail" className="mt-0.5" /><div><p className="font-semibold text-slate-900">Email</p><p className="text-sm text-slate-600">toothtown@yahoo.com</p></div></div>
          <div className="flex items-start gap-3 rounded-2xl tone-green p-4"><Icon name="clock-3" className="mt-0.5" /><div><p className="font-semibold text-slate-900">Working Hours</p><p className="text-sm text-slate-600">Hours vary by branch. See each location for its schedule.</p></div></div>
        </div>
      </div>

      <div className="card">
        <div className="p-6 border-b border-slate-100"><h3 className="text-xl font-bold">Social media</h3></div>
        <div className="p-6 grid gap-3">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-xl" style={{ color: s.color }}>
                  {s.svgPath ? (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill={s.color}><path d={s.svgPath} /></svg>
                  ) : (
                    <i className={s.icon}></i>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{s.name}</p>
                  <p className="text-sm text-slate-500">{s.handle}</p>
                </div>
              </div>
              <Icon name="arrow-right" className="text-slate-400" />
            </a>
          ))}
        </div>
      </div>
    </Panel>
  );
}
