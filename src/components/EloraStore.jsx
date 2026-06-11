import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const stack = [
  { label: "React 19", color: "primary" },
  { label: "React Router", color: "primary" },
  { label: "SCSS", color: "primary" },
  { label: "Node.js", color: "secondary" },
  { label: "Express", color: "secondary" },
  { label: "MongoDB", color: "secondary" },
  { label: "Mongoose", color: "secondary" },
  { label: "JWT", color: "neutral" },
  { label: "bcrypt", color: "neutral" },
];

export default function EloraStore({ navigate }) {
  const scrollRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [showDeployNotice, setShowDeployNotice] = useState(false);
  const { language, t } = useLanguage();

  const systemMetrics = t("elorastore.metrics") || [];
  const performance = t("elorastore.performance") || [];
  const dataFlows = t("elorastore.flows") || [];
  const failureCases = t("elorastore.resilience") || [];
  const apiDesign = t("elorastore.apiDesign") || [];
  const security = t("elorastore.security") || [];
  const achievements = t("elorastore.achievements") || [];
  const impact = t("elorastore.impacts") || [];
  const features = t("elorastore.features") || [];
  const challenges = t("elorastore.challenges") || [];
  const learnings = t("elorastore.learnings") || [];

  const galleryMeta = [
    { src: "/assets/elorastore/popularcategory.png" },
    { src: "/assets/elorastore/itemdetail.png" },
    { src: "/assets/elorastore/adminproduct.png" },
    { src: "/assets/elorastore/adminuser.png" },
  ];

  const gallery = (t("elorastore.gallery") || []).map((gal, idx) => ({
    ...gal,
    ...galleryMeta[idx],
  }));

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (activeImage || showDeployNotice) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
        setShowDeployNotice(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, showDeployNotice]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId;
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 5) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const card = container.firstElementChild;
          if (card) {
            const cardWidth = card.clientWidth + 24; // width + gap
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => startAutoScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pt-24 pb-32">
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob bg-[#b4c5ff] w-[600px] h-[600px] -top-40 -left-40" />
          <div className="aurora-blob bg-[#4cd7f6] w-[500px] h-[500px] top-1/2 -right-40" />
        </div>
        <div className="max-w-[1200px] mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#b4c5ff]/10 border border-[#b4c5ff]/20 rounded-full text-[#b4c5ff] text-xs font-mono mb-6 animate-pulse">
            <span className="material-symbols-outlined text-lg">
              shopping_bag
            </span>
            {t("elorastore.tag")}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t("elorastore.title")}
            <br className="hidden md:block" /> {t("elorastore.subtitle")}
          </h1>
          <p className="text-lg text-[#c3c6d7] max-w-3xl mx-auto mb-8">
            {t("elorastore.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-[#070e1e] py-3 px-8 rounded-lg text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined text-lg">code</span>{" "}
              {t("elorastore.viewGit")}
            </a>
            <button
              onClick={() => setShowDeployNotice(true)}
              className="border border-[#434655] text-[#c3c6d7] py-3 px-8 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#283044] hover:text-[#b4c5ff] transition-all cursor-pointer bg-transparent outline-none"
            >
              <span className="material-symbols-outlined text-lg">
                open_in_new
              </span>{" "}
              {t("elorastore.viewLive")}
            </button>
          </div>
        </div>
      </section>

      {/* Overview + Stack */}
      <section className="max-w-[1200px] mx-auto px-6 mt-24 mb-24 reveal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-[#141b2c] p-10 rounded-2xl border border-[#434655]/20 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-5">{t("elorastore.visionTitle")}</h2>
            <p className="text-[#c3c6d7] leading-relaxed mb-10">
              {t("elorastore.visionDesc")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                [t("elorastore.timelineLabel"), "4 Months"],
                [t("elorastore.roleLabel"), t("elorastore.roleVal")],
                [t("elorastore.catLabel"), "SaaS / Retail"],
                [t("elorastore.statusLabel"), "Production"],
              ].map(([lbl, val]) => (
                <div key={lbl}>
                  <p className="text-[#b4c5ff] text-xs font-mono mb-1">{lbl}</p>
                  <p className="text-lg font-bold text-white">{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 bg-[#283044] p-8 rounded-2xl border border-[#434655]/20 h-full">
            <h3 className="text-lg font-bold text-white mb-5">
              {t("elorastore.stackTitle")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.map(({ label, color }) => (
                <span
                  key={label}
                  className={`tech-chip border px-3 py-1 rounded-lg text-xs font-mono ${
                    color === "primary"
                      ? "bg-[#141b2c] border-[#b4c5ff]/20 text-[#b4c5ff]"
                      : color === "secondary"
                        ? "bg-[#141b2c] border-[#4cd7f6]/20 text-[#4cd7f6]"
                        : "bg-[#141b2c] border-[#434655]/40 text-[#c3c6d7]"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Metrics & Impact */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Metrics Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            {systemMetrics.map((metric) => (
              <div 
                key={metric.label}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(180,197,255,0.1)] transition-all duration-300 group"
              >
                <p className="text-[#b4c5ff] text-xs font-mono mb-2 uppercase tracking-wider">{metric.label}</p>
                <p className="text-3xl font-bold font-mono text-white group-hover:text-[#4cd7f6] transition-colors">{metric.value}</p>
              </div>
            ))}
          </div>
          {/* Impact */}
          <div className="bg-[#283044]/40 border border-[#434655]/20 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">trending_up</span> {t("elorastore.impactTitle")}
              </h3>
              <ul className="space-y-4">
                {impact.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-xl shrink-0">done_all</span>
                    <span className="text-[#c3c6d7] text-sm leading-relaxed">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Achievements */}
      <section className="max-w-[1200px] mx-auto px-6 mt-24 reveal">
        <div className="bg-[#141b2c] p-10 rounded-2xl border border-[#434655]/20 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#4cd7f6] text-2xl">
              emoji_events
            </span>
            <h2 className="text-3xl font-bold text-white">
              {language === 'en' ? 'Project ' : 'Thành tựu '}
              <span className="text-[#4cd7f6]">
                {language === 'en' ? 'Achievements' : 'Đạt được'}
              </span>
            </h2>
          </div>
          <ul className="space-y-4">
            {achievements.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#283044] border border-white/5 hover:border-[#4cd7f6]/30 transition-all duration-300 group"
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{
                    backgroundColor: [
                      "#b4c5ff",
                      "#4cd7f6",
                      "#d2bbff",
                      "#b4c5ff",
                      "#4cd7f6",
                      "#d2bbff",
                    ][i % 6],
                    boxShadow: `0 0 8px ${["#b4c5ff", "#4cd7f6", "#d2bbff", "#b4c5ff", "#4cd7f6", "#d2bbff"][i % 6]}90`,
                  }}
                />
                <span className="text-[#c3c6d7] text-sm leading-relaxed group-hover:text-white transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bg-[#070e1e]/60 py-24 mt-24 border-y border-[#434655]/10 reveal">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">
              {t("elorastore.archTitle")}
            </h2>
            <p className="text-[#c3c6d7]">
              {t("elorastore.archSub")}
            </p>
          </div>
          <div className="relative bg-[#141b2c] p-12 rounded-3xl border border-[#b4c5ff]/10 shadow-2xl overflow-hidden">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#b4c5ff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              {[
                {
                  icon: "devices",
                  label: t("elorastore.nodes.0.label") || "Frontend",
                  sublabel: t("elorastore.nodes.0.sub") || "React 19 / React Router / SCSS",
                  color: "#b4c5ff",
                  bg: "bg-[#b4c5ff]/10",
                  border: "border-[#b4c5ff]/20",
                },
                {
                  icon: "settings_ethernet",
                  label: t("elorastore.nodes.1.label") || "Middleware",
                  sublabel: t("elorastore.nodes.1.sub") || "Node.js / Express / JWT",
                  color: "#4cd7f6",
                  bg: "bg-[#4cd7f6]/10",
                  border: "border-[#4cd7f6]/20",
                },
                {
                  icon: "database",
                  label: t("elorastore.nodes.2.label") || "Data Layer",
                  sublabel: t("elorastore.nodes.2.sub") || "MongoDB / Mongoose ODM",
                  color: "#d2bbff",
                  bg: "bg-[#d2bbff]/10",
                  border: "border-[#d2bbff]/20",
                },
              ].map((node, i) => (
                <div
                  key={node.label}
                  className="flex flex-col items-center gap-4 flex-1 group"
                >
                  <div
                    className={`w-24 h-24 ${node.bg} rounded-2xl flex items-center justify-center ${node.border} border group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <span
                      className="material-symbols-outlined text-5xl"
                      style={{ color: node.color }}
                    >
                      {node.icon}
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white">
                      {node.label}
                    </h4>
                    <p className="text-xs text-[#c3c6d7] font-mono mt-1">
                      {node.sublabel}
                    </p>
                  </div>
                  {i < 2 && (
                    <div
                      className="hidden md:block absolute h-px bg-gradient-to-r from-[#b4c5ff]/30 to-[#4cd7f6]/30"
                      style={{
                      width: "12%",
                      left: `${25 + i * 37}%`,
                      top: "35%",
                      transform: "translateY(-50%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API & Security Architecture */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* API Design */}
          <div className="glass-card p-8 rounded-3xl border border-[#434655]/20 shadow-lg bg-[#141b2c]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#b4c5ff]">api</span>
              {t("elorastore.apiSecTitle")}
            </h3>
            <ul className="space-y-4">
              {apiDesign.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#0c1324]/50 border border-white/5">
                  <span className="text-xs font-mono text-[#4cd7f6] bg-[#4cd7f6]/10 px-2 py-0.5 rounded shrink-0">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-[#c3c6d7] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div className="glass-card p-8 rounded-3xl border border-[#434655]/20 shadow-lg bg-[#141b2c]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d2bbff]">security</span>
              {t("elorastore.secTitle")}
            </h3>
            <ul className="space-y-4">
              {security.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#0c1324]/50 border border-white/5">
                  <span className="text-xs font-mono text-[#d2bbff] bg-[#d2bbff]/10 px-2 py-0.5 rounded shrink-0">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-[#c3c6d7] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 reveal">
        <h2 className="text-3xl font-bold text-white mb-14 text-center">
          {language === 'en' ? 'Core ' : 'Tính năng '}
          <span className="text-[#b4c5ff]">
            {language === 'en' ? 'Features' : 'Cốt lõi'}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-2xl border border-[#434655]/20 bg-[#141b2c] hover:border-[#b4c5ff]/40 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#b4c5ff]/10">
                <span className="material-symbols-outlined text-[#b4c5ff]">
                  {icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#b4c5ff] transition-colors">
                {title}
              </h3>
              <p className="text-[#c3c6d7] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Flows & Performance */}
      <section className="bg-[#070e1e]/60 py-24 border-y border-[#434655]/10 mb-24 reveal">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Performance Comparison */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t("elorastore.perfTitle")}</h3>
              <p className="text-[#c3c6d7] text-sm mb-8">{t("elorastore.perfSub")}</p>
              <div className="space-y-6">
                {performance.map((item, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-[#434655]/20 bg-[#141b2c]">
                    <h4 className="text-base font-bold text-[#b4c5ff] mb-4">{item.title}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#ff5f56]/10 border border-[#ff5f56]/20 p-3 rounded-xl">
                        <p className="text-[10px] font-mono text-[#ff5f56] uppercase tracking-wider mb-1">Before</p>
                        <p className="text-xs text-[#c3c6d7] font-mono">{item.before}</p>
                      </div>
                      <div className="bg-[#27c93f]/10 border border-[#27c93f]/20 p-3 rounded-xl shadow-[0_0_15px_rgba(39,201,63,0.15)]">
                        <p className="text-[10px] font-mono text-[#27c93f] uppercase tracking-wider mb-1">After</p>
                        <p className="text-xs text-white font-mono font-semibold">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Data Flows */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t("elorastore.stateTitle")}</h3>
              <p className="text-[#c3c6d7] text-sm mb-8">{t("elorastore.stateSub")}</p>
              <div className="space-y-8">
                {dataFlows.map((flow, fIdx) => (
                  <div key={fIdx} className="glass-card p-6 rounded-2xl border border-[#434655]/20 bg-[#141b2c]">
                    <h4 className="text-base font-bold text-[#4cd7f6] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">swap_calls</span>
                      {flow.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
                      {flow.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex flex-col items-center justify-center relative bg-[#0c1324]/50 border border-white/5 px-2 py-3 rounded-xl text-center">
                          <span className="text-[10px] font-mono text-[#4cd7f6] opacity-60 mb-1">0{sIdx + 1}</span>
                          <p className="text-[11px] font-mono text-white leading-snug">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 reveal">
        <h2 className="text-3xl font-bold text-white mb-16 text-center md:text-left">
          {t("elorastore.challTitle")}
        </h2>
        <div className="space-y-16">
          {challenges.map(({ num, color, title, problem, solution }, i) => (
            <div
              key={num}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div
                  className="text-xs font-mono mb-2 tracking-widest"
                  style={{ color: color || "#4cd7f6" }}
                >
                  {num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-[#c3c6d7] leading-relaxed">{problem}</p>
              </div>
              <div
                className="bg-[#141b2c] p-8 rounded-2xl border-l-4 shadow-lg md:order-1"
                style={{ borderColor: color || "#4cd7f6", boxShadow: `0 0 20px ${color || "#4cd7f6"}10` }}
              >
                <h4
                  className="text-xs font-mono mb-3 uppercase tracking-widest"
                  style={{ color: color || "#4cd7f6" }}
                >
                  {language === 'en' ? 'The Solution' : 'Giải pháp'}
                </h4>
                <p className="text-[#eef0ff] text-sm leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Resilience & Error Recovery */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="glass-card p-10 rounded-3xl border border-[#434655]/20 bg-[#141b2c] shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#ff5f56] text-2xl">shield_heart</span>
            <h2 className="text-3xl font-bold text-white">
              {language === 'en' ? 'System Resilience & ' : 'Độ bền bỉ Hệ thống & '}
              <span className="text-[#ff5f56]">
                {language === 'en' ? 'Error Recovery' : 'Khôi phục Lỗi'}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {failureCases.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#0c1324]/50 border border-white/5 flex flex-col justify-between hover:border-[#ff5f56]/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#ff5f56] font-mono text-xs uppercase tracking-wider mb-3">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    {item.scenario}
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-[#27c93f]/5 border border-[#27c93f]/20">
                  <p className="text-[10px] font-mono text-[#27c93f] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">check_circle</span>
                    {t("elorastore.mitigationLabel")}
                  </p>
                  <p className="text-xs text-white font-mono leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24 reveal">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          {t("elorastore.showcaseTitle")}
        </h2>
        {/* Horizontal scroll indicator / helper */}
        <div className="flex justify-end items-center gap-2 mb-4 text-[#b4c5ff] text-xs font-mono opacity-80">
          <span className="material-symbols-outlined text-sm animate-pulse">swap_horizontal</span>
          <span>{t("elorastore.showcaseScroll")}</span>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory">
          {gallery.map(({ src, label }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-[#434655]/20 shadow-2xl hover:border-[#b4c5ff]/40 hover:scale-[1.02] transition-all duration-500 bg-[#070e1e] flex flex-col w-[85%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setActiveImage(src)}
            >
              {/* Browser Header */}
              <div className="h-6 bg-[#141b2c] border-b border-[#3d475d]/50 px-2.5 flex items-center gap-1 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                <div className="h-3 bg-[#0c1324] rounded-md flex-grow mx-4 max-w-[100px] opacity-40" />
              </div>
              {/* Screen Image */}
              <img
                src={src}
                alt={label}
                className="w-full aspect-[16/10] object-cover object-top transition-all duration-500 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-t from-[#070e1e] via-[#070e1e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b4c5ff]" />
                  <span className="text-white text-sm font-mono">{label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16 reveal">
        <div className="bg-[#283044] p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#b4c5ff]/15 blur-[140px] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4cd7f6]/10 blur-[100px] -ml-32 -mb-32" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-10">
              {t("elorastore.learnTitle")}
            </h2>
            <ul className="grid md:grid-cols-2 gap-10">
              {learnings.map(({ num, color, title, body }) => (
                <li key={num} className="flex gap-6 group">
                  <span
                    className="text-2xl font-bold font-mono group-hover:scale-110 transition-transform"
                    style={{ color: color || "#b4c5ff" }}
                  >
                    {num}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {title}
                    </h4>
                    <p className="text-[#c3c6d7] text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("home")}
          className="inline-flex items-center gap-2 text-[#b4c5ff] text-sm font-semibold hover:gap-3 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span> {t("elorastore.back")}
        </button>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-[#c3c6d7] hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300"
            onClick={() => setActiveImage(null)}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          
          {/* Full-size Image */}
          <img
            src={activeImage}
            alt="Full size screenshot"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl transition-all duration-300 cursor-default animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Deploy Notice Modal */}
      {showDeployNotice && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md transition-all duration-300 cursor-pointer"
          onClick={() => setShowDeployNotice(false)}
        >
          <div
            className="glass-card max-w-md w-full p-8 rounded-3xl border border-white/10 bg-[#141b2c]/90 shadow-2xl relative animate-zoomIn m-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close icon */}
            <button
              className="absolute top-4 right-4 text-[#c3c6d7] hover:text-white transition-colors cursor-pointer"
              onClick={() => setShowDeployNotice(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 text-[#ff5f56] mb-4">
              <span className="material-symbols-outlined text-3xl">info</span>
              <h3 className="text-xl font-bold text-white">
                {t("elorastore.deployNotice.title")}
              </h3>
            </div>

            <p className="text-[#c3c6d7] text-sm leading-relaxed mb-6">
              {t("taskflow.deployNotice.message")}
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowDeployNotice(false)}
                className="px-5 py-2.5 rounded-xl border border-[#434655] text-[#eef0ff] hover:bg-white/5 transition-all text-sm font-semibold cursor-pointer"
              >
                {t("elorastore.deployNotice.close")}
              </button>
              <a
                href="https://github.com/ZzzNTKzzZ"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowDeployNotice(false)}
                className="bg-[#b4c5ff] text-[#002d84] px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-[0_0_15px_rgba(180,197,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                {t("elorastore.deployNotice.goToGithub")}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
