import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

/**
 * IMPROVED AdBanner Component - AdSense Compliant Design
 *
 * Design Philosophy:
 * - HIGHLY VISIBLE advertisement label (not mistaken for nav/CTA)
 * - Clear visual separation from navigation and CTAs
 * - Professional, trustworthy appearance
 * - Accessible and mobile-friendly
 */
export default function AdBanner({ slot = "YOUR_AD_SLOT", format = "auto" }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let retryTimer = null;
    const tryPush = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setLoaded(true);
      } catch (err) {
        console.debug("AdSense ad not loaded yet, will retry", err);
        retryTimer = setTimeout(() => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            setLoaded(true);
          } catch (e) {
            console.debug("Second attempt to load AdSense failed", e);
          }
        }, 2000);
      }
    };

    tryPush();

    return () => {
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement section"
      role="region"
      className="my-12 w-full flex flex-col items-center bg-amber-100 dark:bg-amber-950 py-8 border-t-8 border-b-8 border-amber-500 dark:border-amber-600"
    >
      {/* PROMINENT Advertisement Label - VERY CLEAR & DISTINCT */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-4 bg-amber-400 dark:bg-amber-600 px-6 py-4 rounded-xl w-fit shadow-lg border-2 border-amber-600 dark:border-amber-700">
          <AlertCircle
            size={28}
            className="text-amber-900 dark:text-amber-100 flex-shrink-0"
            strokeWidth={3}
          />
          <div className="flex flex-col">
            <span className="text-base font-black text-amber-900 dark:text-amber-100 tracking-widest">
              ⚠️ SPONSORED ADVERTISEMENT ⚠️
            </span>
            <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">
              This is paid content by Google - NOT a link or download
            </span>
          </div>
        </div>
      </div>

      {/* Ad Container with Clear Visual Distinction */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="w-full bg-white dark:bg-steel-800 rounded-lg border-2 border-dashed border-amber-300 dark:border-amber-700 overflow-hidden"
          style={{
            display: "block",
            minHeight: 120,
          }}
          role="region"
          aria-label="Ad content"
        >
          {!loaded ? (
            // Placeholder when ad not loaded
            <div
              aria-hidden="true"
              className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 dark:from-steel-700 dark:to-steel-800 border-l-4 border-amber-400 dark:border-amber-600 flex flex-col items-center justify-center px-4 py-8 text-center min-h-[120px]"
            >
              <div className="text-amber-600 dark:text-amber-400 mb-2">
                <AlertCircle size={32} strokeWidth={2} />
              </div>
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                Advertisement Space
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                Sponsored content from Google
              </p>
            </div>
          ) : (
            // Real ad slot
            <ins
              className="adsbygoogle"
              style={{
                display: "block",
                width: "100%",
                minHeight: 120,
              }}
              data-ad-client="pub-6367759803945063"
              data-ad-slot={slot}
              data-ad-format={format}
              data-full-width-responsive="true"
            ></ins>
          )}
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 text-center bg-amber-200 dark:bg-amber-800 px-4 py-3 rounded-lg">
          ⚠️ This advertisement is provided by Google and is NOT a navigation
          link, menu, or download button. Clicking on ads supports our business
          operations.
        </p>
      </div>
    </aside>
  );
}
