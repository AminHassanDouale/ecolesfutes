// src/components/shared/JsonLd.tsx

export function SchoolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Les Petits Futés — Groupe Scolaire",
    alternateName: "Groupe Scolaire Les Petits Futés",
    url: "https://petitsfutes.org",
    logo: "https://petitsfutes.org/logo.png",
    image: "https://petitsfutes.org/og-image.jpg",
    description:
      "École privée d'excellence à Djibouti proposant des cursus Maternelle, Primaire et Collège. 98% de réussite aux examens nationaux.",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gabode 5",
      addressLocality: "Djibouti-Ville",
      addressCountry: "DJ",
      addressRegion: "Djibouti",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.58901,
      longitude: 42.98988,
    },
    telephone: "+25321348696",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+25321348696",
        contactType: "customer service",
        availableLanguage: ["French", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+25377198027",
        contactType: "customer service",
        contactOption: "MobilePhone",
        availableLanguage: ["French", "Arabic"],
      },
    ],
    email: "contact@petitsfutes.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/lesPetitsFutes",
      "https://www.instagram.com/lesPetitsFutes",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Niveaux scolaires",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Maternelle",
            description: "Section maternelle pour les enfants de 2 ans et demi à 5 ans.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Primaire",
            description: "Enseignement primaire pour les élèves de 6 à 11 ans.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Collège",
            description:
              "Enseignement secondaire premier cycle pour les élèves de 12 à 15 ans.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EventJsonLd({
  name,
  description,
  startDate,
  location,
}: {
  name: string;
  description: string;
  startDate: string;
  location: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    location: {
      "@type": "Place",
      name: "Les Petits Futés",
      address: {
        "@type": "PostalAddress",
        streetAddress: location,
        addressLocality: "Djibouti-Ville",
        addressCountry: "DJ",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Groupe Scolaire Les Petits Futés",
      url: "https://petitsfutes.org",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}