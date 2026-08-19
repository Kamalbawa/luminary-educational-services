"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  ["01", "Home", "/"],
  ["02", "About", "/#about"],
  ["03", "Courses", "/courses/"],
  ["04", "WES Evaluation", "/#wes-evaluation"],
  ["05", "Contact", "/#enquiry"],
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  const menu = (
    <AnimatePresence>
      {open && (
        <motion.div className="mobile-nav-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="mobile-nav-panel" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 280, damping: 30 }}>
            <div className="mobile-nav-panel-head">
              <div><small>Luminary</small><strong>Explore your next step</strong></div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation"><span /><span /></button>
            </div>
            <nav aria-label="Mobile navigation">
              {links.map(([number, label, href]) => (
                <Link href={href} key={label} onClick={() => setOpen(false)}><span>{number}</span><strong>{label}</strong><b>↗</b></Link>
              ))}
            </nav>
            <div className="mobile-nav-footer">
              <p>Personal education guidance across Punjab</p>
              <div><span>ਪੰਜਾਬੀ</span><span>English</span></div>
              <a href="tel:+917053732000">Call +91 70537 32000 <b>→</b></a>
              <a href="tel:+919914099906">Call +91 99140 99906 <b>→</b></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return <div className="mobile-nav-control"><button className="mobile-nav-toggle" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-label="Open navigation"><span /><span /></button>{mounted && createPortal(menu, document.body)}</div>;
}
