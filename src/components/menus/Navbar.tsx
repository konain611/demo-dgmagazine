"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SubItem = {
  label: string;
  badge?: string; // e.g. "LIVE"
  slug?: string; // custom route path
};

type NavItem = {
  label: string;
  dropdown: boolean;
  icon?: string;
  iconColor?: string;
  slug?: string; // custom route path
  items?: SubItem[];
  bottomItems?: SubItem[];
};

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", dropdown: false },
    {
      label: "Newsroom",
      dropdown: true,
      icon: "ri-newspaper-line",
      iconColor: "#DC2626",
      slug: "/newsroom",
      items: [
        { label: "All News", slug: "/newsroom/all-news" },
        { label: "Breaking News", badge: "LIVE", slug: "/newsroom/breaking-news" },
        { label: "Developing Stories", slug: "/newsroom/developing-stories" },
        { label: "Cyber Attacks", slug: "/newsroom/cyber-attacks" },
        { label: "Data Breach", slug: "/newsroom/data-breach" },
        { label: "Malware & Threats", slug: "/newsroom/malware-threats" },
        { label: "Vulnerabilities", slug: "/newsroom/vulnerabilities" },
        { label: "Policy & Law", slug: "/newsroom/policy-law" },
        { label: "Industry News", slug: "/newsroom/industry-news" },
        { label: "Analysis & Opinion", slug: "/newsroom/analysis-opinion" },
        { label: "Press Releases", slug: "/newsroom/press-releases" },
        { label: "Events Coverage", slug: "/newsroom/events-coverage" },
      ],
      bottomItems: [
        { label: "News Archive", slug: "/newsroom/news-archive" },
        { label: "Newsletter", slug: "/newsroom/newsletter" },
        { label: "News by Region", slug: "/newsroom/news-by-region" }
      ],
    },
    {
      label: "Research",
      dropdown: true,
      icon: "ri-line-chart-line",
      iconColor: "#2563EB",
      slug: "/research",
      items: [
        { label: "Research Reports", slug: "/research/research-reports" },
        { label: "Threat Analysis", slug: "/research/threat-analysis" },
        { label: "Whitepapers", slug: "/research/whitepapers" },
        { label: "Data Insights", slug: "/research/data-insights" },
        { label: "Case Studies", slug: "/research/case-studies" },
        { label: "Surveys & Polls", slug: "/research/surveys-polls" },
        { label: "Global Statistics", slug: "/research/global-statistics" },
        { label: "Infographics", slug: "/research/infographics" },
        { label: "Research Archive", slug: "/research/research-archive" },
        { label: "Authors", slug: "/research/authors" },
      ],
      bottomItems: [
        { label: "Premium Research", slug: "/research/premium-research" },
        { label: "Research Subscription", slug: "/research/research-subscription" },
      ],
    },
    {
      label: "Threat Intelligence",
      dropdown: true,
      icon: "ri-shield-keyhole-line",
      iconColor: "#9333EA",
      slug: "/threat-intelligence",
      items: [
        { label: "Threat Dashboard", slug: "/threat-intelligence/threat-dashboard" },
        { label: "Threat Feed", badge: "LIVE", slug: "/threat-intelligence/threat-feed" },
        { label: "IOC Directory", slug: "/threat-intelligence/ioc-directory" },
        { label: "Malware Intelligence", slug: "/threat-intelligence/malware-intelligence" },
        { label: "APT Groups", slug: "/threat-intelligence/apt-groups" },
        { label: "Vulnerability Intelligence", slug: "/threat-intelligence/vulnerability-intelligence" },
        { label: "Ransomware Intelligence", slug: "/threat-intelligence/ransomware-intelligence" },
        { label: "Dark Web Monitoring", slug: "/threat-intelligence/dark-web-monitoring" },
        { label: "Threat Actors", slug: "/threat-intelligence/threat-actors" },
        { label: "Incident Reports", slug: "/threat-intelligence/incident-reports" },
        { label: "Attack Campaigns", slug: "/threat-intelligence/attack-campaigns" },
      ],
      bottomItems: [
        { label: "Threat Archive", slug: "/threat-intelligence/threat-archive" },
        { label: "Submit a Threat", slug: "/threat-intelligence/submit-threat" }
      ],
    },
    {
      label: "Global Cyber Threat Map",
      dropdown: true,
      icon: "ri-global-line",
      iconColor: "#16A34A",
      slug: "/global-cyber-threat-map",
      items: [
        { label: "Live Threat Map", badge: "LIVE", slug: "/global-cyber-threat-map/live-threat-map" },
        { label: "Threat Heatmap", slug: "/global-cyber-threat-map/threat-heatmap" },
        { label: "Country Risk View", slug: "/global-cyber-threat-map/country-risk-view" },
        { label: "Regional Overview", slug: "/global-cyber-threat-map/regional-overview" },
        { label: "Attack Vectors", slug: "/global-cyber-threat-map/attack-vectors" },
        { label: "Industry Targeting", slug: "/global-cyber-threat-map/industry-targeting" },
        { label: "Threat Timeline", slug: "/global-cyber-threat-map/threat-timeline" },
        { label: "Map Analytics", slug: "/global-cyber-threat-map/map-analytics" },
        { label: "Reports by Region", slug: "/global-cyber-threat-map/reports-by-region" },
      ],
      bottomItems: [
        { label: "Map Guide", slug: "/global-cyber-threat-map/map-guide" },
        { label: "Methodology", slug: "/global-cyber-threat-map/methodology" }
      ],
    },
    {
      label: "Advisory Room",
      dropdown: true,
      icon: "ri-user-voice-line",
      iconColor: "#EA580C",
      slug: "/advisory-room",
      items: [
        { label: "Security Advisories", slug: "/advisory-room/security-advisories" },
        { label: "Vendor Advisories", slug: "/advisory-room/vendor-advisories" },
        { label: "Government Advisories", slug: "/advisory-room/government-advisories" },
        { label: "Industry Advisories", slug: "/advisory-room/industry-advisories" },
        { label: "Threat Alerts", badge: "LIVE", slug: "/advisory-room/threat-alerts" },
        { label: "Best Practices", slug: "/advisory-room/best-practices" },
        { label: "Compliance Center", slug: "/advisory-room/compliance-center" },
        { label: "Frameworks", slug: "/advisory-room/frameworks" },
        { label: "Risk Assessments", slug: "/advisory-room/risk-assessments" },
        { label: "Advisory Archive", slug: "/advisory-room/advisory-archive" },
      ],
      bottomItems: [
        { label: "Submit Advisory", slug: "/advisory-room/submit-advisory" },
        { label: "Request Advisory", slug: "/advisory-room/request-advisory" },
      ],
    },
    {
      label: "Leadership Insights",
      dropdown: true,
      icon: "ri-user-star-line",
      iconColor: "#60A5FA",
      slug: "/leadership-insights",
      items: [
        { label: "Expert Opinions", slug: "/leadership-insights/expert-opinions" },
        { label: "CISO Insights", slug: "/leadership-insights/ciso-insights" },
        { label: "Executive Briefings", slug: "/leadership-insights/executive-briefings" },
        { label: "Boardroom Perspectives", slug: "/leadership-insights/boardroom-perspectives" },
        { label: "Interviews", slug: "/leadership-insights/interviews" },
        { label: "Guest Columns", slug: "/leadership-insights/guest-columns" },
        { label: "Leadership Strategies", slug: "/leadership-insights/leadership-strategies" },
        { label: "Future of Cybersecurity", slug: "/leadership-insights/future-cybersecurity" },
        { label: "Events & Webinars", slug: "/leadership-insights/events-webinars" },
        { label: "Leadership Archive", slug: "/leadership-insights/leadership-archive" },
      ],
      bottomItems: [
        { label: "Contribute Article", slug: "/leadership-insights/contribute-article" },
        { label: "Speaker Network", slug: "/leadership-insights/speaker-network" },
      ],
    },
    {
      label: "Cyber Products",
      dropdown: true,
      icon: "ri-shopping-cart-2-line",
      iconColor: "#A855F7",
      slug: "/cyber-products",
      items: [
        { label: "All Products", slug: "/cyber-products/all-products" },
        { label: "Security Solutions", slug: "/cyber-products/security-solutions" },
        { label: "Threat Intelligence Solutions", slug: "/cyber-products/threat-intelligence-solutions" },
        { label: "Network Security", slug: "/cyber-products/network-security" },
        { label: "Cloud Security", slug: "/cyber-products/cloud-security" },
        { label: "Application Security", slug: "/cyber-products/application-security" },
        { label: "Identity Security", slug: "/cyber-products/identity-security" },
        { label: "Services", slug: "/cyber-products/services" },
        { label: "Product Reviews", slug: "/cyber-products/product-reviews" },
        { label: "Marketplace", slug: "/cyber-products/marketplace" },
      ],
      bottomItems: [
        { label: "Compare Solutions", slug: "/cyber-products/compare-solutions" },
        { label: "Submit a Product", slug: "/cyber-products/submit-product" },
      ],
    },
    {
      label: "Media Center",
      dropdown: true,
      icon: "ri-tv-2-line",
      iconColor: "#22C55E",
      slug: "/media-center",
      items: [
        { label: "Videos", slug: "/media-center/videos" },
        { label: "Podcasts", slug: "/media-center/podcasts" },
        { label: "Webinars", slug: "/media-center/webinars" },
        { label: "Media Kits", slug: "/media-center/media-kits" },
        { label: "Brand Assets", slug: "/media-center/brand-assets" },
        { label: "Photo Gallery", slug: "/media-center/photo-gallery" },
        { label: "Infographics", slug: "/media-center/infographics" },
        { label: "Reports Library", slug: "/media-center/reports-library" },
        { label: "Press Coverage", slug: "/media-center/press-coverage" },
        { label: "Events Gallery", slug: "/media-center/events-gallery" },
      ],
      bottomItems: [
        { label: "Subscribe Media", slug: "/media-center/subscribe-media" },
        { label: "Media Inquiries", slug: "/media-center/media-inquiries" },
      ],
    },
  ];

  const createRoute = (label: string, slug?: string) =>
    slug ? slug : label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

  const createSubRoute = (parentLabel: string, label: string, parentSlug?: string, slug?: string) =>
    slug ? slug : `${createRoute(parentLabel, parentSlug)}/${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <nav className="w-full bg-[#001c38]">
      <div className="mx-auto flex h-15 max-w-[90%] items-center justify-between px-4">
        <div className="flex flex-nowrap items-center divide-x divide-white/20">
          {navItems.map((item, index) => {
            const href = createRoute(item.label, item.slug);
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            const isOpen = hoveredIndex === index;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredIndex(item.dropdown ? index : null)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={href}
                  className={`group flex shrink-0 items-center gap-1 whitespace-nowrap uppercase px-2.5 text-[13px] font-medium transition-colors duration-200 ${isActive
                    ? "text-[#FF9102]"
                    : "text-white hover:text-[#FF9102]"
                    }`}
                >
                  <span>{item.label}</span>

                  {item.dropdown && (
                    <i
                      className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {item.dropdown && isOpen && (
                  <div
                    className="absolute left-0 top-full z-50 mt-0 w-max min-w-50 rounded-b-md border p-4 shadow-lg"
                    style={{
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    <div className="mb-3 flex items-center gap-2 text-center">
                      {item.icon && (
                        <i
                          className={`${item.icon} text-2xl`}
                          style={{
                            color: item.iconColor,
                            filter: item.iconColor
                              ? `drop-shadow(0 0 6px ${item.iconColor}aa)`
                              : undefined,
                          }}
                        />
                      )}
                      <span className="text-sm font-bold uppercase tracking-wide text-center">
                        {item.label}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {item.items?.map((sub) => (
                        <li key={sub.label} className="whitespace-nowrap">
                          <Link
                            href={createSubRoute(item.label, sub.label, item.slug, sub.slug)}
                            className="flex items-center gap-2 text-[13px] transition-colors duration-150 hover:text-[#FF9102]"
                          >
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span className="rounded bg-red-600 px-1.5 py-px text-[10px] font-bold text-white">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {item.bottomItems && item.bottomItems.length > 0 && (
                      <>
                        <div className="my-3 border-t" />
                        <ul className="flex flex-col gap-2">
                          {item.bottomItems.map((sub) => (
                            <li key={sub.label} className="whitespace-nowrap">
                              <Link
                                href={createSubRoute(item.label, sub.label, item.slug, sub.slug)}
                                className="text-[13px] transition-colors duration-150 hover:text-[#FF9102]"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          aria-label="Search"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition text-white  hover:text-[#FF9102]"
        >
          <i className="ri-search-line text-lg" />
        </button>
      </div>
    </nav>
  );
}