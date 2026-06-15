const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rifat Hossain",
  "givenName": "Rifat",
  "familyName": "Hossain",
  "alternateName": ["rifatbroh", "rifat bd", "rifatbhai", "rifat bhai", "Rifat Hossain rifatbroh"],
  "jobTitle": "Software Engineer",
  "description": "4x Hackathon Winner | Backend & Distributed Systems Engineer from Cumilla, Bangladesh",
  "url": "https://rifat.bro.bd",
  "sameAs": [
    "https://github.com/rifatbond007",
    "https://www.linkedin.com/in/rifat-hossain-6b21741b3/",
    "https://www.facebook.com/mohammad.rifat.800703",
    "https://www.instagram.com/rifatbroh_39/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cumilla",
    "addressCountry": "Bangladesh"
  },
  "knowsAbout": [
    "Software Engineering",
    "Backend Development",
    "Distributed Systems",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "System Design"
  ],
  "award": [
    "2nd Runners Up — BAIUST Fall Fest X Prompt Engineering",
    "1st Runners Up — BAIUST Fall Fest X Hackathon",
    "CHAMPION — CSE Fest Hackathon",
    "2nd Runners Up — Devfest AI Hackathon"
  ],
};

export function SEO() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
