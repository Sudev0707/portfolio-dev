"use client";

import { memo, useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import profileImg from "@/assets/image/profileImg.png";
import {
  PROFILE_TAGLINE,
  contactInfoLeft,
  contactInfoRight,
  profileFacts,
  workExperience,
} from "@/lib/profile";

type ScreenProps = { color: string };

const PROFILE_ACCENT = "#4ade80";
const PROFILE_SCREEN_BG = "#0a0f0d";
const SEARCH_ACCENT = "#60A5FA";
const SEARCH_SCREEN_BG = "#0a0e14";
const EXPLORE_ACCENT = "#F472B6";
const EXPLORE_SCREEN_BG = "#100a10";
const TAB_BAR_INSET = 62;

const NAV_HOME = 0;
const NAV_SEARCH = 1;
const NAV_EXPLORE = 2;
const NAV_PROFILE = 3;

const scrollScreenStyle = {
  height: "100%",
  overflowY: "auto" as const,
  overflowX: "hidden" as const,
  boxSizing: "border-box" as const,
  WebkitOverflowScrolling: "touch" as const,
};

function DynamicIsland() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
        width: 90,
        height: 27,
        background: "#000",
        borderRadius: 20,
        zIndex: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 11,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          width: 11,
          height: 11,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #243049 0%, #0a0c12 65%, #000 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
    </div>
  );
}

function DeviceStatusBar({ time }: { time: string }) {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 18px",
        zIndex: 11,
      }}
    >
      <DynamicIsland />
      <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em" }}>
        {time}
      </span>
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
  );
}

