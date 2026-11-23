import { useLang } from "../i18n";
import "./WhatsAppButton.css";

// Hotline WhatsApp link (same one the Home page uses for the hotline).
const HOTLINE_WHATSAPP_URL = "https://api.whatsapp.com/message/ZGTAIYDF2LGWI1?autoload=1&app_absent=0&utm_source=ig";

// Small floating WhatsApp button, fixed to the right edge of the screen on every page.
// Works on phones and desktops: touch-friendly size, respects notches / home bars,
// and the hover label only appears on devices that actually have hover.
export default function WhatsAppButton() {
  const { t } = useLang();
  const label = t("Chat on WhatsApp");
  return (
    <a
      className="tt-whatsapp"
      href={HOTLINE_WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
      <span className="tt-whatsapp-label">{label}</span>
    </a>
  );
}
