// All site content lives here, copied verbatim from the original HTML.
import hero1 from "./assets/hero-1.jpg";
import hero2 from "./assets/hero-2.jpg";
import hero3 from "./assets/hero-3.jpg";
import hero4 from "./assets/hero-4.jpg";
import hero5 from "./assets/hero-5.jpg";
import hero6 from "./assets/hero-6.jpg";
import hero7 from "./assets/hero-7.jpg";

export const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

export const navStructure = [
  "Home",
  "About",
  "Why Us",
  { label: "Services", children: ["Pediatric", "Adult Services", "Orthodontics"] },
  "First Visit",
  "FAQ",
  "Gallery",
  { label: "Branches", children: ["Alexandria • Sporting", "Alexandria • Agamy", "Alexandria • Victoria", "Cairo • Dokki", "New Cairo • FamBam"] },
  "Reviews",
  "Contact Us",
];

export const services = [
  { title: "General Checkups", icon: "shield-check", text: "Routine examinations to keep teeth and gums healthy." },
  { title: "Teeth Cleaning", icon: "sparkles", text: "Professional cleaning for a fresher and brighter smile." },
  { title: "Fillings", icon: "smile", text: "Natural-looking restorations for cavities and minor damage." },
  { title: "Root Canal Treatment", icon: "heart-pulse", text: "Comfort-focused care for infected or painful teeth." },
  { title: "Teeth Whitening", icon: "star", text: "Safe whitening options for a brighter appearance." },
  { title: "Cosmetic Dentistry", icon: "smile", text: "Smile-enhancing treatments tailored to your goals." },
];

export const pediatricServices = [
  { title: "First Visit Club", icon: "smile", tone: "teal", text: "A baby's first check-up by age one — short, sweet and full of high-fives." },
  { title: "Preventive Care", icon: "sparkles", tone: "green", text: "Cleanings, fluoride and sealants that stop cavities before they even start." },
  { title: "Fillings & Crowns", icon: "crown", tone: "yellow", text: "Tooth-colored repairs done gently, with cartoons on the ceiling the whole time." },
  { title: "Orthodontics & Braces", icon: "layers-3", tone: "orange", text: "Colorful braces and clear aligners that make growing smiles straight — and proud." },
  { title: "Sedation Dentistry", icon: "moon", tone: "pink", text: "Laughing gas and safe sleep dentistry for our bravest little worriers." },
  { title: "Emergency Care", icon: "bell-ring", tone: "teal", text: "Chipped tooth? Midnight toothache? We keep same-day slots ready for smile emergencies." },
];

export const orthodonticServices = [
  { title: "Child Orthodontic Consultation", icon: "clipboard-check", tone: "blue", text: "A friendly first evaluation to see if — and when — treatment makes sense." },
  { title: "Traditional Metal Braces", icon: "layers-3", tone: "pink", text: "Reliable, effective, and available in fun colors for younger patients." },
  { title: "Clear Ceramic Braces", icon: "gem", tone: "yellow", text: "A more discreet option for teens and image-conscious patients." },
  { title: "Clear Aligners", icon: "smile", tone: "green", text: "Removable, nearly invisible trays for straightening teeth on the go." },
  { title: "Retainers & Follow-up", icon: "shield-check", tone: "orange", text: "Keeping that new smile exactly where it belongs, long after braces come off." },
  { title: "Growth & Bite Guidance", icon: "activity", tone: "teal", text: "Early monitoring for jaw growth and bite alignment starting around age 7." },
];

export const socialLinks = [
  { name: "Facebook", icon: "fa-brands fa-facebook", color: "#1877F2", handle: "ToothTown Dental Center", url: "https://www.facebook.com/ToothTown1/reels/" },
  { name: "Instagram", icon: "fa-brands fa-instagram", color: "#E1306C", handle: "tooth_town", url: "https://www.instagram.com/tooth_town/" },
  { name: "Whatsapp", icon: "fa-brands fa-whatsapp", color: "#25D366", handle: "", url: "https://wa.me/201222289786" },
  { name: "Tiktok", icon: "fa-brands fa-tiktok", color: "#000000", handle: "tooth_town", url: "https://www.tiktok.com/@tooth_town?_r=1&_t=zs-91wovkasg1g" },
  { name: "Linktree", svgPath: "M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0l-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377Z", color: "#43E660", handle: "ToothTown Dental Center", url: "https://linktr.ee/_ToothTownDentalCenter_?utm_source=linktree_profile_share&ltsid=4df7d8b7-80a7-4881-ac26-73fe53ca52f1&utm_medium=social&utm_content=link_in_bio" },
];

