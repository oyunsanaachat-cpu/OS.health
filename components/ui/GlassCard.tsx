"use client";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function GlassCard({ className = "", children }: Props) {
  return (
    <div
      className={`glass rounded-xl p-4 ${className}`}
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(155, 184, 185, 0.12)", // #9BB8B9 тунгалаг
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {children}
    </div>
  );
}
