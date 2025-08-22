import React from "react";

import styles from "./Typography.module.css";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "paragraph";
  fontsize?: string;
  color?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "paragraph",
  fontsize,
  color,
}) => {
  const Tag = variant === "h1" ? "h1" : variant === "h2" ? "h2" : "p";

  const className = styles[variant] || styles.paragraph;
  return (
    <Tag className={className} style={{ fontSize: fontsize, color: color }}>
      {children}
    </Tag>
  );
};

export default Typography;