export const highlights = [
  "Friendly care for children and adults",
  "Modern clinic equipment and hygiene",
  "Comfort-first treatment approach",
  "Clear guidance and easy communication",
];

export const reviewStats = { average: 4.7, count: 342 };

export const reviews = [
  { name: "esraa nabil", rating: 5, date: "3 days ago", text: "مكان أكثر من رائع و مناسب جدا للاطفال مفيش وقت انتظار طويل المكان مبهج و مليان العاب" },
  { name: "Mido Serag", rating: 5, date: "5 days ago", text: "ممتازين والله. ربنا يباركلكم" },
  { name: "Amira Mostafa", rating: 5, date: "3 weeks ago", text: "المكان تحفه الدكتور جميله اوي ومريحه جدا وصبوره مع الطفل جدا والألعاب بتبسط الاطفال جدا" },
  { name: "lina adnan", rating: 5, date: "4 weeks ago", text: "تجربه فوق الوصف للامانه انا كنت يوم جمعه وبنتي متالمه كنت منتظره حد يمسك بنتي خدمه فوق الرقي ايمان الريسبشن بشكر دكتوره منى على صبرها وطوله بالها في خلع ضرس بنتي بالرغم انه كان عنيد وملفوف وبنتي كانت متألمه ومرعوبه وهي هدتها واستحملتها وخدت وقتها اشكرها من كل قلبي شُـكــراً جدا ليكم انصح الجميع" },
  { name: "بسنت", rating: 5, date: "a month ago", text: "كل ال فى المكان ذوق جدا والدكتور صافيناز شاطرة جدا كانت بتتكلم مع ابنى براحة وبتفهمه هتعمل ايه وبتسمع من ابنى أى حاجة حابب يقولها والتمريض شاطرين وموظفى الاستقبال ذوق أووى ماشاء الله عليهم" },
  { name: "Mona Zain", rating: 5, date: "a month ago", text: "More than professional ❤️❤️❤️" },
  { name: "Dodo Jojo", rating: 5, date: "a month ago", text: "المكان حلو جدا واهم حاجه أنه نضيف جدا بصراحه ودكتورة مى طبعا ذوق وجميلة فى التعامل" },
  { name: "Hussein Nouh", rating: 5, date: "2 months ago", text: "كل أفراد منظومة توث تاون مميزين وعلي قدر كبير من الاحترافية والمهارة والذوق .. موظفي الحجز والاستقبال والمتابعة رائعين وكذلك التمريض" },
  { name: "Hadeer Mostafa", rating: 5, date: "2 months ago", text: "Very recommended ❤️❤️❤️" },
  { name: "Sahar Nadeem", rating: 5, date: "2 months ago", text: "ممتازين بجد و بيعاملوا الاطفال بمنتهي اللطافه والهدوء والصبر تجربتي مرتين كانوا ممتازين 😍😍 غير انهم بيفرحوا الاطفال بهدايا وشهاده بتفرق في نفسيه الطفل جدا بجد" },
  { name: "محمد عادل", rating: 5, date: "3 months ago", text: "تجربة استثنائية في عيادات Tooth Town مع قسم أسنان الأطفال. الطاقم الطبي لديه قدرة رائعة على التعامل مع رهبة الأطفال وجعل الزيارة تجربة ممتعة وغير مؤلمة. أنصح به بشدة لكل الآباء" },
  { name: "Esraa Amin", rating: 4, date: "3 months ago", text: "مكان محترم وابنى حبه جدا ودكتور شارل قمة ف الادب والذوق والشطارة وابنى حقيقى معيطش خالص" },
  { name: "Dalia Moghazy", rating: 5, date: "2 years ago", text: "Best doctor and best service" },
  { name: "Sara S", rating: 5, date: "2 years ago", text: "The team at Tooth Town is highly professional and ensuring comfortable dental care experience." },
  { name: "Bassant Abdelmoaty", rating: 5, date: "6 months ago", text: "One of the best dental clinics for kids" },
  { name: "heba habshy", rating: 5, date: "6 months ago", text: "very nice good experience with a lovely professional Doctor ♥️✨" },
  { name: "Somaya Gebril", rating: 5, date: "7 months ago", text: "Dr Sarah Elsayed is the best we've tried with a 4yo." },
  { name: "Zeinab Kowara", rating: 5, date: "7 months ago", text: "الدكتورة عبير اسلوبها ممتاز مع الأطفال كان تعامل لطيف جدا شكرا جزيلا" },
  { name: "dalia ibrahem", rating: 5, date: "10 months ago", text: "العيادة نضيفة جدا والدكاترة شاطرين اوى والستاف كله عارف فعلا ازاى يتعامل مع الاطفال دكتورة هدير كانت شاطرة اوى وسريعة وبنتى حبتها جدا" },
  { name: "Engy saad", rating: 5, date: "a year ago", text: "تعامل احترافي.. مواعيد دقيقة وكفاءة ما شاء الله اللهم بارك رائعة.. د نهال رائد في الأطفال من أفضل من تعاملت معهم تسلم ايديها مهارة ولطف مع الأولاد وأمانة" },
  { name: "Neveen Samy", rating: 5, date: "a year ago", text: "More than perfect ☺️👌 Dr. Sara Mandour ❤️🌹" },
  { name: "Salma Wassim", rating: 5, date: "a year ago", text: "شكرا ليكم ولمجهودكم المكان جميل ودكتوره بسمه رائعه ف التعامل مع الحاله والحمدلله مكملين جلسات معاها وبنات الاستقبال حبوبين ومحترمين والمواعيد مظبوطه وكله تمام 🤍🤍🤍" },
  { name: "Amira Kamel", rating: 5, date: "a year ago", text: "المكان نضيف جدا ومرتب والبنات في reception ممتازين جدا وstaff كله ممتاز وطبعا دكتور مني ربنا يباركلها اكتر من ممتازة" },
  { name: "Nada Fathalla", rating: 5, date: "a year ago", text: "Excellent ❤️" },
  { name: "Reham ahmed", rating: 5, date: "a year ago", text: "The best place and more save than any more" },
  { name: "Rasha Mahmoud", rating: 5, date: "a year ago", text: "مركز ممتاز والدكاترة شاطرين اوى وبيتعاملوا مع الأطفال باحترافية" },
];

