import { useEffect } from "react";

export default function AdBanner({ slot = "YOUR_AD_SLOT", format = "auto" }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log("AdSense ad not loaded");
    }
  }, []);

  return (
    <div className="my-8 w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6367759803945063"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
