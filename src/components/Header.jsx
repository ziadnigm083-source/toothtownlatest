import { Fragment } from "react";
import Icon from "./Icon";
import logo from "../assets/logo.png";
import { navStructure } from "../data";

export default function Header({ activeTab, setTab, mobileOpen, setMobileOpen, openMenu, setOpenMenu }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => setTab("Home")} className="flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-slate-50">
          <img src={logo} alt="ToothTown logo" className="h-16 w-16 rounded-2xl object-cover shadow-sm ring-4 ring-white bg-white" />
          <div className="text-left leading-tight">
            <div className="text-lg font-black tracking-tight text-slate-900">ToothTown</div>
            <div className="text-xs font-medium text-slate-500">Dental Center</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-sm md:flex">
          {navStructure.map((item) => {
            if (typeof item === "string") {
              return (
                <button key={item} className={"nav-btn" + (activeTab === item ? " active" : "")} onClick={() => setTab(item)}>
                  {item}
                </button>
              );
            }
            const isChildActive = item.children.includes(activeTab);
            return (
              <div key={item.label} className="relative">
                <button
                  className={"nav-btn inline-flex items-center gap-1" + (isChildActive ? " active" : "")}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu((cur) => (cur === item.label ? null : item.label));
                  }}
                >
                  <span>{item.label}</span>
                  <Icon name="chevron-down" className="h-3.5 w-3.5" />
                </button>
                <div className={"nav-dropdown-menu" + (openMenu === item.label ? "" : " hidden")}>
                  {item.children.map((child) => (
                    <button
                      key={child}
                      className={"nav-dropdown-item" + (activeTab === child ? " active" : "")}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(null);
                        setTab(child);
                      }}
                    >
                      {child}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Toggle menu"
        >
          <Icon name="menu" />
        </button>
      </div>

      <div className={(mobileOpen ? "" : "hidden ") + "mobile-menu-panel border-t border-slate-200 bg-white md:hidden"}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
          {navStructure.map((item) => {
            if (typeof item === "string") {
              return (
                <button key={item} className={"mobile-nav-btn" + (activeTab === item ? " active" : "")} onClick={() => setTab(item)}>
                  {item}
                </button>
              );
            }
            return (
              <Fragment key={item.label}>
                <p className="px-4 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                {item.children.map((child) => (
                  <button key={child} className={"mobile-nav-btn" + (activeTab === child ? " active" : "")} onClick={() => setTab(child)}>
                    {child}
                  </button>
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    </header>
  );
}
