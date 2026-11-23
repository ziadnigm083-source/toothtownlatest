import {
  Activity, ArrowLeft, ArrowRight, BellRing, Camera, CheckCircle2, ChevronDown, ChevronLeft,
  ChevronRight, Clock3, ClipboardCheck, Crown, DoorOpen, Gem, Gift, Globe, HeartHandshake,
  HeartPulse, Image as ImageIcon, Images, FolderOpen, Maximize2, X, Layers3, LayoutGrid, Leaf, Mail, MapPin, Menu, Moon,
  Phone, ShieldCheck, Smile, Sparkles, Star, Stethoscope, UserRound,
} from "lucide-react";
import { useLang } from "../i18n";

// Same icon names the original page used with <i data-lucide="...">.
const ICONS = {
  "activity": Activity,
  "arrow-right": ArrowRight,
  "globe": Globe,
  "bell-ring": BellRing,
  "camera": Camera,
  "check-circle-2": CheckCircle2,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "clipboard-check": ClipboardCheck,
  "clock-3": Clock3,
  "crown": Crown,
  "door-open": DoorOpen,
  "gem": Gem,
  "gift": Gift,
  "heart-handshake": HeartHandshake,
  "heart-pulse": HeartPulse,
  "image": ImageIcon,
  "images": Images,
  "folder-open": FolderOpen,
  "maximize-2": Maximize2,
  "x": X,
  "layers-3": Layers3,
  "layout-grid": LayoutGrid,
  "leaf": Leaf,
  "mail": Mail,
  "map-pin": MapPin,
  "menu": Menu,
  "moon": Moon,
  "phone": Phone,
  "shield-check": ShieldCheck,
  "smile": Smile,
  "sparkles": Sparkles,
  "star": Star,
  "stethoscope": Stethoscope,
  "user-round": UserRound,
};

// data-lucide is kept on purpose: the original CSS sizes icons with [data-lucide].
export default function Icon({ name, className }) {
  const { isAr } = useLang();
  // The "→" arrow points the other way when the page is read right-to-left.
  const Cmp = name === "arrow-right" && isAr ? ArrowLeft : ICONS[name];
  if (!Cmp) return null;
  return <Cmp data-lucide={name} className={className} />;
}
