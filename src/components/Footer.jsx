import { useLanguage } from '../context/LanguageContext'

export default function Footer({ navigate }) {
  const { t } = useLanguage()
  const socials = [
    { label: 'GitHub', href: 'https://github.com/ZzzNTKzzZ' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khanhnguyen2205' },
    { label: 'Email', href: 'mailto:ntk22052006@gmail.com' },
  ]

  return (
    <footer className="border-t border-white/5 bg-[#070e1e]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <button
            onClick={() => navigate('home')}
            className="font-mono text-xl font-extrabold text-[#b4c5ff] tracking-tighter hover:text-white transition-colors"
          >
            &lt;NTK /&gt;
          </button>
          <p className="text-[#c3c6d7] text-sm mt-2">
            {t('footer.crafted')}
          </p>
          <p className="text-[#c3c6d7] text-xs mt-1">
            {t('footer.phone')}
          </p>
        </div>

        <div className="flex gap-8">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors duration-200 hover:-translate-y-0.5 inline-block"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
