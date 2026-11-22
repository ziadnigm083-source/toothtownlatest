import logo from "../assets/logo.png";
import { navStructure, branchContacts } from "../data";

const flatTabs = navStructure.flatMap((item) => (typeof item === "string" ? [item] : item.children));

export default function Footer({ activeTab, setTab }) {
  return (
    <footer className="mt-12 border-t border-white/70 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="ToothTown logo" className="h-16 w-16 rounded-2xl object-cover shadow-sm ring-4 ring-white bg-white" />
            <div>
              <p className="text-lg font-black">ToothTown</p>
              <p className="text-sm text-slate-500">Dental Center</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">Quick links</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {flatTabs.map((tab) => (
              <button key={tab} className={"nav-btn" + (activeTab === tab ? " active" : "")} onClick={() => setTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p className="font-medium text-slate-500">Locations:</p>
            {branchContacts.map((b) => <div key={b.label} className="space-y-1">
              <a href={b.map} target="_blank" rel="noreferrer" className="block hover:text-sky-600 hover:underline">📍 {b.label}</a>
              <p>{b.label.split(" • ").pop()}: <a href={`tel:${b.phone.replace(/\\s/g, "")}`} className="hover:underline">{b.phone}</a> · <a href={b.whatsapp} target="_blank" rel="noreferrer" className="text-green-700 hover:underline">WhatsApp</a></p>
            </div>)}
            <p>Email: toothtown@yahoo.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-4 text-center text-sm text-slate-500">© 2026 ToothTown. All rights reserved.</div>
    </footer>
  );
}
