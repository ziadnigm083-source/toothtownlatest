import { useLang } from "../i18n";
import "./WhatsAppButton.css";

// Hotline WhatsApp link: wa.me/<number> is WhatsApp's universal link and opens the app on phones
// (and WhatsApp Web on computers). Number = the hotline +20 12 22289786, in international format.
const HOTLINE_WHATSAPP_URL = "https://wa.me/201222289786";

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
