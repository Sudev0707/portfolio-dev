"use client";

import { memo, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type ScreenProps = { color: string };

const slides = [
  {
    id: "fitness",
    label: "FitTrack",
    color: "#FF6B35",
    screenBg: "#0f0d0b",
    Screen: function FitnessScreen({ color }: ScreenProps) {
      const rings = [
        { pct: 82, label: "Move", val: "820 cal", r: 61 },
        { pct: 65, label: "Exercise", val: "38 min", r: 46 },
        { pct: 91, label: "Stand", val: "11 hrs", r: 31 },
      ];
      const ringColors = [color, "#34D399", "#60A5FA"];
      const ringTracks = [
        "rgba(255,107,53,0.12)",
        "rgba(52,211,153,0.12)",
        "rgba(96,165,250,0.12)",
      ];

      return (
        <div style={{ padding: "12px 17px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 14,
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 10,
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Monday
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: 19,
                  fontWeight: 700,
                  margin: "2px 0 0",
                  letterSpacing: "-0.5px",
                }}
              >
                Activity
              </p>
            </div>
            <div
              style={{
                width: 29,
                height: 29,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ width: 13, height: 13 }}
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20v-2a4 4 0 0 1 8 0v2" />
                <line x1="18" y1="8" x2="18" y2="14" />
                <line x1="15" y1="11" x2="21" y2="11" />
              </svg>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 14,
              position: "relative",
            }}
          >
            <svg width="162" height="162" viewBox="0 0 162 162">
              {rings.map((ring, i) => {
                const circumference = 2 * Math.PI * ring.r;
                const offset = circumference - (ring.pct / 100) * circumference;
                return (
                  <g key={ring.label}>
                    <circle
                      cx={81}
                      cy={81}
                      r={ring.r}
                      fill="none"
                      stroke={ringTracks[i]}
                      strokeWidth="11"
                    />
                    <motion.circle
                      cx={81}
                      cy={81}
                      r={ring.r}
                      fill="none"
                      stroke={ringColors[i]}
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: offset }}
                      transition={{
                        duration: 1.2,
                        delay: 0.15 * i,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      transform="rotate(-90 81 81)"
                    />
                  </g>
                );
              })}
            </svg>
            <div style={{ position: "absolute", textAlign: "center", lineHeight: 1 }}>
              <p
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                82%
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 8,
                  margin: "5px 0 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Complete
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginBottom: 12,
            }}
          >
            {rings.map((ring, i) => (
              <div
                key={ring.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: ringColors[i],
                    }}
                  />
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, margin: 0 }}>
                    {ring.label}
                  </p>
                </div>
                <p style={{ color: "#fff", fontSize: 11, fontWeight: 600, margin: 0 }}>
                  {ring.val}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 15,
              padding: "12px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 4px",
                }}
              >
                Steps Today
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                9,241
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 30 }}>
              {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: 4,
                    borderRadius: 2,
                    background: i === 5 ? color : "rgba(255,255,255,0.12)",
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.8 + 0.05 * i, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "finance",
    label: "Vault",
    color: "#34D399",
    screenBg: "#08100d",
    Screen: function FinanceScreen({ color }: ScreenProps) {
      const transactions = [
        { icon: "🎵", name: "Spotify", cat: "Entertainment", amt: "-$9.99", neg: true },
        { icon: "☕", name: "Blue Bottle", cat: "Food & Drink", amt: "-$6.50", neg: true },
        { icon: "💰", name: "Freelance", cat: "Income", amt: "+$840", neg: false },
      ];

      return (
        <div style={{ padding: "12px 17px 0" }}>
          <div style={{ marginBottom: 19 }}>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 10,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Total Balance
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
              <p
                style={{
                  color: "#fff",
                  fontSize: 29,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-1px",
                }}
              >
                $12,480
              </p>
              <span
                style={{
                  color,
                  fontSize: 11,
                  fontWeight: 700,
                  background: `${color}22`,
                  padding: "2px 7px",
                  borderRadius: 6,
                }}
              >
                +2.4%
              </span>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 17,
              padding: "14px",
              marginBottom: 14,
              overflow: "hidden",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 12px",
              }}
            >
              30 Day Performance
            </p>
            <svg width="100%" height="56" viewBox="0 0 200 56" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fin-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 50 L20 42 L40 46 L60 30 L80 35 L100 22 L120 28 L140 15 L160 20 L180 10 L200 5"
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M0 50 L20 42 L40 46 L60 30 L80 35 L100 22 L120 28 L140 15 L160 20 L180 10 L200 5 L200 56 L0 56Z"
                fill="url(#fin-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </svg>
          </div>

          {transactions.map((tx, i) => (
            <div
              key={tx.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "9px 0",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div
                  style={{
                    width: 29,
                    height: 29,
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  {tx.icon}
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: 11, fontWeight: 600, margin: 0 }}>
                    {tx.name}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 9, margin: "2px 0 0" }}>
                    {tx.cat}
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: tx.neg ? "rgba(255,255,255,0.7)" : color,
                  fontSize: 12,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {tx.amt}
              </p>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    id: "social",
    label: "Aura",
    color: "#818CF8",
    screenBg: "#09080f",
    Screen: function SocialScreen({ color }: ScreenProps) {
      const stories = [
        { initials: "You", bg: color, isYou: true },
        { initials: "JM", bg: "#EC4899" },
        { initials: "KL", bg: "#F59E0B" },
        { initials: "RN", bg: "#14B8A6" },
      ];
      const posts = [
        {
          initials: "AK",
          name: "Ahmed K.",
          time: "2m",
          text: "Shipped a new feature today 🚀 Really proud of how it turned out.",
          likes: 48,
          bg: "#4F46E5",
        },
        {
          initials: "SR",
          name: "Sara R.",
          time: "18m",
          text: "Tokyo sunsets are something else entirely 🌅",
          likes: 124,
          bg: "#7C3AED",
        },
      ];

      return (
        <div style={{ padding: "12px 17px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: 19,
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              Feed
            </p>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 8,
                background: "rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ width: 12, height: 12 }}
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 15, overflowX: "hidden" }}>
            {stories.map((story) => (
              <div
                key={story.initials}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 39,
                    height: 39,
                    borderRadius: "50%",
                    background: story.isYou ? "rgba(255,255,255,0.08)" : `${story.bg}44`,
                    border: story.isYou
                      ? "1.5px dashed rgba(255,255,255,0.3)"
                      : `2px solid ${story.bg}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: story.isYou ? 17 : 11,
                    fontWeight: 700,
                    color: story.isYou ? "rgba(255,255,255,0.4)" : "#fff",
                  }}
                >
                  {story.isYou ? "+" : story.initials}
                </div>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 8, margin: 0 }}>
                  {story.isYou ? "Add" : story.initials}
                </p>
              </div>
            ))}
          </div>

          {posts.map((post) => (
            <div
              key={post.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 15,
                padding: "12px",
                marginBottom: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: post.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {post.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#fff", fontSize: 11, fontWeight: 600, margin: 0 }}>
                    {post.name}
                  </p>
                </div>
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, margin: 0 }}>
                  {post.time} ago
                </p>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 11,
                  margin: "0 0 9px",
                  lineHeight: 1.5,
                }}
              >
                {post.text}
              </p>
              <div style={{ display: "flex", gap: 14 }}>
                {[
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ width: 11, height: 11 }}
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    ),
                    val: post.likes,
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ width: 11, height: 11 }}
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    ),
                    val: 12,
                  },
                ].map((action, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {action.icon}
                    <p style={{ fontSize: 10, margin: 0 }}>{action.val}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    },
  },
] as const;

const navIcons: ReactNode[] = [
  <svg
    key="home"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 17, height: 17 }}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg
    key="search"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 17, height: 17 }}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  <svg
    key="grid"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 17, height: 17 }}
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>,
  <svg
    key="profile"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 17, height: 17 }}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
];

type DeviceMockupSliderProps = {
  visible?: boolean;
};

export const DeviceMockupSlider = memo(function DeviceMockupSlider({
  visible = true,
}: DeviceMockupSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeIndex];
  const Screen = slide.Screen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative select-none"
      style={{ width: 247 }}
      aria-label="Mobile app showcase"
      aria-roledescription="carousel"
    >
      <motion.div
        key={`${slide.id}-glow`}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "3rem",
          background: `${slide.color}30`,
          filter: "blur(48px)",
          transform: "scale(0.8) translateY(8%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          width: 247,
          height: 493,
          borderRadius: "2.7rem",
          background: "linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 50%, #141414 100%)",
          padding: 3,
          boxShadow: `
            0 0 0 0.5px rgba(255,255,255,0.08),
            0 70px 140px rgba(0,0,0,0.7),
            0 24px 48px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(0,0,0,0.6)
          `,
          zIndex: 1,
        }}
      >
        {[
          { side: "left" as const, top: 85, h: 24 },
          { side: "left" as const, top: 122, h: 46 },
          { side: "left" as const, top: 180, h: 46 },
        ].map((btn, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: btn.side === "left" ? -2.5 : undefined,
              top: btn.top,
              width: 3,
              height: btn.h,
              background: "linear-gradient(90deg, #1a1a1a, #2a2a2a)",
              borderRadius: btn.side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            right: -2.5,
            top: 128,
            width: 3,
            height: 70,
            background: "linear-gradient(90deg, #2a2a2a, #1a1a1a)",
            borderRadius: "0 2px 2px 0",
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`${slide.id}-screen`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "2.55rem",
              background: slide.screenBg,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px 0",
                position: "relative",
                zIndex: 2,
              }}
            >
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{time}</span>
              <div style={{ width: 82, height: 24, background: "#000", borderRadius: 20 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
                  {[3, 5, 7, 9].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: 3,
                        height: h,
                        background: "rgba(255,255,255,0.75)",
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    width: 19,
                    height: 10,
                    border: "1.5px solid rgba(255,255,255,0.35)",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                      height: 4,
                      background: "rgba(255,255,255,0.8)",
                      borderRadius: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: -4,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 2.5,
                      height: 5,
                      background: "rgba(255,255,255,0.35)",
                      borderRadius: "0 1px 1px 0",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${slide.id}-content`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Screen color={slide.color} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: `${slide.screenBg}f0`,
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px 19px 19px",
                zIndex: 5,
              }}
            >
              {navIcons.map((icon, i) => (
                <div
                  key={i}
                  style={{
                    padding: "6px 9px",
                    borderRadius: 9,
                    color: i === 0 ? slide.color : "rgba(255,255,255,0.22)",
                    background: i === 0 ? `${slide.color}18` : "transparent",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>

            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                bottom: 6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 76,
                height: 3,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 2,
                zIndex: 6,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative flex justify-center gap-1" style={{ marginTop: 24, zIndex: 1 }}>
        {slides.map((_, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(i)}
            animate={{
              width: i === activeIndex ? 22 : 7,
              background: i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.28)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              height: 7,
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
});
