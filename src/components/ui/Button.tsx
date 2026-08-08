import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<string, string> = {
  primary: "bg-blue-600 text-text hover:bg-blue-700",
  secondary: "bg-gray-800 text-text hover:bg-gray-700",
  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-text",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-lg font-medium transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;