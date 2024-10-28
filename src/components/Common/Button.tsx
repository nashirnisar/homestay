import React from "react";

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large"; // Size options
  color?: "primary" | "secondary"; // Color options
}

// Define the Button component
export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "primary",
  className,
  ...props
}) => {
  // Determine size classes
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  // Determine color classes
  const colorClasses = {
    primary: "bg-purple-700 hover:bg-purple-500 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded transition duration-300 ${className}`}
      style={{ fontFamily: "Questrial" }}
      {...props}
    />
  );
};
