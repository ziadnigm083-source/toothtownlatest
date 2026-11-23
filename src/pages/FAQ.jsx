import { useEffect, useRef, useState } from "react";
import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { faqs } from "../data";
import { useLang } from "../i18n";

function FaqItem({ item, index }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  // Re-measure an open answer when the language changes (text wraps differently).
  useEffect(() => {
    if (open && answerRef.current) setHeight(answerRef.current.scrollHeight + 24);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = () => {
    if (open) {
      setOpen(false);
      setHeight(0);
    } else {
      setHeight(answerRef.current.scrollHeight + 24);
      setOpen(true);
    }
  };

  return (
    <div {...rv(index, "faq-item" + (open ? " open" : ""))}>
      <button className="faq-question" aria-expanded={open} onClick={toggle}>
        <span>{t(item.q)}</span>
        <Icon name="chevron-down" className="faq-chevron" />
      </button>
      <div className="faq-answer" ref={answerRef} style={height ? { maxHeight: height + "px" } : undefined}>{t(item.a)}</div>
    </div>
  );
}

export default function FAQ({ active }) {
  const { t } = useLang();
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">{t("FAQ")}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("Questions parents ask us most")}</h2>
        <p className="mt-4 text-slate-600">{t("Straight, honest answers about your child's dental care — from the people who see it every day.")}</p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <FaqItem key={item.q} item={item} index={i} />
        ))}
      </div>
    </Panel>
  );
}
