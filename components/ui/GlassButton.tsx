import React from "react";

export default function GlassButton({
  children,
  className = "",
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button type={type} onClick={onClick} className={`glass btn ${className}`}>
      {children}
    </button>
  );
}
