import { useState } from "react";
import Panel from "../components/Panel";
import Icon from "../components/Icon";
import PhotoLightbox from "../components/PhotoLightbox";
import { branchContacts } from "../data";

export default function LocationPage({ active, label, sub, tone, url, hours, hotline, photos = [] }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasPhotos = photos.length > 0;
  const branchContact = branchContacts.find((branch) => branch.label === label);
  const changePhoto = (direction) => {
    if (!hasPhotos) return;
    setPhotoIndex((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">ToothTown Location</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{label}</h2>
        <div className="mt-3 space-y-1 text-slate-500">
          {(hours || ["Sat–Thu • 10:00 AM – 10:00 PM"]).map((hour) => (
            <p key={hour}>{hour}</p>
          ))}
        </div>
      </div>
      <div className={`grid gap-5 grid-cols-1 ${hasPhotos ? "lg:grid-cols-2" : ""}`}>
        {hasPhotos && (
          <div className="card min-w-0 p-4 sm:p-6 hoverable">
            <div className={`location-carousel${(label === "Cairo • Dokki" || label === "New Cairo • FamBam") ? " location-carousel-preview-portrait" : ""}`}>
              <div className="location-carousel-image-wrap">
                <button type="button" className="location-carousel-open" onClick={() => setLightboxOpen(true)} aria-label={`Open ${label} photo gallery`}>
                  <img key={photos[photoIndex]} src={photos[photoIndex]} alt={`${label} clinic photo ${photoIndex + 1}`} className="location-carousel-image" loading="lazy" />
                  <span className="location-photo-hint"><Icon name="maximize-2" /> View gallery</span>
                </button>
                <button type="button" className="location-carousel-arrow location-carousel-prev" onClick={() => changePhoto(-1)} aria-label="Previous photo">
                  <Icon name="chevron-left" />
                </button>
                <button type="button" className="location-carousel-arrow location-carousel-next" onClick={() => changePhoto(1)} aria-label="Next photo">
                  <Icon name="chevron-right" />
                </button>
                <span className="location-carousel-count">{photoIndex + 1} / {photos.length}</span>
              </div>
              <div className="location-carousel-dots" aria-label="Choose photo">
                {photos.map((photo, index) => (
                  <button key={photo} type="button" onClick={() => setPhotoIndex(index)} className={`location-carousel-dot${index === photoIndex ? " active" : ""}`} aria-label={`Show photo ${index + 1}`} aria-current={index === photoIndex ? "true" : undefined} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="card min-w-0 p-6 flex flex-col justify-between gap-6 hoverable">
          <div>
            <div className="flex items-center gap-3">
              <div className={`rounded-2xl p-3 tone-${tone}`}><Icon name="map-pin" /></div>
              <div><p className="font-semibold text-slate-900">{label}</p><p className="text-sm text-slate-500">{sub}</p></div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="rounded-2xl p-3 tone-pink"><Icon name="phone" /></div>
              <div><p className="text-sm text-slate-500">Phone</p><a href={`tel:${(hotline || "").replace(/\\s/g, "")}`} className="font-semibold text-slate-900">{hotline}</a>{branchContact?.whatsapp && <a href={branchContact.whatsapp} target="_blank" rel="noreferrer" className="ml-2 text-sm font-semibold text-green-700 hover:underline">WhatsApp</a>}</div>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl tone-pink p-4">
              <Icon name="clock-3" className="mt-0.5" />
              <div><p className="font-semibold text-slate-900">Hours</p>
                {(hours || ["Sat–Thu • 10:00 AM – 10:00 PM"]).map((hour) => <p key={hour} className="text-sm text-slate-600">{hour}</p>)}
              </div>
            </div>
          </div>
          {url ? <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-white hover:bg-sky-600 transition">View on Google Maps <Icon name="arrow-right" className="ml-2" /></a> : <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-slate-400">Map link coming soon</span>}
        </div>
      </div>
      {lightboxOpen && <PhotoLightbox photos={photos} index={photoIndex} onClose={() => setLightboxOpen(false)} onChange={(step) => setPhotoIndex((current) => (current + step + photos.length) % photos.length)} title={label} />}
    </Panel>
  );
}
