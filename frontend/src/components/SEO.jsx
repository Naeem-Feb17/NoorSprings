import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Noor Springs | Spring Manufacturer in Visakhapatnam Since 2011",
  description = "Noor Springs — Premier spring manufacturer in Visakhapatnam, Andhra Pradesh since 2011. Compression springs, tension springs, torsion springs, flat springs & custom industrial springs. ISO certified. Call +91-9440596384.",
  keywords = "Noor Springs, spring manufacturer Visakhapatnam, compression springs, tension springs, torsion springs, flat springs, die springs, custom springs, industrial springs Vizag, spring supplier Andhra Pradesh, coil spring factory",
  canonical = "https://noorspring.vercel.app/",
  ogImage = "https://noorspring.vercel.app/springs/metallic-spring-workbench.png",
  structuredData = null,
  breadcrumb = null,
}) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: "Noor Springs",
    alternateName: "NoorSprings",
    image: ogImage,
    description,
    url: "https://noorspring.vercel.app/",
    logo: "https://noorspring.vercel.app/favicon.png",
    telephone: "+91-9440596384",
    email: "noorsprings@gmail.com",
    foundingDate: "2011",
    priceRange: "$$",
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
    hasMap: "https://www.google.com/maps?q=17.712055,83.296884",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9440596384",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
    founder: {
      "@type": "Person",
      name: "Mr. Noor Mohammed",
    },
    areaServed: [
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "State", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
    },
    sameAs: ["https://www.google.com/maps/place/Noor+Springs"],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="author" content="Noor Springs" />

      {/* Geo */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Visakhapatnam, Andhra Pradesh" />
      <meta name="geo.position" content="17.712055;83.296884" />
      <meta name="ICBM" content="17.712055, 83.296884" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta
        property="og:image:alt"
        content="Noor Springs — Spring Manufacturer Visakhapatnam"
      />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Noor Springs" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data: LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Breadcrumb (if provided) */}
      {breadcrumb && (
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      )}
    </Helmet>
  );
}
