export const baseClassName = `font-semibold rounded-full border-2 inline-flex items-center justify-center space-x-2`;

export const variants = {
  primary: "bg-purple-600 hover:bg-purple-700 text-white border-transparent",
  secondary: "bg-white hover:bg-gray-50 text-purple-600 border-purple-600",
  accent: "bg-yellow-400 hover:bg-yellow-300 text-purple-900 border-transparent",
  ghost: "bg-transparent hover:bg-purple-50 text-purple-600 border-transparent",
  outline: "bg-transparent hover:bg-purple-600 hover:text-white text-purple-600 border-purple-600",
};

export const sizes = {
  small: "px-sm py-xs text-sm",
  medium: "px-md py-sm text-base",
  large: "px-lg py-md text-lg",
};

export const disabledClassName = `opacity-50 cursor-not-allowed`;
export const enabledClassName = `transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`;
