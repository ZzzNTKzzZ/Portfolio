import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function TaskFlow({ navigate }) {
  const [activeImage, setActiveImage] = useState(null);
  const [showDeployNotice, setShowDeployNotice] = useState(false);
  const { language, t } = useLanguage();

  // Dynamic translated lists
  const systemMetrics = t("taskflow.metrics") || [];
  const performance = t("taskflow.performance") || [];
  const dataFlows = t("taskflow.flows") || [];
  const failureCases = t("taskflow.resilience") || [];
  const apiDesign = t("taskflow.apiDesign") || [];
  const security = t("taskflow.security") || [];
  const achievements = t("taskflow.achievements") || [];
  const impact = t("taskflow.impacts") || [];
  const features = t("taskflow.features") || [];
  const challenges = t("taskflow.challenges") || [];
  const learnings = t("taskflow.learnings") || [];

  const screenMeta = [
    { src: "/assets/taskflow/home.png", color: "#b4c5ff" },
    { src: "/assets/taskflow/workspace.png", color: "#4cd7f6" },
    { src: "/assets/taskflow/board.png", color: "#d2bbff" },
    { src: "/assets/taskflow/createboard.png", color: "#b4c5ff" },
    { src: "/assets/taskflow/timeline.png", color: "#4cd7f6" },
  ];
  
  const screens = (t("taskflow.screens") || []).map((scr, idx) => ({
    ...scr,
    ...screenMeta[idx],
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

  return (
    <div className="pt-24 pb-32">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#b4c5ff]/10 border border-[#b4c5ff]/20 rounded-full text-[#b4c5ff] text-xs font-mono mb-6">
          <span className="material-symbols-outlined text-lg">task_alt</span>
          {t("taskflow.tag")}
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#eef0ff] mb-5 leading-tight">
          {t("taskflow.title")}
          <br className="hidden md:block" />
          <span className="gradient-text-tri">{t("taskflow.subtitle")}</span>
        </h1>
        <p className="text-lg text-[#c3c6d7] max-w-3xl mx-auto mb-8 leading-relaxed">
          {t("taskflow.desc")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowDeployNotice(true)}
            className="bg-[#b4c5ff] text-[#002d84] px-8 py-4 rounded-xl flex items-center gap-2 text-sm font-semibold hover:shadow-[0_0_20px_rgba(180,197,255,0.4)] transition-all hover:-translate-y-0.5 cursor-pointer border-none outline-none"
          >
            <span className="material-symbols-outlined">launch</span> {t("taskflow.viewLive")}
          </button>
          <a
            href="https://github.com/ZzzNTKzzZ/TaskFlow"
            className="border border-[#434655] bg-[#141b2c] text-[#eef0ff] px-8 py-4 rounded-xl flex items-center gap-2 text-sm font-semibold hover:bg-[#283044] transition-all hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined">code</span> {t("taskflow.viewGit")}
          </a>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] relative group cursor-pointer" onClick={() => setActiveImage("./assets/taskflow/preview.png")}>
          <img
            src="./assets/taskflow/preview.png"
            alt="TaskFlow UI"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1324] to-transparent opacity-40 pointer-events-none" />
        </div>
      </section>

      {/* Overview + Tech */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass-card p-10 rounded-3xl">
            <h2 className="text-3xl font-bold text-[#b4c5ff] mb-5">{t("taskflow.overview")}</h2>
            <p className="text-[#c3c6d7] text-sm leading-relaxed mb-10">
              {t("taskflow.overviewDesc")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                [t("taskflow.roleLabel"), t("taskflow.roleVal")],
                [t("taskflow.timelineLabel"), t("taskflow.timelineVal")],
                [t("taskflow.platformLabel"), t("taskflow.platformVal")],
                [t("taskflow.typeLabel"), t("taskflow.typeVal")],
              ].map(([lbl, val]) => (
                <div key={lbl}>
                  <p className="text-[#8e90a1] text-xs font-mono mb-1">{lbl}</p>
                  <p className="text-[#4cd7f6] font-semibold text-sm">{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 bg-[#283044] border border-white/5 p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#d2bbff] mb-6">
                {t("taskflow.techTitle")}
              </h3>
              <ul className="space-y-4">
                {[
                  { color: "#b4c5ff", text: "Node.js & TypeScript" },
                  { color: "#4cd7f6", text: "PostgreSQL & Prisma" },
                  { color: "#d2bbff", text: "React Native" },
                  { color: "#b4c5ff", text: "JWT Authentication" },
                ].map(({ color, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full shadow-[0_0_8px]"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 8px ${color}90`,
                      }}
                    />
                    <span className="text-[#c3c6d7] text-sm font-mono">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 flex justify-end">
              <span className="material-symbols-outlined text-[64px] text-[#b4c5ff]/20">
                memory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* System Metrics & Impact */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Metrics Grid (Col span 2) */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            {systemMetrics.map((metric) => (
              <div 
                key={metric.label}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(180,197,255,0.1)] transition-all duration-300 group"
              >
                <p className="text-[#8e90a1] text-xs font-mono mb-2 uppercase tracking-wider">{metric.label}</p>
                <p className="text-3xl font-bold font-mono text-[#b4c5ff] group-hover:text-[#4cd7f6] transition-colors">{metric.value}</p>
              </div>
            ))}
          </div>
          {/* Impact (Col span 1) */}
          <div className="bg-[#283044]/40 border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#d2bbff] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">trending_up</span> {t("taskflow.impactTitle")}
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
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="glass-card p-10 rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#4cd7f6] text-2xl">
              emoji_events
            </span>
            <h2 className="text-3xl font-bold text-[#eef0ff]">
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
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#141b2c] border border-white/5 hover:border-[#4cd7f6]/30 transition-all duration-300 group"
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
                    ][i % 5],
                    boxShadow: `0 0 8px ${["#b4c5ff", "#4cd7f6", "#d2bbff", "#b4c5ff", "#4cd7f6"][i % 5]}90`,
                  }}
                />
                <span className="text-[#c3c6d7] text-sm leading-relaxed group-hover:text-[#eef0ff] transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bg-[#070e1e]/60 py-24 border-y border-white/5 reveal">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#eef0ff] mb-3">
              {t("taskflow.archTitle")}
            </h2>
            <p className="text-[#c3c6d7] text-sm">
              A layered architecture separating presentation, business logic,
              and data persistence to improve maintainability and scalability.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 py-8">
            {[
              {
                icon: "smartphone",
                label: "CLIENT",
                sublabel: "React Native",
                color: "#b4c5ff",
                main: false,
              },
              {
                icon: "dns",
                label: "API SERVER",
                sublabel: "Node.js",
                color: "#b4c5ff",
                main: true,
              },
              {
                icon: "database",
                label: "DATABASE",
                sublabel: "PostgreSQL",
                color: "#4cd7f6",
                main: false,
              },
            ].map((node, i) => (
              <div
                key={node.label}
                className="flex flex-col items-center group cursor-default flex-1"
              >
                <div
                  className={`${node.main ? "w-24 h-24 rounded-3xl" : "w-20 h-20 rounded-2xl"} flex items-center justify-center border transition-all duration-300`}
                  style={
                    node.main
                      ? {
                          backgroundColor: "#b4c5ff",
                          color: "#002d84",
                          boxShadow: "0 0 30px rgba(180,197,255,0.3)",
                        }
                      : {
                          background: "rgba(29,36,56,0.8)",
                          borderColor: `${node.color}20`,
                        }
                  }
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: node.main ? "#002d84" : node.color }}
                  >
                    {node.icon}
                  </span>
                </div>
                <p
                  className="mt-4 text-xs font-mono font-bold tracking-widest"
                  style={{ color: node.color }}
                >
                  {node.label}
                </p>
                <p className="text-[10px] text-[#c3c6d7]/60 font-mono">
                  {node.sublabel}
                </p>
                {i < 2 && (
                  <div
                    className="hidden md:block absolute h-px bg-gradient-to-r from-[#b4c5ff]/30 to-[#4cd7f6]/30"
                    style={{
                      width: "12%",
                      left: `${25 + i * 37}%`,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0c1324] px-2 text-[9px] font-mono uppercase tracking-widest"
                      style={{ color: i === 0 ? "#4cd7f6" : "#d2bbff" }}
                    >
                      {i === 0 ? "WebSocket" : "Prisma"}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Security Architecture */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* API Design */}
          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold text-[#b4c5ff] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#b4c5ff]">api</span>
              {t("taskflow.apiSecTitle")}
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
          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold text-[#d2bbff] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d2bbff]">security</span>
              {t("taskflow.secTitle")}
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
        <h2 className="text-3xl font-bold text-[#eef0ff] mb-14 text-center">
          {t("taskflow.coreTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc, color, hover }) => (
            <div
              key={title}
              className={`p-8 rounded-3xl border border-white/5 bg-[#141b2c] ${hover || ""} transition-all duration-300 group`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all"
                style={{ backgroundColor: `${color || "#b4c5ff"}1A` }}
              >
                <span className="material-symbols-outlined" style={{ color: color || "#b4c5ff" }}>
                  {icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#eef0ff] mb-3 group-hover:text-[#b4c5ff] transition-colors">
                {title}
              </h3>
              <p className="text-[#c3c6d7] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Flows & Performance */}
      <section className="bg-[#070e1e]/60 py-24 border-y border-white/5 mb-24 reveal">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Performance Comparison */}
            <div>
              <h3 className="text-2xl font-bold text-[#eef0ff] mb-2">{t("taskflow.perfTitle")}</h3>
              <p className="text-[#c3c6d7] text-sm mb-8">{t("taskflow.perfSub")}</p>
              <div className="space-y-6">
                {performance.map((item, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5">
                    <h4 className="text-base font-bold text-[#b4c5ff] mb-4">{item.title}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#ff5f56]/10 border border-[#ff5f56]/20 p-3 rounded-xl">
                        <p className="text-[10px] font-mono text-[#ff5f56] uppercase tracking-wider mb-1">Before</p>
                        <p className="text-xs text-[#c3c6d7] font-mono">{item.before}</p>
                      </div>
                      <div className="bg-[#27c93f]/10 border border-[#27c93f]/20 p-3 rounded-xl shadow-[0_0_15px_rgba(39,201,63,0.15)]">
                        <p className="text-[10px] font-mono text-[#27c93f] uppercase tracking-wider mb-1">After</p>
                        <p className="text-xs text-[#eef0ff] font-mono font-semibold">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Data Flows */}
            <div>
              <h3 className="text-2xl font-bold text-[#eef0ff] mb-2">{t("taskflow.stateTitle")}</h3>
              <p className="text-[#c3c6d7] text-sm mb-8">{t("taskflow.stateSub")}</p>
              <div className="space-y-8">
                {dataFlows.map((flow, fIdx) => (
                  <div key={fIdx} className="glass-card p-6 rounded-2xl border border-white/5">
                    <h4 className="text-base font-bold text-[#4cd7f6] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">swap_calls</span>
                      {flow.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
                      {flow.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex flex-col items-center justify-center relative bg-[#0c1324]/50 border border-white/5 px-3 py-3 rounded-xl text-center">
                          <span className="text-[10px] font-mono text-[#4cd7f6] opacity-60 mb-1">0{sIdx + 1}</span>
                          <p className="text-xs font-mono text-[#eef0ff] leading-snug">{step}</p>
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
      <section className="bg-[#070e1e]/60 py-24 border-y border-white/5 reveal">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#eef0ff] mb-14 text-center md:text-left">
            {language === 'en' ? 'Engineering ' : 'Thách thức '}
            <span className="text-[#4cd7f6]">
              {language === 'en' ? 'Challenges' : 'Kỹ thuật'}
            </span>
          </h2>
          <div className="space-y-12">
            {challenges.map(
              ({ tag, tagColor, title, problem, solution, solutionColor }) => (
                <div
                  key={tag}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="md:w-1/3">
                    <span
                      className="text-xs font-mono border rounded-full px-3 py-1 uppercase tracking-widest"
                      style={{
                        color: tagColor || "#4cd7f6",
                        borderColor: `${tagColor || "#4cd7f6"}50`,
                        backgroundColor: `${tagColor || "#4cd7f6"}0D`,
                      }}
                    >
                      {tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#eef0ff] mt-4">
                      {title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#c3c6d7] text-sm mb-6 leading-relaxed">
                      {problem}
                    </p>
                    <div
                      className="p-6 rounded-2xl border relative overflow-hidden group"
                      style={{
                        backgroundColor: `${solutionColor || "#b4c5ff"}08`,
                        borderColor: `${solutionColor || "#b4c5ff"}30`,
                      }}
                    >
                      <p
                        className="text-xs font-mono flex items-center gap-2 mb-2 relative z-10"
                        style={{ color: solutionColor || "#b4c5ff" }}
                      >
                        <span className="material-symbols-outlined text-sm">
                          verified
                        </span>{" "}
                        SOLUTION
                      </p>
                      <p className="text-[#eef0ff] text-sm leading-relaxed relative z-10">
                        {solution}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* System Resilience & Error Recovery */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24 reveal">
        <div className="glass-card p-10 rounded-3xl border border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#ff5f56] text-2xl">shield_heart</span>
            <h2 className="text-3xl font-bold text-[#eef0ff]">
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
                    {t("taskflow.recoveryLabel")}
                  </p>
                  <p className="text-xs text-[#eef0ff] font-mono leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 reveal">
        <h2 className="text-3xl font-bold text-[#eef0ff] text-center mb-10">
          {t("taskflow.screensTitle")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {screens.map(({ src, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center group"
            >
              {/* Phone Mockup Frame */}
              <div
                className="relative w-full aspect-[9/20] border-[4px] border-[#3d475d]/85 rounded-[24px] bg-[#0c1324] shadow-2xl overflow-hidden flex flex-col transition-all duration-500 group-hover:scale-[1.03] group-hover:border-[#b4c5ff]/50 cursor-pointer"
                onClick={() => setActiveImage(src)}
              >
                {/* Speaker & Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-[2px] bg-zinc-800 rounded-full" />
                </div>
                {/* Screen Image */}
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Caption */}
              <p
                className="mt-4 text-xs font-mono text-center font-bold tracking-wider opacity-80 group-hover:opacity-100 group-hover:text-[#b4c5ff] transition-all"
                style={{ color }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Learnings */}
      <section className="max-w-[1200px] mx-auto px-6 mb-8 reveal">
        <div className="bg-[#1d2438] rounded-[2.5rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b4c5ff]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-3xl font-bold text-[#eef0ff] mb-10 relative z-10">
            {t("taskflow.learnTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left relative z-10">
            {learnings.map(({ num, color, title, body }) => (
              <div key={num}>
                <span
                  className="text-2xl font-bold font-mono"
                  style={{ color }}
                >
                  {num}
                </span>
                <h4 className="text-lg font-bold text-[#eef0ff] mt-4 mb-2">
                  {title}
                </h4>
                <p className="text-[#c3c6d7] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("home")}
          className="inline-flex items-center gap-2 text-[#b4c5ff] text-sm font-semibold hover:gap-3 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span> {t("taskflow.back")}
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
                {t("taskflow.deployNotice.title")}
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
                {t("taskflow.deployNotice.close")}
              </button>
              <a
                href="https://github.com/ZzzNTKzzZ/TaskFlow"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowDeployNotice(false)}
                className="bg-[#b4c5ff] text-[#002d84] px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-[0_0_15px_rgba(180,197,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                {t("taskflow.deployNotice.goToGithub")}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
