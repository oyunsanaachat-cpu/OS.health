"use client";
import React from "react";

type Props = { onClick?: () => void; label?: string };

export default function AssistantFab({ onClick, label = "Оюунсанаа" }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 rounded-full px-5 py-3 shadow-lg"
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(155, 184, 185, 0.18)",
        border: "1px solid rgba(255,255,255,0.18)"
      }}
    >
      {label}
    </button>
  );
}
