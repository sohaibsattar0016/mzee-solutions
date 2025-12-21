"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Welcome to MZee Solutions! I'm your AI project consultant. I'll help gather some information about your project so we can provide you with the best possible solution.\n\nLet's start with the basics. What's your name?",
  },
];

const questions = [
  "Great to meet you, {name}! What's the name of your company or organization?",
  "Excellent! Now, what type of project are you looking to build? (e.g., Web Application, AI Solution, Marketing Campaign, or something else?)",
  "Interesting! Can you tell me more about the specific problem you're trying to solve or the goal you want to achieve?",
  "What's your estimated budget range for this project? (e.g., $5K-10K, $10K-25K, $25K-50K, $50K+)",
  "And what's your ideal timeline for launching this project?",
  "Last question: What's the best email address to reach you at?",
  "Perfect! Thank you for sharing all this information. Our team will review your project details and reach out within 24 hours to schedule a discovery call.\n\nIn the meantime, feel free to explore our Blueprint page to learn more about our process. Is there anything else you'd like to know about MZee Solutions?",
];

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userData, setUserData] = useState<Record<string, string>>({});
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const newUserData = { ...userData };
    if (questionIndex === 0) newUserData.name = input.trim();
    else if (questionIndex === 1) newUserData.company = input.trim();
    else if (questionIndex === 2) newUserData.projectType = input.trim();
    else if (questionIndex === 3) newUserData.problem = input.trim();
    else if (questionIndex === 4) newUserData.budget = input.trim();
    else if (questionIndex === 5) newUserData.timeline = input.trim();
    else if (questionIndex === 6) newUserData.email = input.trim();
    setUserData(newUserData);

    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    if (questionIndex < questions.length) {
      let response = questions[questionIndex];
      if (response.includes("{name}")) {
        response = response.replace("{name}", newUserData.name || "there");
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setQuestionIndex((prev) => prev + 1);
    }

    setIsTyping(false);
  };

  return (
    <div className="relative min-h-screen">
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Bot size={16} className="text-neon-purple" />
              <span className="text-sm text-white/70">AI Intake Terminal</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our AI assistant will guide you through a quick intake process to
              understand your needs and connect you with the right team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card overflow-hidden flex flex-col h-[600px]"
          >
            <div className="border-b border-white/10 px-6 py-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-white/60 font-mono">
                mzee-intake-terminal
              </span>
            </div>

            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      message.role === "assistant"
                        ? "bg-gradient-to-br from-neon-purple to-neon-cyan"
                        : "bg-white/10"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <Bot size={20} className="text-white" />
                    ) : (
                      <User size={20} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                      message.role === "assistant"
                        ? "bg-white/5 border border-white/10"
                        : "bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/30"
                    }`}
                  >
                    <p className="text-white/90 whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" />
                      <span
                        className="w-2 h-2 rounded-full bg-white/60 animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-white/60 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 p-4 flex-shrink-0"
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your response..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-purple/50 transition-colors"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isTyping ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Email",
                value: "hello@mzee.solutions",
                href: "mailto:hello@mzee.solutions",
              },
              {
                label: "Response Time",
                value: "Within 24 hours",
                href: null,
              },
              {
                label: "Location",
                value: "Remote Worldwide",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-6 text-center"
              >
                <p className="text-sm text-white/60 mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white font-semibold hover:text-neon-purple transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-semibold">{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/971544570178"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.a>
    </div>
  );
}
