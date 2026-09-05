import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Tanmay Potnurwar | AI, Data & Backend", description: "Portfolio of Tanmay Potnurwar, a final-year Computer Engineering student building practical AI, data, and backend systems.", openGraph: { title: "Tanmay Potnurwar | AI, Data & Backend", description: "Practical systems across AI, data analytics, generative AI, and backend engineering." }, twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
