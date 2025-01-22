"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { IoChatbox } from "react-icons/io5";

interface Message {
  text: string;
  language: string;
  timestamp: Date;
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const key: string = process.env.NEXT_PUBLIC_GEMINI!;
  const genAI = new GoogleGenerativeAI(key);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "hindi", name: "Hindi" },
    { code: "telugu", name: "telugu" },
    { code: "gujarti", name: "gujarti" },
    { code: "punjabi", name: "punjabi" },
  ];

  const replyfromAi = async (language: string, message: string) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    let prompt;

    if (message.toLowerCase().includes("boldbuy")) {
      prompt = `${message} reply in ${language} and say you are boldbuy ai. and according to message,answer correctly from the given info
        BoldBuy is a digital platform that connects local sellers with customers by virtualizing traditional markets.
        It enables sellers to easily manage their inventory, fulfill orders, and expand their reach,
        while offering customers a seamless way to shop from local markets online.
        Designed for small and medium businesses, market associations, and local sellers,
        BoldBuy empowers them to thrive in the digital economy,
        while providing buyers with convenient access to diverse and authentic products.
        Platform Features/advantages/merit/good thingss:
          * Quick and easy seller onboarding with KYC verification.
          * Real-time inventory management and updates.
          * Aggregated virtual warehouses for limitless inventory.
          * Seamless order aggregation and fulfillment.
          * Intuitive SaaS-based POS system for sellers.
          * Advanced reporting and analytics for data-driven decisions.
          * Multi-store management from a unified dashboard.
          * Flexible catalog creation and bulk upload capabilities.`;
    } else {
      prompt = `${message} reply in ${language} and say are boldbuy ai.`;
    }

    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: Message = {
        text: message,
        language: language,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      console.log(`Sending message: ${message} in ${language}`);
      setMessage("");

      const aiReply = await replyfromAi(language, message);

      const aiMessage: Message = {
        text: aiReply,
        language: language,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3>Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div ref={chatContainerRef} className="h-80 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p>{msg.text}</p>
                  <div className="text-xs text-gray-500 mt-1">
                    {msg.timestamp.toLocaleTimeString()} -{" "}
                    {languages.find((l) => l.code === msg.language)?.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit}>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mb-2 w-full p-2 border rounded"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  <IoMdSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className=" bg-blue-600 text-white p-4 text-3xl rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300 shadow-lg"
        >
          <IoChatbox></IoChatbox>
        </button>
      )}
    </div>
  );
};

export default ChatBox;
