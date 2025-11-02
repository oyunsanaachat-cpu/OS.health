"use client";
import React from "react";

export default function AssistantFab({ label }: { label: string }) {
  return (
    <button
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        backgroundColor: "#0b2830",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: 64,
        height: 64,
        fontSize: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        cursor: "pointer",
      }}
    >
      💬
      <span
        style={{
          display: "block",
          fontSize: 10,
          marginTop: 4,
        }}
      >
        {label}
      </span>
    </button>
  );
}
