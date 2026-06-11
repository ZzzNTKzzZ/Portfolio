import { useLanguage } from '../context/LanguageContext'

export default function Experience({ navigate }) {
  const { t } = useLanguage()
  const timeline = t('experience.timeline') || []

  return (
    <div className="pt-32 pb-32 max-w-[1200px] mx-auto px-6">
      {/* Header */}
      <section className="mb-24 reveal">
        <span className="text-[#b4c5ff] text-xs font-mono uppercase tracking-widest mb-3 block">
          {t('experience.tag')}
        </span>
        <h1 className="text-6xl font-bold text-[#eef0ff] mb-6 leading-tight whitespace-pre-line">
          {t('experience.title')}
        </h1>
        <p className="text-lg text-[#c3c6d7] max-w-2xl leading-relaxed">
          {t('experience.desc')}
        </p>
      </section>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#434655]/30 md:-translate-x-px">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#4cd7f6] via-[#b4c5ff] to-transparent glow-pulse" />
        </div>

        {timeline.map((node, index) => {
          const isFirst = index === 0;
          return (
            <div key={index} className="relative mb-24 reveal">
              <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#070e1e] ${isFirst ? 'bg-[#4cd7f6] shadow-[0_0_20px_rgba(76,215,246,0.6)]' : 'bg-[#283044]'} z-10 flex items-center justify-center`}>
                <span className="material-symbols-outlined text-sm" style={{ color: isFirst ? '#003640' : '#b4c5ff' }}>
                  {isFirst ? 'code' : 'school'}
                </span>
              </div>
              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-16 items-start">
                <div className={`md:text-right pt-1 ${isFirst ? 'md:order-1' : ''}`}>
                  <span className={`${isFirst ? 'text-[#4cd7f6]' : 'text-[#c3c6d7]'} text-xs font-mono uppercase tracking-widest`}>
                    {node.period}
                  </span>
                </div>
                <div className={`mt-4 md:mt-0 ${isFirst ? 'md:order-2' : ''}`}>
                  <div className="glass-card p-8 rounded-xl hover:border-[#b4c5ff]/30 transition-all duration-500 group">
                    <h3 className="text-xl font-bold text-[#eef0ff] mb-2">
                      {node.title}
                    </h3>
                    
                    {node.bullets && (
                      <div className="space-y-4 mb-8">
                        {node.bullets.map((bulletText, bIdx) => {
                          const bulletIcons = ["terminal", "account_tree", "query_stats"];
                          return (
                            <div key={bIdx} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-[#4cd7f6] text-xl shrink-0">
                                {bulletIcons[bIdx] || "terminal"}
                              </span>
                              <p className="text-[#c3c6d7] text-sm leading-relaxed">
                                {bulletText}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {node.desc && (
                      <p className="text-[#c3c6d7] text-sm leading-relaxed">
                        {node.desc}
                      </p>
                    )}

                    {isFirst && (
                      <div className="flex flex-wrap gap-2">
                        {["C++20", "Data Structures", "Competitive Programming", "Algorithms"].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#3d475d] text-[#b4c5ff] text-xs font-mono rounded-full border border-[#b4c5ff]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="mt-16 text-center reveal">
        <div className="bg-[#1d2438] p-12 rounded-[2rem] relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b4c5ff]/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-3xl font-bold text-[#eef0ff] mb-6 relative z-10">
            {t('experience.ctaTitle')}
          </h2>
          <p className="text-[#c3c6d7] max-w-xl mx-auto mb-8 relative z-10">
            {t('experience.ctaDesc')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <button
              onClick={() => navigate("home")}
              className="bg-[#b4c5ff] text-[#002d84] px-8 py-4 rounded-xl text-sm font-semibold hover:shadow-[0_0_25px_rgba(180,197,255,0.4)] transition-all"
            >
              {t('experience.contactMe')}
            </button>
            <a
              href="https://github.com/ZzzNTKzzZ"
              target="_blank"
              rel="noreferrer"
              className="border border-[#8e90a1] text-[#eef0ff] px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white/5 transition-all"
            >
              {t('experience.viewRepo')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
