import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-20 font-sans text-slate-800">
      
      {/* ヘッダー：名前と肩書き */}
      <header className="mb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          水島 匠
        </h1>
        <p className="text-slate-500 text-lg">
          Takumi Mizushima
        </p>
      </header>

      {/* 所属 */}
      <section className="mb-16">
        <h2 className="text-lg font-bold border-b border-slate-200 pb-2 mb-6">
          Affiliation
        </h2>
        <div className="text-base">
          <p className="font-medium">千葉大学 理学部</p>
          <p className="text-slate-600">数学・情報数理学科</p>
        </div>
      </section>

      {/* 興味・関心分野 */}
      <section className="mb-16">
        <h2 className="text-lg font-bold border-b border-slate-200 pb-2 mb-6">
          Interests
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
            <span>数理論理学 <span className="text-slate-400 text-sm ml-1">(Mathematical Logic)</span></span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
            <span>証明論 <span className="text-slate-400 text-sm ml-1">(Proof Theory)</span></span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
            <span>数学教育学 <span className="text-slate-400 text-sm ml-1">(Mathematics Education)</span></span>
          </li>
        </ul>
      </section>

      {/* 連絡先 */}
      <footer className="pt-10 border-t border-slate-100">
        <h2 className="text-base font-bold mb-4">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
          <a 
            href="mailto:mizushima.edu.math@gmail.com" 
            className="text-slate-600 hover:text-black hover:underline underline-offset-4"
          >
            mizushima.edu.math@gmail.com
          </a>
          {/* GitHub等のリンクがあればここに追加 */}
        </div>
      </footer>
    </main>
  );
}