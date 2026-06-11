import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const courses = t('education.courses') || []
  const frontiers = t('education.frontiers') || []

  return (
    <div className="pt-32 pb-32 max-w-[1200px] mx-auto px-6">
      {/* Header */}
      <header className="mb-24 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#b4c5ff] text-xs font-mono uppercase tracking-widest mb-3 block">
              {t('education.tag')}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#eef0ff] mb-5 leading-tight whitespace-pre-line">
              {t('education.title')}
            </h1>
            <p className="text-lg text-[#c3c6d7] leading-relaxed">
              {t('education.desc')}
            </p>
          </div>
          {/* GPA card */}
          <div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center shrink-0 border border-[#4cd7f6]/30 shadow-[0_0_20px_rgba(76,215,246,0.15)]">
            <span className="text-[#8e90a1] text-xs font-mono uppercase tracking-widest mb-1">
              {t('education.gpaLabel')}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[#4cd7f6]">3.0</span>
              <span className="text-2xl font-bold text-[#434655]">/ 4.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Course grid */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-[#434655]/40" />
          <h2 className="text-2xl font-bold text-[#eef0ff] shrink-0">
            {t('education.focusTitle')}
          </h2>
          <div className="h-px flex-1 bg-[#434655]/40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="bg-[#070e1e] cyber-border border border-[#434655]/30 p-8 rounded-xl reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="material-symbols-outlined text-[#4cd7f6] text-3xl mb-4 block">
                {icon}
              </span>
              <h3 className="text-lg font-bold text-[#eef0ff] mb-3">{title}</h3>
              <p className="text-[#c3c6d7] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Learning Frontiers */}
      <section className="mb-24 reveal">
        <div className="bg-[#283044] text-[#eef0ff] rounded-3xl p-10 md:p-16 relative overflow-hidden border border-[#434655]/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-[#eef0ff]">
              {t('education.frontiersTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frontiers.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#003ea8]/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#b4c5ff] text-xl">
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#eef0ff] mb-2">
                      {title}
                    </h4>
                    <p className="text-[#c3c6d7] text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Tech pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Pandas'].map(
                (t) => (
                  <span
                    key={t}
                    className="bg-[#070e1e]/40 px-4 py-1.5 rounded-full font-mono text-xs text-[#4cd7f6] border border-[#434655]/40 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lab images */}
      <section className="reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden aspect-video group border border-[#434655]/10">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb6jv2Jz_rwnkXW9tai9QzEz16EMDrEU3LuBxBHuzCZxeYsMwoDb0VVfBxmVcOCUTz1W74HwJqM9Hy75LH0hguAWGDIIAKKBgd-s1bcc0V7Ekiz5AaSoAzf_0Wf4BL6VNN8vMt4oINtIxzMKcPG-8VzmMQXqz-Pz4yNwRm1Iy6UsZE_i3G5hdbWdSZMXC_U-9GvbtrfkJ7vamM-3DmG-7EozHGMwo1STUD3-4flv3447MLgAmaw8xPP4EdqOgj3qWj2UnlEKwrTyz8"
              alt={t('education.lab1')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e1e]/90 to-transparent p-6 flex items-end">
              <div>
                <p className="text-[#b4c5ff] text-xs font-mono mb-1">
                  {t('education.campusLife')}
                </p>
                <h4 className="text-lg font-bold text-[#eef0ff]">
                  {t('education.lab1')}
                </h4>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video group border border-[#434655]/10">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVcW1scIBbxqy8gMFtm6xgoI0LMnBgtbm6rVYDHy1GTJFHrXMuegTAR_mJ8PjFZHLjEfaKt9ALXymjm2fRVp0AyJp55fI-78DYgChPUXNg0baK1BMQeOCiUw0S5tfE2uCdI5Ojg_F_VQHMEUiRoAV13xvNPq9V5D7ZnNoLRivr5ZwOlL-nZOoSoUQAusjcimw5DOjrVahkOOnEw7T89nAfKrbvLfUUk95oPzvjEF4OGnstjNhIJWC8-W3yTFTgoQ6ShC8A2e_soaR5"
              alt={t('education.lab2')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e1e]/90 to-transparent p-6 flex items-end">
              <div>
                <p className="text-[#b4c5ff] text-xs font-mono mb-1">
                  {t('education.peerCollab')}
                </p>
                <h4 className="text-lg font-bold text-[#eef0ff]">
                  {t('education.lab2')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
