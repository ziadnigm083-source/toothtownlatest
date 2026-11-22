import { Children, cloneElement, isValidElement } from "react";
import { rv } from "../hooks/useReveal";

// One "page" of the site. Only the active panel is displayed (see .tab-panel in
// index.css). Each direct child gets the staggered reveal animation, exactly as
// the original script did with markReveal(panel).
export default function Panel({ active, className = "", children }) {
  const items = Children.toArray(children).map((child, i) => {
    if (!isValidElement(child)) return child;
    const { className: extraClass, style } = rv(i, child.props.className || "");
    return cloneElement(child, {
      className: extraClass,
      style: { ...child.props.style, ...style },
    });
  });
  return <div className={`tab-panel ${className}` + (active ? " active" : "")}>{items}</div>;
}
