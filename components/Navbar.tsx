"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = ["About", "Skills", "Projects", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  useEffect(() => {
    const sections = ["top", ...links.map((link) => link.toLowerCase())].map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-32% 0px -58% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, []);
  const navLink = (label: string, mobile = false) => <a className={`${mobile ? "mobile-nav-link" : "nav-link"} ${active === label.toLowerCase() ? "is-active" : ""}`} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>;

  return <header className="sticky top-0 z-50 pt-3"><div className="shell nav-shell"><nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">{links.map((link) => <span key={link}>{navLink(link)}</span>)}</nav><div className="hidden items-center gap-2 md:flex"><a href="/resume/tanmay-resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary nav-resume">Resume</a><ThemeToggle /></div><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button className="icon-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={19} />}</button></div></div>{open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="shell mobile-nav">{links.map((link) => <span key={link}>{navLink(link, true)}</span>)}<a className="mobile-nav-link" href="/resume/tanmay-resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume</a></nav>}</header>;
}
