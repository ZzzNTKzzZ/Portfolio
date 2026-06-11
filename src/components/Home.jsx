import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

export default function Home({ navigate }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const { language, t } = useLanguage();

  // Load translations dynamically
  const roles = t("home.hero.roles") || [];
  const skills = t("home.skills.items") || [];
  const principles = t("home.principles.items") || [];
  const focusDistribution = t("home.focus.items") || [];
  const pillars = t("home.goals.pillars") || [];
  const roadmap = t("home.goals.roadmap") || [];

  const marqueeItems = [
    { icon: "code", label: "TypeScript" },
    { icon: "layers", label: "React" },
    { icon: "storage", label: "PostgreSQL" },
    { icon: "cloud", label: "Docker" },
    { icon: "terminal", label: "Rust" },
    { icon: "functions", label: "Python" },
  ];

  const backendDist = focusDistribution[0] || { value: 50, icon: "dns", description: "", chips: [] };
  const fullstackDist = focusDistribution[1] || { value: 35, icon: "deployed_code", description: "", chips: [] };
  const dataDist = focusDistribution[2] || { value: 15, icon: "analytics", description: "", chips: [] };

  const pillarMeta = [
    { color: "#b4c5ff", bg: "rgba(180,197,255,0.08)", border: "rgba(180,197,255,0.2)", delay: "0.05s" },
    { color: "#4cd7f6", bg: "rgba(76,215,246,0.08)", border: "rgba(76,215,246,0.2)", delay: "0.15s" },
    { color: "#E4F222", bg: "rgba(228,242,34,0.07)", border: "rgba(228,242,34,0.18)", delay: "0.25s" },
    { color: "#d2bbff", bg: "rgba(210,187,255,0.08)", border: "rgba(210,187,255,0.2)", delay: "0.35s" }
  ];

  const roadmapMeta = [
    { color: "#b4c5ff", glow: "rgba(180,197,255,0.6)" },
    { color: "#4cd7f6", glow: "rgba(76,215,246,0.6)" },
    { color: "#d2bbff", glow: "rgba(210,187,255,0.6)" }
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("qOjL-F2EaKKVNCnIq"); // Your public key
  }, []);

  // Role rotation effect
  useEffect(() => {
    if (roles.length === 0) return;
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % roles.length),
      3000,
    );
    return () => clearInterval(t);
  }, [roles.length]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      await emailjs.send("service_nt8spsa", "template_68cvkep", {
        to_email: "ntk22052006@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setStatusMessage(t("home.contact.success"));
      setFormData({ name: "", email: "", message: "" });

      // Clear message after 3 seconds
      setTimeout(() => setStatusMessage(""), 3000);
    } catch (error) {
      console.error("Email send error:", error);
      setStatusMessage(t("home.contact.failed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden">
      {/* ── Aurora Background ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#b4c5ff] rounded-full aurora-blob pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-[#d2bbff] rounded-full aurora-blob pointer-events-none" />

      {/* ─────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────── */}
      <section
        id="home"
        className="pt-40 pb-[120px] max-w-[1200px] mx-auto px-[24px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: copy */}
        <div className="reveal">
          <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] font-bold tracking-[-0.02em] mb-4">
            {t("home.hero.hi")}{" "}
            <span className="gradient-text">{t("home.hero.name")}</span>
          </h1>

          {/* Role rotator */}
          <div className="h-12 overflow-hidden mb-6">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${roleIdx * 44}px)` }}
            >
              {roles.map((r) => (
                <div
                  key={r}
                  className="text-[36px] leading-[44px] font-semibold tracking-[-0.015em] text-[#c3c6d7] py-[2px]"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>

          <p className="text-[18px] leading-[28px] text-[#c3c6d7] max-w-lg mb-8">
            {t("home.hero.desc")}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("taskflow")}
              className="bg-[#b4c5ff] text-[#002d84] px-8 py-4 rounded-xl text-[14px] leading-[20px] font-medium tracking-[0.05em] shadow-[0_0_20px_rgba(180,197,255,0.2)] hover:scale-105 transition-all active:scale-95 cursor-pointer"
            >
              {t("home.hero.viewProjects")}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-[#434655] text-[#eef0ff] px-8 py-4 rounded-xl text-[14px] leading-[20px] font-medium tracking-[0.05em] hover:bg-[#1d2438] transition-all cursor-pointer"
            >
              {t("home.hero.getInTouch")}
            </button>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="flex justify-center md:justify-end reveal">
          <div className="relative group">
            {/* Rotating border */}
            <div className="absolute -inset-1.5 rounded-full rotating-border blur-sm opacity-70" />
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#3d475d] overflow-hidden shadow-2xl">
              <img
                alt="Nguyen Tuan Khanh"
                className="w-full h-full object-cover"
                src="/assets/avatar.jpg"
              />
            </div>
            {/* Glow */}
            <div className="absolute -inset-8 bg-[#b4c5ff]/20 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PERSONAL CORE FOCUS
      ───────────────────────────────────────── */}
      <section
        id="personal-focus"
        className="py-16 max-w-[1200px] mx-auto px-[24px]"
      >
        <div className="text-center mb-10 reveal">
          <p
            className="text-[#b4c5ff] text-[12px] font-semibold tracking-[0.1em] uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {t("home.focus.tag")}
          </p>
          <h2 className="text-[28px] leading-[36px] font-semibold tracking-[-0.015em] text-[#eef0ff] mb-4">
            {t("home.focus.title")}
          </h2>
          <p className="text-[#c3c6d7] text-[15px] leading-[24px] max-w-xl mx-auto">
            {t("home.focus.desc")}
          </p>
        </div>

        {/* 4-col bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          {/* ── Backend Systems ── */}
          <div
            className="md:col-span-2 glass-card rounded-2xl p-7 reveal flex flex-col gap-5 group relative overflow-hidden"
            style={{ transition: "box-shadow 0.4s ease" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 0 1px rgba(180,197,255,0.25), 0 8px 40px rgba(180,197,255,0.12)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
          >
            <div
              className="w-full h-36 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(180,197,255,0.12) 0%, rgba(180,197,255,0.04) 100%)",
                border: "1px solid rgba(180,197,255,0.18)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b4c5ff] to-transparent opacity-40" />
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/[0.05] to-transparent rounded-t-xl" />
              <span
                className="absolute inset-0 flex items-center justify-center text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: "#b4c5ff", opacity: 0.07, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.05em" }}
              >
                {backendDist.value}
              </span>
              <div
                className="absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(180,197,255,0.15)", animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite" }}
              />
              <span
                className="material-symbols-outlined relative z-10 transition-all duration-500 group-hover:scale-110"
                style={{ fontSize: "56px", color: "#b4c5ff", filter: "drop-shadow(0 0 20px #b4c5ff80)" }}
              >
                {backendDist.icon}
              </span>
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#b4c5ff] opacity-60"
                style={{ boxShadow: "0 0 6px #b4c5ff" }} />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0c1324]/40 to-transparent" />
            </div>

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[18px] font-semibold text-[#eef0ff] leading-tight">{backendDist.label}</h3>
              <span
                className="text-[22px] font-black tabular-nums flex-shrink-0"
                style={{ color: "#b4c5ff", fontFamily: "'JetBrains Mono', monospace" }}
              >{backendDist.value}%</span>
            </div>
            <p className="text-[#c3c6d7] text-[14px] leading-[22px]">
              {backendDist.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {(backendDist.chips || []).map(c => (
                <span key={c} className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide border"
                  style={{ color: "#b4c5ff", background: "rgba(180,197,255,0.08)", borderColor: "rgba(180,197,255,0.22)", fontFamily: "'JetBrains Mono', monospace" }}>{c}</span>
              ))}
            </div>
            <div className="h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #b4c5ff, #b4c5ff30)" }} />
          </div>

          {/* ── Full-Stack Development ── */}
          <div
            className="md:col-span-2 glass-card rounded-2xl p-7 reveal flex flex-col gap-5 group relative overflow-hidden"
            style={{ transitionDelay: "0.12s", transition: "box-shadow 0.4s ease" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 0 1px rgba(76,215,246,0.25), 0 8px 40px rgba(76,215,246,0.12)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
          >
            <div
              className="w-full h-36 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(76,215,246,0.12) 0%, rgba(76,215,246,0.04) 100%)",
                border: "1px solid rgba(76,215,246,0.18)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4cd7f6] to-transparent opacity-40" />
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/[0.05] to-transparent rounded-t-xl" />
              <span
                className="absolute inset-0 flex items-center justify-center text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: "#4cd7f6", opacity: 0.07, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.05em" }}
              >
                {fullstackDist.value}
              </span>
              <div
                className="absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(76,215,246,0.15)", animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite" }}
              />
              <span
                className="material-symbols-outlined relative z-10 transition-all duration-500 group-hover:scale-110"
                style={{ fontSize: "56px", color: "#4cd7f6", filter: "drop-shadow(0 0 20px #4cd7f680)" }}
              >
                {fullstackDist.icon}
              </span>
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#4cd7f6] opacity-60"
                style={{ boxShadow: "0 0 6px #4cd7f6" }} />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0c1324]/40 to-transparent" />
            </div>

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[18px] font-semibold text-[#eef0ff] leading-tight">{fullstackDist.label}</h3>
              <span
                className="text-[22px] font-black tabular-nums flex-shrink-0"
                style={{ color: "#4cd7f6", fontFamily: "'JetBrains Mono', monospace" }}
              >{fullstackDist.value}%</span>
            </div>
            <p className="text-[#c3c6d7] text-[14px] leading-[22px]">
              {fullstackDist.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {(fullstackDist.chips || []).map(c => (
                <span key={c} className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide border"
                  style={{ color: "#4cd7f6", background: "rgba(76,215,246,0.08)", borderColor: "rgba(76,215,246,0.22)", fontFamily: "'JetBrains Mono', monospace" }}>{c}</span>
              ))}
            </div>
            <div className="h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #4cd7f6, #4cd7f630)" }} />
          </div>

          {/* ── Data Engineering ── */}
          <div
            className="md:col-span-4 glass-card rounded-2xl p-7 reveal flex flex-col md:flex-row gap-6 group relative overflow-hidden"
            style={{ transitionDelay: "0.24s", transition: "box-shadow 0.4s ease" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 0 1px rgba(210,187,255,0.25), 0 8px 40px rgba(210,187,255,0.12)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
          >
            <div
              className="w-full md:w-52 h-36 md:h-auto rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(210,187,255,0.12) 0%, rgba(210,187,255,0.04) 100%)",
                border: "1px solid rgba(210,187,255,0.18)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d2bbff] to-transparent opacity-40" />
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/[0.05] to-transparent rounded-t-xl" />
              <span
                className="absolute inset-0 flex items-center justify-center text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: "#d2bbff", opacity: 0.07, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.05em" }}
              >
                {dataDist.value}
              </span>
              <div
                className="absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(210,187,255,0.15)", animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite" }}
              />
              <span
                className="material-symbols-outlined relative z-10 transition-all duration-500 group-hover:scale-110"
                style={{ fontSize: "56px", color: "#d2bbff", filter: "drop-shadow(0 0 20px #d2bbff80)" }}
              >
                {dataDist.icon}
              </span>
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#d2bbff] opacity-60"
                style={{ boxShadow: "0 0 6px #d2bbff" }} />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0c1324]/40 to-transparent" />
            </div>

            <div className="flex flex-col gap-4 flex-grow justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[18px] font-semibold text-[#eef0ff] leading-tight">{dataDist.label}</h3>
                  <span
                    className="text-[22px] font-black tabular-nums flex-shrink-0"
                    style={{ color: "#d2bbff", fontFamily: "'JetBrains Mono', monospace" }}
                  >{dataDist.value}%</span>
                </div>
                <p className="text-[#c3c6d7] text-[14px] leading-[22px]">
                  {dataDist.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(dataDist.chips || []).map(c => (
                  <span key={c} className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide border"
                    style={{ color: "#d2bbff", background: "rgba(210,187,255,0.08)", borderColor: "rgba(210,187,255,0.22)", fontFamily: "'JetBrains Mono', monospace" }}>{c}</span>
                ))}
              </div>
              <div className="h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #d2bbff, #d2bbff30)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          TECHNICAL SKILLS
      ───────────────────────────────────────── */}
      <section
        id="skills"
        className="py-[120px] max-w-[1200px] mx-auto px-[24px]"
      >
        <div className="text-center mb-16 reveal">
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.015em] mb-4 text-[#eef0ff]">
            {t("home.skills.title")}
          </h2>
          <p className="text-[#c3c6d7] max-w-2xl mx-auto">
            {t("home.skills.desc")}
          </p>
          <div className="w-20 h-1 bg-[#b4c5ff] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map(({ icon, title, items, delay }) => (
            <div
              key={title}
              className="skill-card p-6 rounded-2xl reveal"
              style={delay ? { transitionDelay: delay } : {}}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#b4c5ff] text-3xl">
                  {icon}
                </span>
                <h3 className="text-[24px] leading-[32px] font-semibold text-[#eef0ff]">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#b4c5ff]/10 text-[#b4c5ff] px-3 py-1 rounded-full text-[14px] leading-[20px] font-medium tracking-[0.05em] hover:scale-105 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          TECH MARQUEE
      ───────────────────────────────────────── */}
      <section className="py-12 border-y border-[#434655]/30 overflow-hidden bg-[#070e1e]/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 text-[24px] leading-[32px] font-semibold text-[#c3c6d7] opacity-60 mx-8"
            >
              <span className="material-symbols-outlined text-[#b4c5ff]">
                {item.icon}
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FEATURED PROJECTS
      ───────────────────────────────────────── */}
      <section
        id="projects"
        className="py-[120px] max-w-[1200px] mx-auto px-[24px]"
      >
        <div className="text-center mb-16 reveal">
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.015em] mb-4 text-[#eef0ff]">
            {t("home.projects.title")}
          </h2>
          <div className="w-20 h-1 bg-[#b4c5ff] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TaskFlow */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full reveal">
            <div className="h-64 rounded-xl bg-[#ffffff] mb-6 overflow-hidden flex items-center justify-center p-4">
              <img
                className="h-full object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                src="/assets/taskflow/preview.png"
                alt="TaskFlow mobile app"
              />
            </div>
            <div className="flex gap-2 mb-4">
              <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] border border-[#b4c5ff]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
                Node.js
              </span>
              <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] border border-[#b4c5ff]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
                React Native
              </span>
              <span className="bg-[#b4c5ff]/10 text-[#b4c5ff] border border-[#b4c5ff]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
                Prisma
              </span>
            </div>
            <h3 className="text-[24px] leading-[32px] font-semibold mb-3 text-[#eef0ff]">
              TaskFlow
            </h3>
            <p className="text-[16px] leading-[24px] text-[#c3c6d7] flex-grow mb-6">
              {t("home.projects.tfDesc")}
            </p>
            <button
              onClick={() => navigate("taskflow")}
              className="flex items-center gap-2 text-[#b4c5ff] text-[14px] font-medium tracking-[0.05em] hover:gap-3 transition-all cursor-pointer"
            >
              {t("home.projects.caseStudy")}{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          {/* Elora Store */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full reveal">
            <div className="h-64 rounded-xl bg-gradient-to-br from-[#1c2336] to-[#0c1324] mb-6 overflow-hidden flex items-center justify-center p-4 relative group/img border border-[#434655]/20">
              <div className="absolute inset-0 bg-radial from-[#d2bbff]/5 to-transparent pointer-events-none" />
              
              <div className="relative w-full h-full rounded-lg border border-[#3d475d] bg-[#070e1e] shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all duration-500 group-hover/img:scale-105 group-hover/img:border-[#d2bbff]/50">
                <div className="h-6 bg-[#141b2c] border-b border-[#3d475d] px-2.5 flex items-center gap-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                  <div className="h-3 bg-[#0c1324] rounded-md flex-grow mx-4 max-w-[120px] opacity-40" />
                </div>
                <img
                  className="w-full h-full object-cover object-top"
                  src="/assets/elorastore/home.png"
                  alt="Elora Store"
                />
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <span className="bg-[#d2bbff]/10 text-[#d2bbff] border border-[#d2bbff]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
                NodeJs
              </span>
              <span className="bg-[#d2bbff]/10 text-[#d2bbff] border border-[#d2bbff]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
                ReactJS
              </span>
              <span className="bg-[#d2bbff]/10 text-[#d2bbff] border border-[#d2bbff]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
                MongoDB
              </span>
            </div>
            <h3 className="text-[24px] leading-[32px] font-semibold mb-3 text-[#eef0ff]">
              Elora Store
            </h3>
            <p className="text-[16px] leading-[24px] text-[#c3c6d7] flex-grow mb-6">
              {t("home.projects.eloraDesc")}
            </p>
            <button
              onClick={() => navigate("elora")}
              className="flex items-center gap-2 text-[#b4c5ff] text-[14px] font-medium tracking-[0.05em] hover:gap-3 transition-all cursor-pointer"
            >
              {t("home.projects.caseStudy")}{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* House Price Prediction */}
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full reveal mt-12">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="bg-[#7dd3fc]/10 text-[#7dd3fc] border border-[#7dd3fc]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
              Python
            </span>
            <span className="bg-[#7dd3fc]/10 text-[#7dd3fc] border border-[#7dd3fc]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
              Pandas
            </span>
            <span className="bg-[#7dd3fc]/10 text-[#7dd3fc] border border-[#7dd3fc]/20 px-3 py-1 rounded-full text-[14px] font-medium tracking-[0.05em]">
              Scikit-Learn
            </span>
          </div>

          <h3 className="text-[24px] leading-[32px] font-semibold mb-3 text-[#eef0ff]">
            House Price Prediction
          </h3>

          <p className="text-[16px] leading-[24px] text-[#c3c6d7] flex-grow mb-6">
            {t("home.projects.houseDesc")}
          </p>
          <a
            href="https://colab.research.google.com/drive/1DO39LVZKOeaJp7LGNATyU3Nk3mf5Zr5X?usp=sharing"
            className="flex items-center gap-2 text-[#7dd3fc] text-[14px] font-medium tracking-[0.05em] hover:gap-3 transition-all"
          >
            {t("home.projects.caseStudy")}{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="flex items-center justify-center mt-12">
          <a
            href="https://github.com/ZzzNTKzzZ?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#7dd3fc] text-[14px] font-medium tracking-[0.05em] hover:gap-3 transition-all"
          >
            {t("home.projects.repositories")}
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          EXPERIENCE & EDUCATION (inline strip)
      ───────────────────────────────────────── */}
      <section className="py-[80px] bg-[#070e1e]/30">
        <div className="max-w-[1200px] mx-auto px-[24px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="reveal" id="experience">
            <h2 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] font-bold tracking-[-0.02em] mb-8 text-[#eef0ff]">
              {t("home.experience.title")}
            </h2>
            <div className="space-y-8 relative">
              <div className="timeline-line relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#b4c5ff] flex items-center justify-center shadow-[0_0_15px_rgba(180,197,255,0.6)]">
                  <div className="w-2 h-2 rounded-full bg-[#0c1324]" />
                </div>
                <div>
                  <h4 className="text-[24px] leading-[32px] font-semibold text-[#eef0ff]">
                    {t("home.experience.teamTitle")}
                  </h4>
                  <p className="text-[#b4c5ff] text-[14px] font-medium tracking-[0.05em] mb-2">
                    {t("home.experience.teamPeriod")}
                  </p>
                  <p className="text-[#c3c6d7] text-[16px] leading-[24px]">
                    {t("home.experience.teamDesc")}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("experience")}
              className="mt-8 flex items-center gap-2 text-[#b4c5ff] text-[14px] font-medium hover:gap-3 transition-all cursor-pointer"
            >
              {t("home.experience.timeline")}{" "}
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Education */}
          <div className="reveal" id="education">
            <h2 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] font-bold tracking-[-0.02em] mb-8 text-[#eef0ff]">
              {t("home.education.title")}
            </h2>
            <div className="space-y-8 relative">
              <div className="timeline-line relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#4cd7f6] flex items-center justify-center shadow-[0_0_15px_rgba(76,215,246,0.6)]">
                  <div className="w-2 h-2 rounded-full bg-[#0c1324]" />
                </div>
                <div>
                  <h4 className="text-[24px] leading-[32px] font-semibold text-[#eef0ff]">
                    {t("home.education.school")}
                  </h4>
                  <p className="text-[#4cd7f6] text-[14px] font-medium tracking-[0.05em] mb-2">
                    {t("home.education.degree")}
                  </p>
                  <div className="inline-block px-4 py-1.5 rounded-full glass-card border border-[#4cd7f6]/30 text-[#4cd7f6] text-[14px] font-medium mb-4">
                    {t("home.education.gpa")}
                  </div>
                  <p className="text-[#c3c6d7] text-[16px] leading-[24px]">
                    {t("home.education.desc")}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("education")}
              className="mt-8 flex items-center gap-2 text-[#b4c5ff] text-[14px] font-medium hover:gap-3 transition-all cursor-pointer"
            >
              {t("home.education.profile")}{" "}
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ENGINEERING PRINCIPLES
      ───────────────────────────────────────── */}
      <section className="py-[120px] max-w-[1200px] mx-auto px-[24px]">
        <div className="text-center mb-16 reveal">
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.015em] mb-4 text-[#eef0ff]">
            {t("home.principles.title")}
          </h2>
          <p className="text-[#c3c6d7] max-w-lg mx-auto">
            {t("home.principles.desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map(({ icon, title, desc, delay }) => (
            <div
              key={title}
              className="glass-card p-8 rounded-2xl reveal"
              style={{ transitionDelay: delay }}
            >
              <span className="material-symbols-outlined text-[#b4c5ff] text-4xl mb-6 block">
                {icon}
              </span>
              <h3 className="text-[24px] leading-[32px] font-semibold mb-3 text-[#eef0ff]">
                {title}
              </h3>
              <p className="text-[#c3c6d7] text-[16px] leading-[24px]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FUTURE GOALS & GUIDANCE
      ───────────────────────────────────────── */}
      <section
        id="future-goals"
        className="py-[120px] max-w-[1200px] mx-auto px-[24px]"
      >
        <div className="text-center mb-16 reveal">
          <p
            className="text-[#b4c5ff] text-[12px] font-semibold tracking-[0.1em] uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {t("home.goals.tag")}
          </p>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.015em] mb-4">
            <span className="gradient-text-tri">{t("home.goals.title")}</span>{" "}
            <span className="text-[#eef0ff]">{t("home.goals.amp")} {t("home.goals.guidance")}</span>
          </h2>
          <p className="text-[#c3c6d7] max-w-2xl mx-auto text-[16px] leading-[24px]">
            {t("home.goals.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b4c5ff] via-[#4cd7f6] to-[#d2bbff] mx-auto mt-6 rounded-full" />
        </div>

        {/* Main narrative card */}
        <div className="glass-card rounded-3xl p-10 md:p-14 mb-12 reveal relative overflow-hidden">
          <span
            className="absolute top-6 right-8 text-[#b4c5ff] opacity-[0.05] text-[80px] font-black leading-none select-none pointer-events-none"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            &gt;_
          </span>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#b4c5ff]/10 border border-[#b4c5ff]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(180,197,255,0.15)]">
              <span className="material-symbols-outlined text-[#b4c5ff] text-2xl">
                rocket_launch
              </span>
            </div>
            <div>
              <h3 className="text-[22px] leading-[30px] font-semibold text-[#eef0ff] mb-1">
                {t("home.goals.visionTitle")}
              </h3>
              <p
                className="text-[#b4c5ff] text-[12px] font-medium tracking-[0.08em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t("home.goals.visionRole")}
              </p>
            </div>
          </div>

          <div className="space-y-5 text-[#c3c6d7] text-[17px] leading-[28px]">
            <p>{t("home.goals.p1")}</p>
            <p>{t("home.goals.p2")}</p>
            <p>{t("home.goals.p3")}</p>
          </div>
        </div>

        {/* Focus pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const meta = pillarMeta[idx] || {};
            return (
              <div
                key={pillar.title}
                className="glass-card p-6 rounded-2xl reveal flex flex-col"
                style={{ transitionDelay: meta.delay }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: meta.color }}
                  >
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-[18px] leading-[26px] font-semibold text-[#eef0ff] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#c3c6d7] text-[14px] leading-[22px] flex-grow mb-4">
                  {pillar.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(pillar.chips || []).map((chip) => (
                    <span
                      key={chip}
                      className="tech-chip px-2.5 py-1 rounded-full text-[11px] font-medium tracking-[0.05em] border"
                      style={{
                        color: meta.color,
                        background: meta.bg,
                        borderColor: meta.border,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap timeline */}
        <div className="glass-card rounded-3xl p-10 reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#b4c5ff] text-3xl">
              timeline
            </span>
            <h3 className="text-[22px] leading-[30px] font-semibold text-[#eef0ff]">
              {t("home.goals.roadmapTitle")}
            </h3>
          </div>
          <div className="space-y-0">
            {roadmap.map(
              ({ phase, period, title, desc, tags }, idx, arr) => {
                const meta = roadmapMeta[idx] || {};
                return (
                  <div
                    key={phase}
                    className={`relative pl-10 ${idx < arr.length - 1 ? "pb-10" : ""}`}
                  >
                    {idx < arr.length - 1 && (
                      <div className="absolute left-[11px] top-6 w-[2px] h-full bg-[#1d2438]" />
                    )}
                    <div
                      className="absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: meta.color, boxShadow: `0 0 15px ${meta.glow}` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0c1324]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-3 mb-1">
                        <span
                          className="text-[11px] font-semibold tracking-[0.1em] uppercase"
                          style={{
                            color: meta.color,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {phase}
                        </span>
                        <span
                          className="text-[#8e90a1] text-[13px]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {period}
                        </span>
                      </div>
                      <h4 className="text-[18px] leading-[26px] font-semibold text-[#eef0ff] mb-2">
                        {title}
                      </h4>
                      <p className="text-[#c3c6d7] text-[15px] leading-[24px] mb-3">
                        {desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(tags || []).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.05em] border"
                            style={{
                              color: meta.color,
                              background: `${meta.color}10`,
                              borderColor: `${meta.color}30`,
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CONTACT
      ───────────────────────────────────────── */}
      <section id="contact" className="py-[120px] bg-[#283044]/10">
        <div className="max-w-[1200px] mx-auto px-[24px]">
          <div className="glass-card max-w-4xl mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row reveal">
            {/* Left panel */}
            <div className="md:w-1/3 bg-[#003ea8] p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-[28px] leading-[36px] font-semibold tracking-[-0.015em] mb-4 leading-tight">
                  {t("home.contact.title")}
                </h2>
                <p className="opacity-80 text-[16px] leading-[24px]">
                  {t("home.contact.subtitle")}
                </p>
              </div>
              <div className="space-y-4 mt-8">
                <a href="tel:0899714487" className="flex items-center gap-3 hover:text-[#b4c5ff] transition-colors">
                  <span className="material-symbols-outlined">call</span>
                  <span className="text-sm">0899 714 487</span>
                </a>
                <a href="mailto:ntk22052006@gmail.com" className="flex items-center gap-3 hover:text-[#b4c5ff] transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="text-sm">ntk22052006@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="text-sm">{language === 'en' ? 'Da Nang, Vietnam' : 'Đà Nẵng, Việt Nam'}</span>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="md:w-2/3 p-12 bg-[#1d2438]">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-medium tracking-[0.05em] text-[#c3c6d7]">
                      {t("home.contact.labelName")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("home.contact.placeholderName")}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#141b2c] border border-[#434655] text-[#eef0ff] rounded-lg px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] transition-all outline-none placeholder:text-[#434655]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-medium tracking-[0.05em] text-[#c3c6d7]">
                      {t("home.contact.labelEmail")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("home.contact.placeholderEmail")}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#141b2c] border border-[#434655] text-[#eef0ff] rounded-lg px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] transition-all outline-none placeholder:text-[#434655]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-medium tracking-[0.05em] text-[#c3c6d7]">
                    {t("home.contact.labelMsg")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t("home.contact.placeholderMsg")}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#141b2c] border border-[#434655] text-[#eef0ff] rounded-lg px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#b4c5ff] focus:border-[#b4c5ff] transition-all outline-none placeholder:text-[#434655] resize-none"
                  />
                </div>
                {statusMessage && (
                  <div
                    className={`p-3 rounded-lg text-[14px] font-medium ${
                      statusMessage.includes("✓")
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#b4c5ff] text-[#002d84] text-[14px] font-medium tracking-[0.05em] py-4 rounded-xl hover:brightness-110 shadow-lg shadow-[#b4c5ff]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? t("home.contact.sending") : t("home.contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
