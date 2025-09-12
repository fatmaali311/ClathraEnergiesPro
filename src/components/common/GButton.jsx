import { Link } from "react-router-dom";
import React from "react";

const sizeClasses = {
  sm: "min-h-[40px] px-6 text-sm",
  md: "min-h-[52px] px-8 text-base",
  lg: "min-h-[64px] px-12 text-lg",
  xl: "min-h-[80px] px-16 text-xl",
};

const GButton = React.memo(function GButton({
  children,
  to,
  ariaLabel,
  className = "",
  size = "md",
}) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      className={`g-button inline-flex items-center justify-center font-medium shadow-md cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
});

export default GButton;