export const locations = [
  { label: "Alexandria • Sporting", url: "https://maps.app.goo.gl/Re8ov62UAiHvLhW59" },
  { label: "Alexandria • Agamy", url: "https://maps.app.goo.gl/xL2FuwEAjUoLwMKi6" },
  { label: "Alexandria • Victoria", url: "https://maps.app.goo.gl/g8LHfCERs3qAtEwz6?g_st=ic" },
  { label: "Cairo • Dokki", url: "https://maps.app.goo.gl/hvZnfSMh8Uzv3pBH6" },
  { label: "New Cairo • FamBam", url: "https://maps.app.goo.gl/ckRKc7LmGDcmc6L76" },
];

export const team = [
  { name: "Dr. Placeholder Name", role: "General Dentist" },
  { name: "Dr. Placeholder Name", role: "Pediatric Dentist" },
  { name: "Dr. Placeholder Name", role: "Orthodontist" },
  { name: "Dr. Placeholder Name", role: "Cosmetic Dentist" },
];

export const galleryImages = [];

export const whyStats = [
  { value: "12+", label: "Years of happy visits" },
  { value: "20,000+", label: "Little smiles cared for" },
  { value: "4.9★", label: "Average parent rating" },
  { value: "100%", label: "Kid-approved fun" },
];

export const whyFeatures = [
  { icon: "layout-grid", tone: "pink", title: "Built for kids, not shrunk for adults", text: "Play corners, cartoon ceilings, tiny chairs and zero scary smells — every detail is child-sized on purpose." },
  { icon: "heart-handshake", tone: "blue", title: "Parents stay in the loop", text: "We explain every step in plain words, show you what we see, and never start anything without you." },
  { icon: "leaf", tone: "green", title: "Gentle, modern & pain-free", text: "Needle-free numbing, laughing gas and a lot of patience. Most kids leave asking when they can come back." },
];

