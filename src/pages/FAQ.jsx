import { useRef, useState } from "react";
import Panel from "../components/Panel";
import Icon from "../components/Icon";
import { rv } from "../hooks/useReveal";
import { faqs } from "../data";

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

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
        <span>{item.q}</span>
        <Icon name="chevron-down" className="faq-chevron" />
      </button>
      <div className="faq-answer" ref={answerRef} style={height ? { maxHeight: height + "px" } : undefined}>{item.a}</div>
    </div>
  );
}

export default function FAQ({ active }) {
  return (
    <Panel active={active} className="space-y-10">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f79a1f]">FAQ</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Questions parents ask us most</h2>
        <p className="mt-4 text-slate-600">Straight, honest answers about your child's dental care — from the people who see it every day.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <FaqItem key={item.q} item={item} index={i} />
        ))}
      </div>
    </Panel>
  );
}
