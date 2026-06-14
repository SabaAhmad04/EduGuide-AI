import ReactMarkdown from "react-markdown";

function AnalysisPanel({
result,
profileScore,
formData,
generatePDF,
loading,
loadingText,
}) {
return ( <div
   className="
   bg-slate-900/70
   backdrop-blur-xl
   border border-slate-800
   rounded-3xl
   p-8
   shadow-2xl
   min-h-[750px]
   "
 > <div className="flex items-center justify-between mb-8"> <h2 className="text-3xl font-bold">
AI Analysis </h2>

    <div className="flex items-center gap-3">
      {result && !loading && (
        <button
          onClick={() =>
            generatePDF(
              result,
              profileScore,
              formData
            )
          }
          className="
          bg-cyan-500/10
          border
          border-cyan-500/20
          px-4
          py-2
          rounded-xl
          text-cyan-400
          hover:bg-cyan-500/20
          transition
          "
        >
          📄 Download PDF
        </button>
      )}

      <div className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm border border-cyan-500/20">
        AI Powered
      </div>
    </div>
  </div>

  {profileScore !== null && !loading && (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 mb-8 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-90 uppercase tracking-wider">
            AI Profile Score
          </p>

          <h2 className="text-6xl font-bold mt-2">
            {profileScore}
          </h2>

          <p className="mt-2 text-sm opacity-90">
            Scholarship & Career Readiness
          </p>
        </div>

        <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
            <span>Profile Strength</span>
            <span>{profileScore}%</span>
        </div>

        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
            <div
            className="bg-white h-3 rounded-full transition-all duration-1000"
            style={{ width: `${profileScore}%` }}
            />
        </div>
        </div>

        <div className="text-7xl animate-bounce">
        🎯
        </div>
      </div>
    </div>
  )}

  {loading ? (
    <div className="flex flex-col justify-center items-center h-[500px]">

      <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-8"></div>

      <h2 className="text-3xl font-bold mb-4">
        EduGuide AI is Working...
      </h2>

      <p className="text-cyan-400 text-lg animate-pulse">
        {loadingText}
      </p>

      <div className="mt-8 w-72 bg-slate-800 rounded-full h-2 overflow-hidden">
        <div className="bg-cyan-400 h-2 rounded-full animate-pulse w-full"></div>
      </div>

    </div>
  ) : !result ? (

  <div className="flex flex-col justify-center items-center h-[500px] text-center">

    <div className="text-8xl mb-5 animate-pulse">
      🤖
    </div>

    <h3 className="text-3xl font-bold mb-3">
      AI Analysis Waiting
    </h3>

    <p className="text-slate-400 max-w-md leading-7 mb-8">
      Fill your profile and let EduGuide AI discover
      scholarships, generate career guidance and build
      a personalized roadmap for your future.
    </p>

    <div className="grid grid-cols-2 gap-4 w-full max-w-lg">

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <div className="text-3xl mb-2">🎓</div>
        <p className="text-sm text-slate-300">
          Scholarship Matching
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <div className="text-3xl mb-2">🤖</div>
        <p className="text-sm text-slate-300">
          AI Career Analysis
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <div className="text-3xl mb-2">🚀</div>
        <p className="text-sm text-slate-300">
          Skill Gap Detection
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <div className="text-3xl mb-2">🗺️</div>
        <p className="text-sm text-slate-300">
          6-Month Roadmap
        </p>
      </div>

    </div>

  </div>

  ) : (

    <div className="max-h-[600px] overflow-y-auto pr-3 custom-scrollbar">

      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-cyan-400 mt-8 mb-5 border-b border-slate-700 pb-3">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl px-4 py-3 mt-8 mb-4">
              <h2 className="text-2xl font-bold text-cyan-300">
                {children}
              </h2>
            </div>
          ),

          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-white mt-5 mb-3">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="text-slate-300 leading-8 mb-4">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="space-y-3 mb-5">
              {children}
            </ul>
          ),

          li: ({ children }) => (
            <li className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-slate-300">
              {children}
            </li>
          ),

          strong: ({ children }) => (
            <strong className="text-white font-semibold">
              {children}
            </strong>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              gap-2
              mt-2
              text-cyan-400
              hover:text-cyan-300
              font-semibold
              underline
              "
            >
              🔗 {children}
            </a>
          ),

          hr: () => (
            <div className="my-8 border-t border-slate-700"></div>
          ),

          blockquote: ({ children }) => (
            <div className="border-l-4 border-cyan-500 bg-slate-800/40 p-4 rounded-r-xl my-4">
              {children}
            </div>
          ),
        }}
      >
        {result}
      </ReactMarkdown>

    </div>

  )}
</div>

);
}

export default AnalysisPanel;
