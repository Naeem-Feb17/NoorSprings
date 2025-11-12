import { useEffect, useState } from "react";

export default function AdBanner({ slot = "YOUR_AD_SLOT", format = "auto" }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let retryTimer = null;
    const tryPush = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setLoaded(true);
      } catch (err) {
        // Ad script not ready yet; retry once after a short delay
        // Keep the placeholder collapsed so the page doesn't show a large empty area
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

  // While the ad hasn't loaded, render a collapsed placeholder (zero height)
  // This prevents large gaps on the page when the ad network doesn't return content
  if (!loaded) {
    return <div aria-hidden="true" style={{ height: 0, overflow: "hidden" }} />;
  }

  return (
    <div className="my-8 w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90 }}
        data-ad-client="ca-pub-6367759803945063"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
