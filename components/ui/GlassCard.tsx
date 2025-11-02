// components/ui/GlassCard.tsx
import React from "react";

type Props = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  header?: React.ReactNode;
  actions?: React.ReactNode;
}>;

export default function GlassCard({
  as:Tag="section",
  className="",
  header,
  actions,
  children
}: Props){
  return (
    <Tag className={`glass ${className}`} style={{padding:16}}>
      {(header || actions) && (
        <div style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          marginBottom:12
        }}>
          <div style={{fontWeight:700, fontSize:18}}>{header}</div>
          {actions}
        </div>
      )}
      {children}
    </Tag>
  );
}
