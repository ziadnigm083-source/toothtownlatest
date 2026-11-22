import { useEffect } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

export default function PhotoLightbox({ photos, index, onClose, onChange, title }) {
  useEffect(() => {
    if (index < 0) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange(1);
      if (event.key === "ArrowLeft") onChange(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, onClose, onChange]);

  if (index < 0 || !photos?.length) return null;
  const move = (step) => onChange(step);
  return createPortal(
    <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo gallery`} onClick={onClose}>
      <button className="photo-lightbox-close" onClick={onClose} aria-label="Close gallery"><Icon name="x" /></button>
      <div className="photo-lightbox-content" onClick={(event) => event.stopPropagation()}>
        <div className="photo-lightbox-heading"><span>{title}</span><span>{index + 1} / {photos.length}</span></div>
        <div className="photo-lightbox-stage">
          <button className="photo-lightbox-arrow photo-lightbox-prev" onClick={() => move(-1)} aria-label="Previous photo"><Icon name="chevron-left" /></button>
          <img key={photos[index]} src={photos[index]} alt={`${title} ${index + 1}`} />
          <button className="photo-lightbox-arrow photo-lightbox-next" onClick={() => move(1)} aria-label="Next photo"><Icon name="chevron-right" /></button>
        </div>
        <div className="photo-lightbox-thumbs">
          {photos.map((photo, i) => <button key={photo} className={i === index ? "selected" : ""} onClick={() => onChange(i - index)} aria-label={`Open photo ${i + 1}`}><img src={photo} alt="" /></button>)}
        </div>
      </div>
    </div>,
    document.body
  );
}
