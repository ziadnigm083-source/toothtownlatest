import { useCallback, useState } from "react";
import Panel from "../components/Panel";
import Icon from "../components/Icon";
import PhotoLightbox from "../components/PhotoLightbox";

const branchGalleries = [
  { id: "sporting", name: "Alexandria • Sporting", folder: "sporting", count: 15 },
  { id: "dokki", name: "Cairo • Dokki", folder: "dokki", count: 6 },
  { id: "fambam", name: "New Cairo • FamBam", folder: "fambam", count: 7 },
];
const galleryPhotos = (folder, count) => Array.from({ length: count }, (_, i) => `/images/${folder}/${String(i + 1).padStart(2, "0")}.jpg`);

export default function Gallery({ active }) {
  const [opened, setOpened] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const openGallery = (branch) => { setOpened(branch); setPhotoIndex(0); };
  const closeGallery = useCallback(() => setOpened(null), []);
  const changePhoto = useCallback((step) => {
    if (!opened) return;
    setPhotoIndex((current) => (current + step + opened.count) % opened.count);
  }, [opened]);

  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl reveal">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">Gallery</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A look inside ToothTown</h2>
        <p className="mt-3 text-slate-500">Choose a branch to explore its photos.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {branchGalleries.map((branch, i) => {
          const photos = galleryPhotos(branch.folder, branch.count);
          return (
            <button type="button" key={branch.id} className="branch-gallery-folder hoverable reveal text-left" style={{ transitionDelay: `${i * 90}ms` }} onClick={() => openGallery(branch)}>
              <div className="branch-gallery-cover"><img src={photos[0]} alt={`${branch.name} clinic`} loading="lazy" /><span className="branch-gallery-open"><Icon name="images" /> Open gallery</span></div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div><h3 className="font-bold text-slate-900">{branch.name}</h3><p className="mt-1 text-sm text-slate-500">{branch.count} photos</p></div>
                <span className="branch-folder-icon"><Icon name="folder-open" /></span>
              </div>
            </button>
          );
        })}
      </div>
      {opened && <PhotoLightbox photos={galleryPhotos(opened.folder, opened.count)} index={photoIndex} onClose={closeGallery} onChange={changePhoto} title={opened.name} />}
    </Panel>
  );
}
