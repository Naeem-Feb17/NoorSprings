import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Noor Springs - Quality Spring Manufacturer | Visakhapatnam",
  description = "Noor Springs - Leading manufacturer of compression, tension, torsion, and flat springs in Visakhapatnam since 2011. Custom spring solutions with ISO certified quality.",
  keywords = "Noor Springs, spring manufacturer, compression spring, tension spring, torsion spring, flat spring, Visakhapatnam, Andhra Pradesh, custom springs, industrial springs",
  canonical = "https://noorsprings.in",
  ogImage = "https://noorsprings.in/og-image.jpg",
  structuredData = null,
}) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Noor Springs",
    image: ogImage,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Door No. 21-16/6 1C, Near Dolphin Hotel",
      addressLocality: "Suryabagh, Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.712055",
      longitude: "83.296884",
    },
    telephone: "+91-9440596384",
    url: "https://noorsprings.in",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Mr. Noor Mohammed",
    },
    foundingDate: "2011",
    sameAs: ["https://www.google.com/maps/place/Noor+Springs"],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Noor Springs" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English, Hindi, Telugu" />
      <meta name="author" content="Noor Springs" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Visakhapatnam" />
      <meta name="geo.position" content="17.712055;83.296884" />
      <meta name="ICBM" content="17.712055, 83.296884" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}
