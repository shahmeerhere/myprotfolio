import React from "react";
import clsx from "clsx";

export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  const baseClasses =
    "rounded-lg font-medium focus:outline-none transition-colors duration-200";

  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
    outline: "bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700",
    ghost: "bg-transparent hover:bg-white/10 text-white",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button className={clsx(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
