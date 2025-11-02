// Alternative Spring Loading Animations

// Circular Spring Loader
export function CircularSpringLoader({ size = "md" }) {
  const sizeMap = {
    sm: { width: "w-16", height: "h-16", coilSize: "w-3 h-3" },
    md: { width: "w-24", height: "h-24", coilSize: "w-4 h-4" },
    lg: { width: "w-32", height: "h-32", coilSize: "w-5 h-5" },
  };

  const { width, height, coilSize } = sizeMap[size];

  return (
    <div className={`relative ${width} ${height} mx-auto`}>
      {/* Rotating Spring Coils */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute ${coilSize} bg-primary-600 dark:bg-primary-400 rounded-full animate-rotate-spring`}
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${i * 45}deg) translateY(-${
              size === "sm" ? "24" : size === "md" ? "36" : "48"
            }px)`,
            animationDelay: `${i * 0.1}s`,
            opacity: 1 - i * 0.1,
          }}
        />
      ))}

      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`${coilSize} bg-primary-600 dark:bg-primary-400 rounded-full animate-pulse-glow`}
        />
      </div>
    </div>
  );
}

// Bouncing Springs Loader
export function BouncingSpringLoader() {
  return (
    <div className="flex items-end justify-center space-x-2 h-16">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative">
          {/* Spring Coil */}
          <div
            className="w-4 bg-primary-600 dark:bg-primary-400 rounded-t-lg animate-spring-bounce"
            style={{
              height: "48px",
              animationDelay: `${i * 0.1}s`,
            }}
          />
          {/* Base */}
          <div className="w-6 h-2 bg-steel-300 dark:bg-steel-700 rounded-full mt-1" />
        </div>
      ))}
    </div>
  );
}

// Industrial Spring Loader
export function IndustrialSpringLoader() {
  return (
    <div className="relative w-32 h-24 mx-auto">
      {/* Compressed Spring Effect */}
      <svg viewBox="0 0 100 80" className="w-full h-full">
        {/* Spring Coils */}
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy={15 + i * 12}
            rx="35"
            ry="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary-600 dark:text-primary-400 animate-spring-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* Compression Plate */}
        <rect
          x="15"
          y="75"
          width="70"
          height="4"
          rx="2"
          className="fill-current text-steel-400 dark:text-steel-600 animate-compress"
        />
      </svg>

      {/* Loading Text */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-steel-500 dark:text-steel-400 whitespace-nowrap">
        Manufacturing Quality...
      </div>
    </div>
  );
}

// Minimal Dots Loader with Spring Theme
export function SpringDotsLoader() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full animate-spring-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

// Page Transition Loader
export function PageTransitionLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-steel-900/90 backdrop-blur-sm">
      <div className="text-center">
        <CircularSpringLoader size="lg" />
        <p className="mt-6 text-lg font-medium text-primary-600 dark:text-primary-400 animate-pulse">
          Noor Springs
        </p>
        <p className="mt-2 text-sm text-steel-500 dark:text-steel-400">
          Loading excellence...
        </p>
      </div>
    </div>
  );
}

// Skeleton Loader for Content
export function SkeletonLoader({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-steel-200 dark:bg-steel-700 rounded animate-pulse"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
}

// Card Loading Skeleton
export function CardSkeleton({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-steel-800 rounded-lg shadow-md p-6 animate-pulse"
        >
          <div className="h-48 bg-steel-200 dark:bg-steel-700 rounded mb-4" />
          <div className="h-6 bg-steel-200 dark:bg-steel-700 rounded mb-3" />
          <div className="h-4 bg-steel-200 dark:bg-steel-700 rounded mb-2" />
          <div className="h-4 bg-steel-200 dark:bg-steel-700 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}
