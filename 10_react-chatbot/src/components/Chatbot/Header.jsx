import React from "react";

const Header = () => {
  return (
    <header className="shrink-0 py-4 px-6 bg-gray-900 border-b border-gray-800 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
        G
      </div>
      <span className="font-semibold text-lg tracking-wide text-blue-400">
        Gemini Chatbot
      </span>
    </header>
  );
};

export default Header;
