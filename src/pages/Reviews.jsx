import { useState } from "react";
import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { reviewStats, reviews, toneBgText } from "../data";

const tones = ["blue", "pink", "yellow", "orange", "green"];
const INITIAL_COUNT = 6;

function Stars({ rating }) {
  return [1, 2, 3, 4, 5].map((i) => (
    <Icon key={i} name="star" className={i <= Math.round(rating) ? "star-filled" : "star-empty"} />
  ));
}

export default function Reviews({ active }) {
  const [showAll, setShowAll] = useState(false);
  const hideMore = showAll || reviews.length <= INITIAL_COUNT;

  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">Patient reviews</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What families say about ToothTown</h2>
      </div>

      <div className="card">
        <div className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-black text-slate-900">{reviewStats.average.toFixed(1)}</div>
            <div>
              <div className="star-row flex gap-0.5"><Stars rating={reviewStats.average} /></div>
              <p className="mt-1 text-sm text-slate-500">{`Based on ${reviewStats.count}+ Google reviews`}</p>
            </div>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=ToothTown+Dental+Center+Alexandria" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-white hover:bg-sky-600 transition">
            See all reviews on Google <Icon name="arrow-right" className="ml-2" />
          </a>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((r, i) => {
          const tone = tones[i % tones.length];
          return (
            <div key={i} {...rv(i, "review-card" + (i >= INITIAL_COUNT && !showAll ? " review-hidden" : ""))}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${toneBgText[tone]} font-bold`}>{r.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.date}</p>
                  </div>
                </div>
              </div>
              <div className="star-row flex gap-0.5"><Stars rating={r.rating} /></div>
              <p className="text-sm leading-6 text-slate-600" dir="auto">{r.text}</p>
            </div>
          );
        })}
      </div>

      <div className={"flex justify-center" + (hideMore ? " hidden" : "")}>
        <button onClick={() => setShowAll(true)} className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
          Show more reviews <Icon name="chevron-down" className="ml-2" />
        </button>
      </div>
    </Panel>
  );
}
