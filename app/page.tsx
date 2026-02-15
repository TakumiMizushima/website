import { Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 pt-8 pb-20 px-6 font-sans">
      <main className="max-w-xl mx-auto space-y-12">
        
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
            所属
          </h2>
          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">
              千葉大学 理学部 数学・情報数理学科
            </p>
            <p className="font-medium text-slate-900">
              中村 誠希 研究室 (数理論理学・理論計算機科学)
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            学歴
          </h2>
          <div className="flex flex-wrap items-baseline gap-3 text-sm leading-relaxed">
            <span className="text-slate-400 font-medium whitespace-nowrap">
              2023.04 - 現在
            </span>
            <span className="font-medium text-slate-900">
              &ensp; 千葉大学 理学部 数学・情報数理学科
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            興味・関心
          </h2>
          <ul className="space-y-12 text-slate-700 list-disc list-inside marker:text-slate-300">
            <li className="pb-8">
              <span className="font-medium text-slate-900">数理論理学</span>
              <div className="text-slate-500 text-sm pl-6 mt-2 font-light space-y-2">
                <p>
                  証明論に興味があります。現在は以下の文献を参考に、様相論理や証明論の基礎を学んでいます。
                </p>
                <ul className="list-none space-y-1 text-slate-600 pl-1 border-l-2 border-slate-200 ml-1">
                  <li>鹿島 亮『コンピュータサイエンスにおける様相論理』</li>
                  <li>鹿島 亮『数理論理学』</li>
                </ul>
              </div>
            </li>
            <li>
              <span className="font-medium text-slate-900">数学教育学</span>
              <div className="text-slate-500 text-sm pl-6 mt-2 font-light space-y-2">
                <p>
                  数理論理学、特に証明論の観点から、学校教育における証明や推論の構造をどのように整理・記述できるかに関心があります。
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            資料
          </h2>
          <div className="flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <a 
                  href="https://chibafrom2000to2025.streamlit.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-blue-700 hover:underline underline-offset-4 transition-colors"
                >
                  千葉大学数学25ヵ年解答解説 (2000-2025)
                </a>
              </div>
              <p className="text-slate-500 text-sm mt-2 font-light leading-relaxed">
                LaTeX・Python・Streamlit を用いて作成した、千葉大学の過去入試問題の解答解説集です。
                <br />
                出題年度・分野・難易度によるソート機能や、PDF生成機能を実装しました。
                <br />
                <span className="text-xs text-slate-400 mt-1 block">
                  ※著作権上の理由により一般公開はしていません。
                </span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            お問い合わせ
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
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            関連リンク
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
          </div>
        </section>

      </main>

      <footer className="mt-24 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Takumi Mizushima
      </footer>
    </div>
  );
}
