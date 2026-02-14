import { Github, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 pt-8 pb-20 px-6 font-sans">
      <main className="max-w-xl mx-auto space-y-16">
        
        <header className="flex items-center gap-4">
          
          <div 
            className="flex-shrink-0 bg-slate-200 rounded-full overflow-hidden border border-slate-100 shadow-sm"
            style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}
          >
            <img
              src="/profile.jpg"
              alt="水島 匠のプロフィール写真"
              className="object-cover"
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          </div>

          <div>
            <h1 className="flex flex-wrap items-baseline gap-3 leading-none tracking-tight">
              <span className="text-2xl font-bold text-slate-900">
                水島 匠
              </span>
              <span className="text-[10px] font-normal text-slate-400 whitespace-nowrap">
                Takumi Mizushima
              </span>
            </h1>
          </div>
        </header>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Affiliation
          </h2>
          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">
              千葉大学 理学部 数学・情報数理学科 4年
            </p>
            <p className="font-medium text-slate-900">
              中村 誠希 研究室 (数理論理学・理論計算機科学)
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Education
          </h2>
          <div className="flex flex-wrap items-baseline gap-3 text-sm leading-relaxed">
            <span className="text-slate-400 font-medium whitespace-nowrap">
              2023.04 - 2027.03
            </span>
            <span className="font-medium text-slate-900">
            千葉大学 理学部 数学・情報数理学科
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Research Interests
          </h2>
          <ul className="space-y-4 text-slate-700 list-disc list-inside marker:text-slate-300">
            <li>
              <span className="font-medium text-slate-900">数理論理学</span>
              <p className="text-slate-500 text-sm pl-6 mt-1 font-light">
                特に証明論（Proof Theory）に関心があります。
              </p>
            </li>
            <li>
              <span className="font-medium text-slate-900">数学教育学</span>
              <p className="text-slate-500 text-sm pl-6 mt-1 font-light">
                特に高校数学における「集合と命題」の教育方法について関心があります。
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Materials
          </h2>
          <div className="flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <a 
                href="https://chibafrom2000to2025.streamlit.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-slate-900 hover:text-blue-700 hover:underline underline-offset-4 transition-colors"
              >
                千葉大学数学25ヵ年解答解説 (2000-2025)
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Contact
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <a 
                href="mailto:mizushima.edu.math@gmail.com" 
                className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4"
              >
                mizushima.edu.math@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <a 
                href="https://github.com/TakumiMizushima" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Links
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
              <a 
                href="https://www.math.s.chiba-u.ac.jp/index.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4 leading-relaxed"
              >
                千葉大学 理学部 数学・情報数理学科
              </a>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
              <a 
                href="https://www.math.s.chiba-u.ac.jp/index.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4 leading-relaxed"
              >
                <span className="inline-block">千葉大学 大学院 融合理工学府</span>
                {" "}
                <span className="inline-block">数学情報科学専攻 数学・情報数理学コース</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-24 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Takumi Mizushima
      </footer>
    </div>
  );
}
