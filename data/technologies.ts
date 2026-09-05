export type Technology = { name: string; category: "AI / Machine Learning" | "NLP / Generative AI" | "Data Analytics" | "Backend" | "Engineering & Tools"; logo?: string };

// Add `logo: "/tech/your-logo.svg"` after placing assets in public/tech.
export const technologies: Technology[] = [
  { name: "Python", category: "AI / Machine Learning" }, { name: "NumPy", category: "AI / Machine Learning" }, { name: "Scikit-learn", category: "AI / Machine Learning" },
  { name: "Pandas", category: "AI / Machine Learning" }, { name: "Matplotlib", category: "AI / Machine Learning" },
  { name: "NLP", category: "NLP / Generative AI" }, { name: "NLTK", category: "NLP / Generative AI" },
  { name: "Hugging Face", category: "NLP / Generative AI" }, { name: "LangChain", category: "NLP / Generative AI" },
  { name: "LangGraph", category: "NLP / Generative AI" }, { name: "CrewAI", category: "NLP / Generative AI" },
  { name: "Ollama", category: "NLP / Generative AI" }, { name: "RAG", category: "NLP / Generative AI" },
  { name: "Power BI", category: "Data Analytics" }, { name: "Microsoft Excel", category: "Data Analytics" }, { name: "SQL", category: "Data Analytics" },
  { name: "FastAPI", category: "Backend" }, { name: "PostgreSQL", category: "Backend" }, { name: "SQLAlchemy", category: "Backend" }, { name: "Redis", category: "Backend" },
  { name: "Git", category: "Engineering & Tools" }, { name: "GitHub", category: "Engineering & Tools" }, { name: "Docker", category: "Engineering & Tools" }, { name: "Linux", category: "Engineering & Tools" }
];

export const skillGroups = Object.entries(technologies.reduce<Record<string, Technology[]>>((groups, tech) => {
  (groups[tech.category] ??= []).push(tech); return groups;
}, {}));
