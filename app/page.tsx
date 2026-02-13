import { Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 py-20 px-6 font-sans">
      <main className="max-w-xl mx-auto space-y-16">
        
        {/* Header: 名前 (横並び) */}
        <header className="flex items-baseline gap-4">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            水島 匠
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Takumi Mizushima
          </p>
        </header>

        {/* 1. Affiliation: 所属 */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Affiliation
          </h2>
          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">
              千葉大学 理学部 数学・情報数理学科 4年
            </p>
            <div>
              <p className="font-medium text-slate-900">
                中村 誠希 研究室 (数理論理学・理論計算機科学)
              </p>
            </div>
          </div>
        </section>

        {/* 2. Education & Qualifications: 学歴・資格 */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Education & Qualifications
          </h2>
          <div className="space-y-6">
            {/* 学歴 */}
            <div className="grid grid-cols-[80px_1fr] gap-4 text-sm leading-relaxed">
              <span className="text-slate-400 font-medium pt-0.5">2023.04 - </span>
              <div>
                <a 
                  href="https://www.math.s.chiba-u.ac.jp/index.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-blue-700 hover:underline underline-offset-4 transition-colors block mb-1"
                >
                  千葉大学 理学部 数学・情報数理学科
                </a>
              </div>
            </div>

            {/* 資格 (教員免許) */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Licensure</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-1">
                <li>
                  中学校教諭一種免許状（数学）<span className="text-slate-400 text-xs ml-2">取得見込</span>
                </li>
                <li>
                  高等学校教諭一種免許状（数学）<span className="text-slate-400 text-xs ml-2">取得見込</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Interests: 興味・関心 */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Research Interests
          </h2>
          <ul className="space-y-4 text-slate-700 list-disc list-inside marker:text-slate-300">
            <li>
              <span className="font-medium text-slate-900">数理論理学</span>
              <p className="text-slate-500 text-sm pl-6 mt-1 font-light leading-relaxed">
                特に証明論（Proof Theory）に関心があります。
              </p>
            </li>
            <li>
              <span className="font-medium text-slate-900">数学教育学</span>
              <p className="text-slate-500 text-sm pl-6 mt-1 font-light leading-relaxed">
                高等教育における「証明と論理」の教育方法について関心があります。
              </p>
            </li>
          </ul>
        </section>

        {/* 4. Materials: 教材 */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Materials
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Github className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
              <div>
                <a 
                  href="https://chibafrom2000to2025.streamlit.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-blue-700 hover:underline underline-offset-4 transition-colors"
                >
                  千葉大学数学25ヵ年解答解説 (2000-2025)
                </a>
                <p className="text-slate-500 text-sm mt-1 font-light leading-relaxed">
                  (Private Repository)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contact & Links */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            Contact & Links
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-slate-400" />
              <a 
                href="mailto:mizushima.edu.math@gmail.com" 
                className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4"
              >
                mizushima.edu.math@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-slate-400" />
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

      </main>

      <footer className="mt-24 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Takumi Mizushima
      </footer>
    </div>
  );
}
