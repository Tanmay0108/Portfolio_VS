"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() { const [dark,setDark]=useState(true); useEffect(()=>{const saved=localStorage.getItem("theme");const value=saved ? saved === "dark" : true;setDark(value);document.documentElement.classList.toggle("light",!value)},[]); const toggle=()=>{const value=!dark;setDark(value);document.documentElement.classList.toggle("light",!value);localStorage.setItem("theme",value?"dark":"light")}; return <button onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} theme`} className="grid h-9 w-9 place-items-center rounded-full border" style={{borderColor:"var(--line)"}}>{dark?<Sun size={16}/>:<Moon size={16}/>}</button> }
