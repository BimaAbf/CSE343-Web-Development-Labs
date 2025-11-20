export const siteMeta = {
  brand: "Udemy",
  cartLabel: "Cart",
  searchPlaceholder: "Search for anything"
};

export const navLinks = [
  { id: "plans", label: "Plans & Pricing" },
  { id: "categories", label: "Categories" },
  { id: "udemy-business", label: "Udemy Business" },
  { id: "teach", label: "Teach on Udemy" }
];

export const headerActions = [
  { id: "login", label: "Log in", variant: "ghost" },
  { id: "signup", label: "Sign up", variant: "filled" }
];

export const saleBanner = {
  message: "Learn more, spend less — Black Friday Sale from $9.99.",
  subtext: "Sitewide savings on thousands of courses. Ends Nov 28.",
  ctaLabel: "Shop now",
  ctaHref: "#sale"
};

export const heroSlides = [
  {
    id: "skills",
    eyebrow: "Limited time offer",
    title: "Learn essential career and life skills",
    description:
      "Udemy helps you build in-demand skills fast and advance your career in a changing job market.",
    highlights: [
      "1.7M+ learners exploring generative AI",
      "14M+ learners preparing for IT certifications",
      "Fresh courses added every month"
    ],
    ctaLabel: "Browse courses",
    ctaHref: "#courses",
    image: {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Learners browsing Udemy courses on laptops and tablets"
    }
  },
  {
    id: "ai-plan",
    eyebrow: "Personal Plan",
    title: "Reimagine your career in the AI era",
    description:
      "Future-proof your skills with curated learning paths, hands-on practice, and AI coaching from real-world experts.",
    highlights: [
      "Learn AI and more",
      "Prep for a certification",
      "Practice with AI coaching",
      "Advance your career"
    ],
    ctaLabel: "Explore Personal Plan",
    ctaHref: "#personal-plan",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional learning AI concepts on a laptop"
    }
  }
];

export const skillSpotlight = {
  title: "Skills to transform your career and life",
  description:
    "From critical skills to technical topics, find learning paths that help you reach your goals.",
  tags: [
    { id: "ai", label: "Artificial Intelligence (AI)", learners: "1.7M+ learners" },
    { id: "python", label: "Python", learners: "49M+ learners" },
    { id: "excel", label: "Microsoft Excel", learners: "24M+ learners" },
    { id: "agents", label: "AI Agents & Agentic AI", learners: "120K+ learners" },
    { id: "marketing", label: "Digital Marketing", learners: "13M+ learners" },
    { id: "aws", label: "Amazon AWS", learners: "8M+ learners" }
  ],
  ctaLabel: "See all skills",
  ctaHref: "#skills"
};

export const trendingCourses = {
  title: "Trending courses",
  description: "Learners are loving these top-rated picks right now.",
  viewAllLabel: "View all trending",
  viewAllHref: "#trending",
  items: [
    {
      id: "ai-masterclass",
      title: "Generative AI Masterclass: Midjourney, ChatGPT & Beyond",
      author: "Benjamin Wilson",
      rating: 4.7,
      ratingCount: "8,912",
      price: "$17.99",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aws-cert",
      title: "AWS Certified Solutions Architect Associate 2025",
      author: "Stephane Maarek",
      rating: 4.7,
      ratingCount: "695,210",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "excel-2025",
      title: "Microsoft Excel Essentials 2025",
      author: "Kyle Pew",
      rating: 4.8,
      ratingCount: "421,105",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fullstack-accelerator",
      title: "Full Stack Web Developer Career Accelerator",
      author: "Colt Steele",
      rating: 4.8,
      ratingCount: "312,084",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export const trustedCompanies = {
  title: "Trusted by over 17,000 companies and millions of learners around the world",
  subtitle: "Top companies choose Udemy Business to build in-demand career skills.",
  companies: [
    {
      id: "volkswagen",
      name: "Volkswagen",
      logo: "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
    },
    {
      id: "samsung",
      name: "Samsung",
      logo: "https://s.udemycdn.com/partner-logos/v4/samsung-light.svg"
    },
    {
      id: "cisco",
      name: "Cisco",
      logo: "https://s.udemycdn.com/partner-logos/v4/cisco-light.svg"
    },
    {
      id: "netapp",
      name: "NetApp",
      logo: "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
    },
    {
      id: "eventbrite",
      name: "Eventbrite",
      logo: "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
    },
    {
      id: "pg",
      name: "Procter & Gamble",
      logo: "https://s.udemycdn.com/partner-logos/v4/procter_gamble-light.svg"
    },
    {
      id: "hpe",
      name: "Hewlett Packard Enterprise",
      logo: "https://s.udemycdn.com/partner-logos/v4/hewlett_packard_enterprise-light.svg"
    },
    {
      id: "citi",
      name: "Citi",
      logo: "https://s.udemycdn.com/partner-logos/v4/citi-light.svg"
    }
  ]
};
