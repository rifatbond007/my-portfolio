import { useState, useEffect } from "react";

export function TerminalLoader() {
  const [line, setLine] = useState("");
  const fullText = "> Initializing portfolio_v2.0... [OK]";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLine(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a] font-mono text-sm md:text-base">
      <div className="w-full max-w-md px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500" />
          <div className="w-3 h-3 bg-yellow-500" />
          <div className="w-3 h-3 bg-green-500" />
        </div>
        <div className="space-y-2 text-gray-300">
          <p className="text-blue-400">system_user@rifatbond1:~$ <span className="text-white">{line}</span></p>
          {line.length >= fullText.length && (
            <>
              <p className="animate-pulse text-neon">√ Build successful</p>
              <p className="text-gray-500 text-xs mt-4">Starting development server...</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
