import { useEffect, useState } from "react";

export default function Loading({ fullScreen = true, message = "Loading..." }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const containerClass = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-steel-900"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClass}>
      <div className="text-center">
        {/* Spring Animation */}
        <div className="relative w-24 h-32 mx-auto mb-6">
          {/* Spring Coils */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-full h-3 rounded-full border-4 border-primary-600 dark:border-primary-400 animate-spring-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `scaleX(${0.6 + i * 0.08})`,
                }}
              />
            ))}
          </div>

          {/* Compression Effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-2 bg-steel-300 dark:bg-steel-700 rounded-full animate-compress" />
          </div>
        </div>

        {/* Company Name with Spring Effect */}
        <div className="mb-4">
          <h2 className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400 animate-pulse">
            Noor Springs
          </h2>
        </div>

        {/* Loading Text */}
        <div className="flex items-center justify-center space-x-1">
          <span className="text-steel-600 dark:text-steel-400 font-medium">
            {message}
          </span>
          <span className="text-primary-600 dark:text-primary-400 font-bold w-6 text-left">
            {dots}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-64 h-1 bg-steel-200 dark:bg-steel-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-600 to-primary-400 animate-loading-bar rounded-full" />
        </div>

        {/* Tagline */}
        <p className="mt-4 text-xs text-steel-500 dark:text-steel-500 animate-fade-in">
          Quality Springs Since 2011
        </p>
      </div>
    </div>
  );
}

// Alternative Minimal Loading Spinner
export function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className={`inline-block ${className}`}>
      <div
        className={`${sizeClasses[size]} border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
}

// Button Loading State
export function ButtonLoading({ children, loading, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`relative ${props.className}`}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </span>
      )}
      <span className={loading ? "opacity-0" : ""}>{children}</span>
    </button>
  );
}
