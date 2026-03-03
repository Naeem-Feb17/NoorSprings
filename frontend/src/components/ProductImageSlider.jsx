import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductImageSlider({ images = [], alt = "" }) {
  const [current, setCurrent] = useState(0);

  const prev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  if (!images.length) return null;

  // Single image — no slider chrome needed
  if (images.length === 1) {
    return (
      <div className="w-full aspect-square bg-white dark:bg-steel-700 flex items-center justify-center p-6 border-b border-steel-200 dark:border-steel-600">
        <img
          src={images[0]}
          alt={alt}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square bg-white dark:bg-steel-700 flex items-center justify-center border-b border-steel-200 dark:border-steel-600 overflow-hidden group/slider">
      {/* Image */}
      <img
        key={current}
        src={images[current]}
        alt={`${alt} — view ${current + 1}`}
        className="max-h-full max-w-full object-contain p-6 transition-opacity duration-300"
      />

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-steel-800/80 hover:bg-white dark:hover:bg-steel-700 text-steel-700 dark:text-white rounded-full p-1.5 shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-steel-800/80 hover:bg-white dark:hover:bg-steel-700 text-steel-700 dark:text-white rounded-full p-1.5 shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrent(i);
            }}
            aria-label={`Go to image ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "bg-primary-600 w-4 h-2"
                : "bg-steel-300 dark:bg-steel-500 w-2 h-2 hover:bg-primary-400"
            }`}
          />
        ))}
      </div>

      {/* Image counter badge */}
      <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full font-medium z-10">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
