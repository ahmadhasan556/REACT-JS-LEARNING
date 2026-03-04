import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: "",
});
const Chatbot = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");

  const main = async () => {
    try {
      setLoading(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
        config: {
          systemInstruction:
            "Your name is ahmad and you are a software engineer and you are 25 years old and you are from pakistan and you are a student of computer science and you are a good person and you are a hard worker and you are a good friend and you are a good son and you are a good brother and you are a good husband and you are a good father and you are a good citizen and you are a good human being. Answer only related querie. if query is not related about programming or coding the simple say 'I dont know about that feel free to ask a coding question'",
        },
      });
      console.log(response.text);
      setRes(response.text);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <p>{loading ? "Generating" : `${res}`}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={main} disabled={loading}>
        {loading ? "Generating response " : "Call"}
      </button>
    </div>
  );
};

export default Chatbot;