export const visitSteps = [
  { color: "#0891b2", icon: "door-open", title: "Warm welcome & tour", text: "Meet the team, explore the play zone and pick a movie for your visit." },
  { color: "#ea580c", icon: "stethoscope", title: "Meet your dentist", text: "We chat, count teeth and show every single tool before it goes anywhere near a mouth." },
  { color: "#65a30d", icon: "camera", title: "Gentle check-up", text: "A look, a clean and photos of those tiny teeth — at your child's pace, never ours." },
  { color: "#db2777", icon: "gift", title: "Prize box & smile plan", text: "Every brave explorer picks a prize, and parents leave with a clear, simple plan." },
];

export const faqs = [
  { q: "At what age should my child have their first dental visit?", a: "As soon as the first tooth appears, or by their first birthday at the latest. Early visits let us catch small issues before they grow and help your child get comfortable with the clinic from the start." },
  { q: "How often should my child see the dentist?", a: "Every 6 months is the general rule, just like adults. Some kids with a higher cavity risk may need more frequent check-ups, which we'll flag during a visit." },
  { q: "My child is terrified of the dentist — what can you do?", a: "This is exactly what ToothTown is built for. We go at your child's pace, explain every tool before it's used, and never start treatment without their (and your) go-ahead. Most kids relax within a visit or two." },
  { q: "Are dental X-rays safe for kids?", a: "Yes. We use modern, low-dose digital X-rays and only take them when needed, with proper protective shielding. The radiation exposure is extremely low." },
  { q: "Do baby teeth really matter if they're going to fall out anyway?", a: "Very much so. Baby teeth hold space for adult teeth, help with speech and chewing, and cavities in them can affect the permanent teeth growing underneath. They deserve just as much care." },
  { q: "How can I prevent cavities in my child's teeth?", a: "Brushing twice daily with a fluoride toothpaste (a rice-grain amount for toddlers, pea-sized for older kids), limiting sugary snacks and drinks, and regular check-ups are the biggest factors. We're happy to show you the right technique for your child's age." },
  { q: "Is thumb sucking or pacifier use bad for their teeth?", a: "It's normal and harmless for infants and toddlers. If it continues past age 3-4, it can start to affect how the teeth and jaw align, so we'll keep an eye on it and offer gentle guidance if needed." },
  { q: "Do you use needles or sedation for kids?", a: "We lead with needle-free numbing gels and laughing gas (nitrous oxide) whenever possible to keep visits comfortable and calm. Anything beyond that is only used when truly necessary, and always explained to you first." },
  { q: "What happens if my child needs a filling or a tooth removed?", a: "We'll always walk you through the options and the why beforehand. Our approach is gentle and unhurried, with numbing and distraction techniques (movies, prizes) to keep your child calm throughout." },
  { q: "When should I start thinking about braces for my child?", a: "An orthodontic check around age 7 is a good idea, even if it's just to monitor growth. Not every child needs early treatment, but catching certain issues early can make later treatment simpler." },
];

export const highlightTones = ["blue", "pink", "yellow", "orange", "green"];
export const toneBgText = {
  blue: "bg-sky-100 text-sky-600",
  pink: "bg-pink-100 text-pink-600",
  yellow: "bg-yellow-100 text-yellow-700",
  orange: "bg-orange-100 text-orange-600",
  green: "bg-emerald-100 text-emerald-600",
  teal: "bg-teal-100 text-teal-700",
};


export const branchContacts = [
  { label: "Alexandria • Sporting", phone: "0120 0730773", whatsapp: "https://wa.me/message/EKDG5ADE6YZLM1", map: "https://maps.app.goo.gl/Re8ov62UAiHvLhW59" },
  { label: "Alexandria • Agamy", phone: "0127 7993838", whatsapp: "https://wa.me/message/AXA4UYV45MGHO1", map: "https://maps.app.goo.gl/xL2FuwEAjUoLwMKi6" },
  { label: "Alexandria • Victoria", phone: "0120 5006001", whatsapp: "https://wa.me/201205006001", map: "https://maps.app.goo.gl/g8LHfCERs3qAtEwz6?g_st=ic" },
  { label: "Cairo • Dokki", phone: "0112 9988110", whatsapp: "https://wa.me/message/GCRZANWIC3DZB1", map: "https://maps.app.goo.gl/hvZnfSMh8Uzv3pBH6" },
  { label: "New Cairo • FamBam", phone: "0122 2385969", whatsapp: "https://wa.me/message/DYMSMMGNDCPDA1", map: "https://maps.app.goo.gl/ckRKc7LmGDcmc6L76" },
];