function ProfileScreen({ color }: ScreenProps) {
  const role = contactInfoLeft.find((item) => item.id === "role")?.label ?? "Software Developer";
  const location = contactInfoLeft.find((item) => item.id === "location")?.label ?? "Kolkata, India";
  const email = contactInfoRight.find((item) => item.id === "email")?.label ?? "hello@sudev.dev";
  const status = contactInfoRight.find((item) => item.id === "status")?.label ?? "Open to collaborations";
  const skills = workExperience[0]?.tags.slice(0, 4) ?? ["React", "React Native", "TypeScript", "Node.js"];

  return (
    <div className="device-screen-scroll" style={{ ...scrollScreenStyle, padding: "2px 15px 10px" }}>
      <p
        style={{
          color: "#fff",
          fontSize: "clamp(15px, 4.2vw, 18px)",
          fontWeight: 700,
          margin: "0 0 10px",
          letterSpacing: "-0.5px",
        }}
      >
        Profile
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>
        <div
          style={{
            width: "clamp(56px, 18vw, 68px)",
            height: "clamp(56px, 18vw, 68px)",
            borderRadius: "50%",
            padding: 2,
            background: `linear-gradient(135deg, ${color}, ${color}55)`,
            marginBottom: 8,
            flexShrink: 0,
          }}
        >
          <img
            src={profileImg}
            alt="Sudev Majhi"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 15%",
              border: "2px solid #0a0f0d",
            }}
          />
        </div>
        <p
          style={{
            color: "#fff",
            fontSize: "clamp(13px, 3.6vw, 15px)",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.3px",
            textAlign: "center",
          }}
        >
          Sudev Majhi
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "clamp(8px, 2.4vw, 10px)",
            margin: "3px 0 0",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          {role}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(8px, 2.4vw, 10px)",
            margin: "6px 0 0",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "100%",
          }}
        >
          {PROFILE_TAGLINE}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 5,
          marginBottom: 10,
        }}
      >
        {profileFacts.map((fact) => (
          <div
            key={fact.label}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10,
              padding: "7px 4px",
              textAlign: "center",
              minWidth: 0,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "clamp(6px, 1.8vw, 7px)",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {fact.label}
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "clamp(7px, 2.2vw, 9px)",
                fontWeight: 600,
                margin: "3px 0 0",
                lineHeight: 1.25,
                wordBreak: "break-word",
              }}
            >
              {fact.value}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>
        {[
          { label: "Location", value: location },
          { label: "Email", value: email },
          { label: "Status", value: status },
        ].map((row) => (
          <div
            key={row.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10,
              padding: "8px 10px",
              gap: 8,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "clamp(7px, 2.2vw, 9px)",
                margin: 0,
                flexShrink: 0,
              }}
            >
              {row.label}
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "clamp(7px, 2.2vw, 9px)",
                fontWeight: 600,
                margin: 0,
                textAlign: "right",
                lineHeight: 1.3,
                wordBreak: "break-word",
              }}
            >
              {row.value}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, paddingBottom: 4 }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontSize: "clamp(7px, 2vw, 8px)",
              fontWeight: 600,
              color,
              background: `${color}18`,
              border: `1px solid ${color}33`,
              borderRadius: 999,
              padding: "3px 7px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SearchScreen({ color }: ScreenProps) {
  const trending = [
    { tag: "react-native", posts: "2.4k" },
    { tag: "mobile-ui", posts: "1.8k" },
    { tag: "typescript", posts: "3.1k" },
    { tag: "ship-fast", posts: "940" },
  ];
  const recent = ["React Native perf", "Expo SDK 52", "Portfolio 2026"];
  const people = [
    {
      initials: "SM",
      name: "Sudev Majhi",
      handle: "@sudevmajhi",
      role: "Mobile Engineer",
      bg: "linear-gradient(135deg, #4ade80, #22c55e)",
    },
    {
      initials: "AR",
      name: "Aarav Roy",
      handle: "@aaravroy",
      role: "Frontend Developer",
      bg: "linear-gradient(135deg, #6366f1, #4f46e5)",
    },
    {
      initials: "PI",
      name: "Priya Iyer",
      handle: "@priyaiyer",
      role: "UI/UX Designer",
      bg: "linear-gradient(135deg, #a855f7, #7c3aed)",
    },
    {
      initials: "RK",
      name: "Rohan Kumar",
      handle: "@rohankumar",
      role: "Backend Engineer",
      bg: "linear-gradient(135deg, #f97316, #ea580c)",
    },
    {
      initials: "NT",
      name: "Neha Tiwari",
      handle: "@nehatiwari",
      role: "Product Manager",
      bg: "linear-gradient(135deg, #06b6d4, #0891b2)",
    },
  ];

  return (
    <div className="device-screen-scroll" style={{ ...scrollScreenStyle, padding: "2px 15px 10px" }}>
      <p style={{ color: "#fff", fontSize: "clamp(15px, 4.2vw, 18px)", fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.5px" }}>
        Search
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 11px",
          borderRadius: 14,
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${color}33`,
          marginBottom: 12,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" style={{ width: 13, height: 13, flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span style={{ flex: 1, fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Apps, people, topics...</span>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ width: 10, height: 10 }}>
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
          </svg>
        </div>
      </div>

      <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap" }}>
        {["All", "People", "Apps", "Topics"].map((chip, i) => (
          <span
            key={chip}
            style={{
              fontSize: 8,
              fontWeight: 600,
              padding: "4px 9px",
              borderRadius: 999,
              color: i === 0 ? color : "rgba(255,255,255,0.45)",
              background: i === 0 ? `${color}18` : "rgba(255,255,255,0.05)",
              border: `1px solid ${i === 0 ? `${color}33` : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {chip}
          </span>
        ))}
      </div>

      <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
        Trending now
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
        {trending.map((item, i) => (
          <motion.div
            key={item.tag}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 10px",
              borderRadius: 11,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.25)", width: 12 }}>{i + 1}</span>
              <div>
                <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "#fff" }}>#{item.tag}</p>
                <p style={{ margin: "1px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{item.posts} posts</p>
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" style={{ width: 10, height: 10 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.div>
        ))}
      </div>

      <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
        Recent
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
        {recent.map((term) => (
          <span
            key={term}
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.55)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 999,
              padding: "4px 9px",
            }}
          >
            {term}
          </span>
        ))}
      </div>

      <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
        People
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {people.map((person, i) => (
          <motion.div
            key={person.handle}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 10px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: person.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 800,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {person.initials}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: "#fff" }}>{person.name}</p>
              <p style={{ margin: "1px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{person.handle} · {person.role}</p>
            </div>
            <span
              style={{
                fontSize: 7,
                fontWeight: 700,
                color: i === 0 ? color : "rgba(255,255,255,0.5)",
                background: i === 0 ? `${color}18` : "rgba(255,255,255,0.06)",
                border: `1px solid ${i === 0 ? `${color}30` : "rgba(255,255,255,0.1)"}`,
                borderRadius: 8,
                padding: "4px 7px",
                flexShrink: 0,
              }}
            >
              {i === 0 ? "You" : "Follow"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExploreScreen({ color }: ScreenProps) {
  const categories = ["All", "Apps", "UI", "AI"];
  const tiles = [
    { id: "t1", title: "Ledger OS", subtitle: "Finance SaaS", gradient: "linear-gradient(145deg, #1e3a5f, #0ea5e9)", tall: true },
    { id: "t2", title: "Northwind UI", subtitle: "Design system", gradient: "linear-gradient(145deg, #4c1d95, #a855f7)", tall: false },
    { id: "t3", title: "Atlas Edge", subtitle: "Edge runtime", gradient: "linear-gradient(145deg, #134e4a, #2dd4bf)", tall: false },
    { id: "t4", title: "Quill Editor", subtitle: "Rich text", gradient: "linear-gradient(145deg, #7c2d12, #f97316)", tall: true },
    { id: "t5", title: "Pulse", subtitle: "Social app", gradient: "linear-gradient(145deg, #312e81, #818cf8)", tall: false },
    { id: "t6", title: "Vault", subtitle: "Fintech", gradient: "linear-gradient(145deg, #064e3b, #34d399)", tall: false },
  ];

  return (
    <div className="device-screen-scroll" style={{ ...scrollScreenStyle, padding: "2px 15px 10px" }}>
      <p style={{ color: "#fff", fontSize: "clamp(15px, 4.2vw, 18px)", fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.5px" }}>
        Explore
      </p>

      <div style={{ display: "flex", gap: 5, marginBottom: 12, overflowX: "auto", scrollbarWidth: "none" }}>
        {categories.map((cat, i) => (
          <span
            key={cat}
            style={{
              fontSize: 8,
              fontWeight: 600,
              padding: "5px 10px",
              borderRadius: 999,
              flexShrink: 0,
              color: i === 0 ? color : "rgba(255,255,255,0.45)",
              background: i === 0 ? `${color}18` : "rgba(255,255,255,0.05)",
              border: `1px solid ${i === 0 ? `${color}33` : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 6,
          gridAutoFlow: "dense",
        }}
      >
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.04 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridRow: tile.tall ? "span 2" : "span 1",
              minHeight: tile.tall ? 108 : 52,
              borderRadius: 12,
              background: tile.gradient,
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 7, left: 8, right: 8 }}>
              <p style={{ margin: 0, fontSize: 9, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                {tile.title}
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 7, color: "rgba(255,255,255,0.65)" }}>{tile.subtitle}</p>
            </div>
            {i === 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 7,
                  right: 7,
                  fontSize: 6,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  color: "#fff",
                  background: color,
                  padding: "2px 5px",
                  borderRadius: 4,
                }}
              >
                NEW
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <p style={{ margin: "12px 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
        Collections
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { name: "Mobile picks", count: 12, icon: "📱" },
          { name: "Open source", count: 8, icon: "⚡" },
        ].map((col) => (
          <div
            key={col.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 10px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: 14 }}>{col.icon}</span>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "#fff" }}>{col.name}</p>
              <p style={{ margin: "1px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{col.count} projects</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ width: 10, height: 10 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

const navScreens: Record<
  typeof NAV_SEARCH | typeof NAV_EXPLORE | typeof NAV_PROFILE,
  { Screen: (props: ScreenProps) => React.JSX.Element; accent: string; bg: string }
> = {
  [NAV_SEARCH]: { Screen: SearchScreen, accent: SEARCH_ACCENT, bg: SEARCH_SCREEN_BG },
  [NAV_EXPLORE]: { Screen: ExploreScreen, accent: EXPLORE_ACCENT, bg: EXPLORE_SCREEN_BG },
  [NAV_PROFILE]: { Screen: ProfileScreen, accent: PROFILE_ACCENT, bg: PROFILE_SCREEN_BG },
};

const NAV_LABELS = ["Home", "Search", "Explore", "Profile"] as const;

const slides = [
  {
    id: "fitness",
    label: "FitTrack",
    color: "#FF6B35",
    screenBg: "#111111",
    Screen: function FitnessScreen({ color }: ScreenProps) {
      const metrics = [
        { label: "Workouts", value: "4", sub: "this week", accent: "#FF6B35" },
        { label: "Minutes", value: "186", sub: "active", accent: "#F59E0B" },
        { label: "Streak", value: "12", sub: "days", accent: "#EF4444" },
      ];
      const workouts = [
        { name: "Morning Run", detail: "5.2 km · 32 min", pct: 85, accent: "#FF6B35" },
        { name: "Strength", detail: "Upper body · 45 min", pct: 62, accent: "#F59E0B" },
        { name: "Stretch", detail: "Recovery · 15 min", pct: 40, accent: "#EF4444" },
      ];
      const weekBars = [45, 70, 55, 90, 65, 100, 75];

      return (
        <div className="device-screen-scroll" style={{ ...scrollScreenStyle, padding: "2px 15px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <p style={{ margin: 0, fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Today
              </p>
              <p style={{ margin: "2px 0 0", fontSize: "clamp(15px, 4.2vw, 18px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>
                FitTrack
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 8px",
                borderRadius: 999,
                background: "rgba(255,107,53,0.15)",
                border: "1px solid rgba(255,107,53,0.35)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
              <span style={{ fontSize: 8, fontWeight: 700, color }}>12 day streak</span>
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              padding: "14px 13px",
              marginBottom: 10,
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: 8, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              Calories burned
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
              <p style={{ margin: 0, fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>820</p>
              <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>kcal</span>
            </div>
            <div style={{ marginTop: 10, height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <motion.div
                style={{ height: "100%", borderRadius: 999, background: color }}
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p style={{ margin: "6px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>82% of daily goal</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 6, marginBottom: 12 }}>
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                style={{
                  borderRadius: 12,
                  padding: "9px 7px",
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: m.accent }}>{m.value}</p>
                <p style={{ margin: "2px 0 0", fontSize: 8, fontWeight: 600, color: "#fff" }}>{m.label}</p>
                <p style={{ margin: "1px 0 0", fontSize: 7, color: "rgba(255,255,255,0.35)" }}>{m.sub}</p>
              </motion.div>
            ))}
          </div>

          <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Today&apos;s plan
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
            {workouts.map((w, i) => (
              <div
                key={w.name}
                style={{
                  borderRadius: 12,
                  padding: "9px 10px",
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: "#fff" }}>{w.name}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{w.detail}</p>
                  </div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: w.accent }}>{w.pct}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <motion.div
                    style={{ height: "100%", borderRadius: 999, background: w.accent }}
                    initial={{ width: 0 }}
                    animate={{ width: `${w.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            This week
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 4,
              height: 44,
              padding: "0 2px",
            }}
          >
            {weekBars.map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <motion.div
                  style={{
                    width: "100%",
                    maxWidth: 14,
                    borderRadius: 4,
                    background: i === 5 ? color : "rgba(255,255,255,0.12)",
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 0.38}px` }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: "easeOut" }}
                />
                <span style={{ fontSize: 6, color: "rgba(255,255,255,0.3)" }}>
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "finance",
    label: "Vault",
    color: "#22C55E",
    screenBg: "#0d0d0d",
    Screen: function FinanceScreen({ color }: ScreenProps) {
      const categories = [
        { label: "Food", pct: 32, amount: "$384", accent: "#F59E0B" },
        { label: "Bills", pct: 24, amount: "$288", accent: "#EF4444" },
        { label: "Savings", pct: 44, amount: "$528", accent: color },
      ];
      const transactions = [
        { icon: "🎵", name: "Spotify", cat: "Subscription", amt: "-$9.99", neg: true },
        { icon: "☕", name: "Blue Bottle", cat: "Food", amt: "-$6.50", neg: true },
        { icon: "💰", name: "Freelance", cat: "Income", amt: "+$840", neg: false },
      ];

      return (
        <div className="device-screen-scroll" style={{ ...scrollScreenStyle, padding: "2px 15px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <p style={{ margin: 0, fontSize: "clamp(15px, 4.2vw, 18px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>
              Vault
            </p>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 10,
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" style={{ width: 12, height: 12 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              padding: "14px 13px",
              marginBottom: 10,
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: 8, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              Total balance
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
              <p style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>$12,480</p>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color,
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.35)",
                  padding: "2px 7px",
                  borderRadius: 6,
                }}
              >
                +2.4%
              </span>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
              {["Send", "Request", "Add"].map((action, i) => (
                <div
                  key={action}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "7px 0",
                    borderRadius: 10,
                    fontSize: 8,
                    fontWeight: 700,
                    color: i === 0 ? "#111" : "rgba(255,255,255,0.7)",
                    background: i === 0 ? color : "rgba(255,255,255,0.06)",
                    border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {action}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 14,
              padding: "12px",
              marginBottom: 10,
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p style={{ margin: "0 0 10px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              30 day trend
            </p>
            <svg width="100%" height="52" viewBox="0 0 200 52" preserveAspectRatio="none">
              <motion.path
                d="M0 44 L20 38 L40 40 L60 28 L80 32 L100 20 L120 24 L140 14 L160 18 L180 10 L200 6 L200 52 L0 52Z"
                fill="rgba(34,197,94,0.12)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.path
                d="M0 44 L20 38 L40 40 L60 28 L80 32 L100 20 L120 24 L140 14 L160 18 L180 10 L200 6"
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </div>

          <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Spending
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
            {categories.map((cat, i) => (
              <div key={cat.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{cat.label}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#fff" }}>{cat.amount}</span>
                </div>
                <div style={{ height: 5, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <motion.div
                    style={{ height: "100%", borderRadius: 999, background: cat.accent }}
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.pct}%` }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p style={{ margin: "0 0 8px", fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Recent
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {transactions.map((tx) => (
              <div
                key={tx.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderRadius: 11,
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                    }}
                  >
                    {tx.icon}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "#fff" }}>{tx.name}</p>
                    <p style={{ margin: "1px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{tx.cat}</p>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: tx.neg ? "rgba(255,255,255,0.65)" : color }}>
                  {tx.amt}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "social",
    label: "Pulse",
    color: "#5254F2",
    screenBg: "#111111",
    Screen: function SocialScreen({ color }: ScreenProps) {
      const stories = [
        { id: "you", label: "You", initials: "+", ring: "#525252", live: false, isYou: true },
        { id: "jm", label: "James", initials: "JM", ring: "#5254F2", live: true },
        { id: "kl", label: "Kira", initials: "KL", ring: "#22C55E", live: false },
        { id: "rn", label: "Riya", initials: "RN", ring: "#16A34A", live: true },
      ];

      const posts = [
        {
          id: "p1",
          initials: "SM",
          name: "Sudev M.",
          handle: "@sudevm",
          role: "Full Stack Engineer",
          time: "2m",
          text: "Building a new AI-powered platform for content creation. Excited to see the results.",
          likes: 248,
          comments: 32,
          avatarBg: "#5254F2",
          verified: true,
          tag: "shipping",
          media: null,
        },
        {
          id: "p2",
          initials: "MG",
          name: "Moytri G.",
          handle: "@moytrig",
          role: "Product Designer",
          time: "18m",
          text: "Building a new AI-powered platform for content creation. Excited to see the results.",
          likes: 1240,
          comments: 89,
          avatarBg: "#22C55E",
          verified: false,
          tag: null,
          media: "#1a1a1a",
        },
      ];

      return (
        <div
          className="device-screen-scroll"
          style={{
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 15px 10px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(16px, 4.5vw, 18px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                }}
              >
                Pulse
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>
                For you · 12 new
              </p>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ width: 12, height: 12 }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div
                style={{
                  position: "relative",
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  background: `${color}18`,
                  border: `1px solid ${color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ width: 12, height: 12 }}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#f43f5e",
                    border: "1.5px solid #111111",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stories */}
          <div
            style={{
              display: "flex",
              gap: 9,
              padding: "0 15px 12px",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  flexShrink: 0,
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      padding: 2,
                      background: story.isYou ? "rgba(255,255,255,0.12)" : story.ring,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: story.isYou ? "rgba(255,255,255,0.06)" : "#14111f",
                        border: story.isYou ? "1.5px dashed rgba(255,255,255,0.25)" : "2px solid #111111",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: story.isYou ? 16 : 10,
                        fontWeight: 700,
                        color: story.isYou ? "rgba(255,255,255,0.45)" : "#fff",
                      }}
                    >
                      {story.initials}
                    </div>
                  </div>
                  {story.live && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: -2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: 6,
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        color: "#fff",
                        background: "#EF4444",
                        padding: "1px 5px",
                        borderRadius: 4,
                        border: "1.5px solid #111111",
                      }}
                    >
                      LIVE
                    </span>
                  )}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 7,
                    margin: 0,
                    maxWidth: 42,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {story.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Compose */}
          <div style={{ padding: "0 15px 10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 10px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: color,
                  flexShrink: 0,
                }}
              />
              <p style={{ margin: 0, fontSize: 9, color: "rgba(255,255,255,0.3)", flex: 1 }}>
                Share what you&apos;re building...
              </p>
              <div
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  color,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  borderRadius: 8,
                  padding: "4px 7px",
                }}
              >
                Post
              </div>
            </div>
          </div>

          {/* Feed posts */}
          <div style={{ padding: "0 15px 8px", display: "flex", flexDirection: "column", gap: 8 }}>
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  overflow: "hidden",
                }}
              >
                {/* Post header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 11px 0",
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: post.avatarBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {post.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {post.name}
                      </p>
                      {post.verified && (
                        <svg viewBox="0 0 24 24" fill={color} style={{ width: 10, height: 10 }}>
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                    </div>
                    <p style={{ margin: "1px 0 0", fontSize: 8, color: "rgba(255,255,255,0.35)" }}>
                      {post.handle} · {post.role}
                    </p>
                  </div>
                  <p style={{ margin: 0, fontSize: 8, color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>
                    {post.time}
                  </p>
                </div>

                {/* Post body */}
                <div style={{ padding: "8px 11px 0" }}>
                  {post.tag && (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 7,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color,
                        background: `${color}14`,
                        border: `1px solid ${color}28`,
                        borderRadius: 6,
                        padding: "2px 6px",
                        marginBottom: 6,
                      }}
                    >
                      #{post.tag}
                    </span>
                  )}
                  <p
                    style={{
                      margin: 0,
                      fontSize: 10,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    {post.text}
                  </p>
                </div>

                {/* Media attachment */}
                {post.media && (
                  <div style={{ padding: "8px 11px 0" }}>
                    <div
                      style={{
                        height: 72,
                        borderRadius: 12,
                        background: post.media,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: "45%",
                          background: "rgba(0,0,0,0.4)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 8,
                          left: 8,
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(8px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            style={{ width: 9, height: 9 }}
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                        </div>
                        <p style={{ margin: 0, fontSize: 8, fontWeight: 600, color: "#fff" }}>
                          mood-board.fig
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Engagement bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 11px 10px",
                    marginTop: 4,
                  }}
                >
                  <div style={{ display: "flex", gap: 12 }}>
                    {[
                      {
                        filled: i === 0,
                        path: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
                        val: post.likes,
                      },
                      {
                        filled: false,
                        path: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                        val: post.comments,
                      },
                    ].map((action, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          color: action.filled ? "#f43f5e" : "rgba(255,255,255,0.35)",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill={action.filled ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          style={{ width: 11, height: 11 }}
                        >
                          <path d={action.path} />
                        </svg>
                        <span style={{ fontSize: 9, fontWeight: 600 }}>
                          {action.val >= 1000 ? `${(action.val / 1000).toFixed(1)}k` : action.val}
                        </span>
                      </div>
                    ))}
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ width: 11, height: 11 }}
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </motion.article>
            ))}
          </div>
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

function DeviceTabBar({
  activeNav,
  accentColor,
  onNavPress,
}: {
  activeNav: number;
  accentColor: string;
  onNavPress: (index: number) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 9,
        left: 11,
        right: 11,
        zIndex: 8,
        pointerEvents: "none",
      }}
    >
      <div
        className="device-tab-glass"
        style={{
          pointerEvents: "auto",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 16,
          padding: "4px 4px",
          border: "0.1px solid rgba(255, 255, 255, 0.05)",
          // boxShadow: "0 8px 28px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.25)",
        }}
      >
        {navIcons.map((icon, i) => {
          const isActive = activeNav === i;

          return (
            <motion.button
              key={i}
              type="button"
              aria-label={NAV_LABELS[i]}
              aria-pressed={isActive}
              onClick={() => onNavPress(i)}
              style={{
                position: "relative",
                flex: 1,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "7px 0",
                borderRadius: 16,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="device-tab-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  style={{
                    position: "absolute",
                    inset: 2,
                    borderRadius: 10,
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "0.1px solid rgba(255, 255, 255, 0.05)",
                    // boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                />
              )}
              <motion.span
                animate={{
                  color: isActive ? accentColor : "rgba(255,255,255,0.38)",
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export const DeviceMockupSlider = memo(function DeviceMockupSlider({
  visible = true,
}: DeviceMockupSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeNav, setActiveNav] = useState(NAV_HOME);
  const [time, setTime] = useState("");

  const isCarouselView = activeNav === NAV_HOME;
  const slide = slides[activeIndex];
  const navScreen = !isCarouselView ? navScreens[activeNav as keyof typeof navScreens] : null;
  const accentColor = isCarouselView ? slide.color : navScreen!.accent;
  const screenBg = isCarouselView ? slide.screenBg : navScreen!.bg;
  const Screen = isCarouselView ? slide.Screen : navScreen!.Screen;
  const contentKey = isCarouselView ? slide.id : `nav-${activeNav}`;

  const handleNavPress = useCallback((index: number) => {
    setActiveNav(index);
  }, []);

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
    if (activeNav !== NAV_HOME) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [activeNav]);

  const handleDotPress = useCallback((index: number) => {
    setActiveNav(NAV_HOME);
    setActiveIndex(index);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[clamp(220px,62vw,247px)] select-none"
      aria-label="Mobile app showcase"
      aria-roledescription="carousel"
    >
      <motion.div
        key={`${contentKey}-glow`}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "3rem",
          background: `${accentColor}30`,
          filter: "blur(48px)",
          transform: "scale(0.8) translateY(8%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full"
        style={{
          position: "relative",
          aspectRatio: "247 / 493",
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

        <motion.div
          animate={{ backgroundColor: screenBg }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "2.55rem",
            background: screenBg,
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DeviceStatusBar time={time} />

          <div
            style={{
              position: "relative",
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
              zIndex: 2,
              paddingBottom: TAB_BAR_INSET,
            }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={contentKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: 0, overflow: "hidden" }}
              >
                <Screen color={accentColor} />
              </motion.div>
            </AnimatePresence>
          </div>

          <DeviceTabBar
            activeNav={activeNav}
            accentColor={accentColor}
            onNavPress={handleNavPress}
          />

          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 4,
              left: "50%",
              transform: "translateX(-50%)",
              width: 72,
              height: 3,
              background: "rgba(255,255,255,0.28)",
              borderRadius: 2,
              zIndex: 9,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {isCarouselView && (
        <div className="relative flex justify-center gap-1" style={{ marginTop: 24, zIndex: 1 }}>
          {slides.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              onClick={() => handleDotPress(i)}
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
      )}
    </motion.div>
  );
});
