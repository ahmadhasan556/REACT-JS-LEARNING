import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Header from "../src/components/Chatbot/Header";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!input.trim() || loading) return;

    const userMsg = { role: "user", text: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
      const apiRes = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: "You are P2P Clouds agent called Cloudy. Your task is to help users with their cloud-related questions and issues. Always provide clear and concise answers, and if you don't know the answer, say you don't know instead of making something up. Your product is called P2P Clouds, and it offers decentralized cloud storage solutions. Be friendly and helpful in your responses. your services include: 1. Decentralized Storage: Store files securely across a network of nodes, ensuring data redundancy and high availability. 2. File Sharing: Easily share files with others using secure links, without relying on centralized servers. 3. Data Encryption: All data is encrypted end-to-end, ensuring that only you have access to your files. 4. Cross-Platform Access: Access your files from any device with an internet connection, using our web interface or mobile app. 5. Cost-Effective: Pay only for the storage you use, with competitive pricing compared to traditional cloud providers.",
                },
                {
                  text: userMsg.text,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "x-goog-api-key": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(apiRes);
      const data = apiRes.data;
      const reply = data.candidates[0].content.parts[0].text;
      setMessages([...updated, { role: "model", text: reply }]);
    } catch (err) {
      console.log(err);
      setMessages([...updated, { role: "model", text: `⚠️ ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };
  console.log(messages);

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      {/* ── Header ── */}
      <Header />
      {/* ── Message List ── */}
      <div className="flex-1 overflow-y-auto px-4 py-6 pb-32 space-y-4">
        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-500">
            <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-3xl">
              💬
            </div>
            <p className="text-sm">Start a conversation with Gemini</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* AI avatar */}
            {msg.role === "model" && (
              <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold mb-1">
                G
              </div>
            )}

            {/* Bubble */}
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words
                ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-100 rounded-bl-none"
                }`}
            >
              {msg.text}
            </div>

            {/* User avatar */}
            {msg.role === "user" && (
              <div className="shrink-0 w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold mb-1">
                U
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex items-end gap-2 justify-start">
            <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
              G
            </div>
            <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* ── Fixed Bottom Input ── */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 right-0 flex justify-center px-4 py-4 bg-gray-950/90 backdrop-blur border-t border-gray-800"
      >
        <div className="flex w-full max-w-2xl gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gemini anything…"
            className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
