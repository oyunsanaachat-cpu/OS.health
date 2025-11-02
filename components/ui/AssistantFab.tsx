"use client";
import React from "react";

type Props = {
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

/** Энгийн floating action button (баруун доор) */
export default function AssistantFab({
  label = "Туслах",
  onClick,
  style,
}: Props) {
  return (
    <button
      aria-label="assistant"
      onClick={onClick}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        border: "none",
        borderRadius: 9999,
        backgroundColor: "#0b2830",
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ...style,
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
    </button>
  );
}
