"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Bot, User, Minimize2 } from "lucide-react";

type Message = {
  id: string;
  sessionId: string;
  sender: "customer" | "operator";
  text: string;
  createdAt: number;
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Global listener for open_live_chat event
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open_live_chat", handleOpenChat);
    return () => window.removeEventListener("open_live_chat", handleOpenChat);
  }, []);

  // Persistent browser session ID
  useEffect(() => {
    let savedId = localStorage.getItem("parsa_chat_session_id");
    if (!savedId) {
      savedId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      localStorage.setItem("parsa_chat_session_id", savedId);
    }
    setSessionId(savedId);
  }, []);

  // Connect to Realtime SSE stream
  useEffect(() => {
    if (!sessionId) return;

    const eventSource = new EventSource(`/api/chat/stream?sessionId=${sessionId}`);

    eventSource.onmessage = (event) => {
      try {
        const newMsg: Message = JSON.parse(event.data);
        setMessages((prev) => {
          if (prev.some((m) => m.id === newMsg.id)) {
            return prev;
          }
          return [...prev, newMsg];
        });

        if (newMsg.sender === "operator" && !isOpenRef.current) {
          setUnreadCount((count) => count + 1);
        }
      } catch (err) {
        console.error("Error parsing SSE message:", err);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE connection error:", err);
    };

    return () => {
      eventSource.close();
    };
  }, [sessionId]);

  // Auto scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Send message to API
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputText.trim();
    if (!text || !sessionId || isSending) return;

    setInputText("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          text,
          pageUrl: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok || (data.bale && data.bale.ok === false)) {
        console.error("Response warning/error on /api/chat/send:", data);
      }
    } catch (err) {
      console.error("Error sending chat message:", err);
    } finally {
      setIsSending(false);
    }
  };

  const formatTime = (ts: number) => {
    try {
      const d = new Date(ts);
      return d.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  };

  if (!sessionId) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-fa dir-rtl" dir="rtl">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-amber-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
          aria-label="مشاوره آنلاین"
        >
          <MessageSquare className="w-7 h-7" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce border-2 border-white">
              {unreadCount}
            </span>
          )}
          <span className="absolute right-16 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            ⚡ مشاوره آنلاین
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-amber-500 text-white px-4 py-3.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-blue-700 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-snug">⚡ مشاوره آنلاین</h3>
                <p className="text-[11px] text-blue-100/90 font-medium">پاسخگویی سریع کارشناسان پارسا انرژی</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-white transition-colors"
              title="بستن پنجره"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-950/30">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">به گفتگوی آنلاین خوش آمدید</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
                  سوالات خود درباره نیروگاه خورشیدی، برق اضطراری و تاسیسات را مطرح کنید.
                </p>
              </div>
            ) : (
              messages.map((msg) => {
                const isCustomer = msg.sender === "customer";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isCustomer ? "items-start" : "items-end"}`}
                  >
                    <div className="flex items-end gap-1.5 max-w-[85%]">
                      {!isCustomer && (
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                          پ
                        </div>
                      )}
                      <div
                        className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm break-words ${
                          isCustomer
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-card border border-border text-foreground rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {isCustomer && (
                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-1 px-1">
                      {formatTime(msg.createdAt)}
                    </span>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-background border-t border-border flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="پیام شما..."
              className="flex-1 bg-muted/60 text-foreground placeholder:text-muted-foreground text-sm px-3.5 py-2.5 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isSending}
              className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white flex items-center justify-center transition-all duration-200 shrink-0 font-bold text-base"
              aria-label="ارسال پیام"
            >
              {isSending ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "➤"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
