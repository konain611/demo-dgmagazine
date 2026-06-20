"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SubItem = {
  label: string;
  badge?: string; // e.g. "LIVE"
};

type NavItem = {
  label: string;
  dropdown: boolean;
  icon?: string;
  iconColor?: string;
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
      items: [
        { label: "All News" },
        { label: "Breaking News", badge: "LIVE" },
        { label: "Cyber Attacks" },
        { label: "Data Breach" },
        { label: "Malware & Threats" },
        { label: "Vulnerabilities" },
        { label: "Policy & Law" },
        { label: "Industry News" },
        { label: "Analysis & Opinion" },
        { label: "Press Releases" },
        { label: "Events Coverage" },
      ],
      bottomItems: [{ label: "News Archive" }, { label: "Newsletter" }],
    },
    {
      label: "Research",
      dropdown: true,
      icon: "ri-line-chart-line",
      iconColor: "#2563EB",
      items: [
        { label: "Research Reports" },
        { label: "Threat Analysis" },
        { label: "Whitepapers" },
        { label: "Data Insights" },
        { label: "Case Studies" },
        { label: "Surveys & Polls" },
        { label: "Global Statistics" },
        { label: "Infographics" },
        { label: "Research Archive" },
        { label: "Authors" },
      ],
      bottomItems: [
        { label: "Premium Research" },
        { label: "Research Subscription" },
      ],
    },
    {
      label: "Threat Intelligence",
      dropdown: true,
      icon: "ri-shield-keyhole-line",
      iconColor: "#9333EA",
      items: [
        { label: "Threat Dashboard" },
        { label: "Threat Feed", badge: "LIVE" },
        { label: "IOC Directory" },
        { label: "Malware Intelligence" },
        { label: "APT Groups" },
        { label: "Vulnerability Intelligence" },
        { label: "Ransomware Intelligence" },
        { label: "Dark Web Monitoring" },
        { label: "Threat Actors" },
        { label: "Incident Reports" },
        { label: "Attack Campaigns" },
      ],
      bottomItems: [{ label: "Threat Archive" }, { label: "Submit a Threat" }],
    },
    {
      label: "Global Cyber Threat Map",
      dropdown: true,
      icon: "ri-global-line",
      iconColor: "#16A34A",
      items: [
        { label: "Live Threat Map", badge: "LIVE" },
        { label: "Threat Heatmap" },
        { label: "Country Risk View" },
        { label: "Regional Overview" },
        { label: "Attack Vectors" },
        { label: "Industry Targeting" },
        { label: "Threat Timeline" },
        { label: "Map Analytics" },
        { label: "Reports by Region" },
      ],
      bottomItems: [{ label: "Map Guide" }, { label: "Methodology" }],
    },
    {
      label: "Advisory Room",
      dropdown: true,
      icon: "ri-user-voice-line",
      iconColor: "#EA580C",
      items: [
        { label: "Security Advisories" },
        { label: "Vendor Advisories" },
        { label: "Government Advisories" },
        { label: "Industry Advisories" },
        { label: "Threat Alerts", badge: "LIVE" },
        { label: "Best Practices" },
        { label: "Compliance Center" },
        { label: "Frameworks" },
        { label: "Risk Assessments" },
        { label: "Advisory Archive" },
      ],
      bottomItems: [
        { label: "Submit Advisory" },
        { label: "Request Advisory" },
      ],
    },
    {
      label: "Leadership Insights",
      dropdown: true,
      icon: "ri-user-star-line",
      iconColor: "#60A5FA",
      items: [
        { label: "Expert Opinions" },
        { label: "CISO Insights" },
        { label: "Executive Briefings" },
        { label: "Boardroom Perspectives" },
        { label: "Interviews" },
        { label: "Guest Columns" },
        { label: "Leadership Strategies" },
        { label: "Future of Cybersecurity" },
        { label: "Events & Webinars" },
        { label: "Leadership Archive" },
      ],
      bottomItems: [
        { label: "Contribute Article" },
        { label: "Speaker Network" },
      ],
    },
    {
      label: "Cyber Products",
      dropdown: true,
      icon: "ri-shopping-cart-2-line",
      iconColor: "#A855F7",
      items: [
        { label: "All Products" },
        { label: "Security Solutions" },
        { label: "Threat Intelligence Solutions" },
        { label: "Network Security" },
        { label: "Cloud Security" },
        { label: "Application Security" },
        { label: "Identity Security" },
        { label: "Services" },
        { label: "Product Reviews" },
        { label: "Marketplace" },
      ],
      bottomItems: [
        { label: "Compare Solutions" },
        { label: "Submit a Product" },
      ],
    },
    {
      label: "Media Center",
      dropdown: true,
      icon: "ri-tv-2-line",
      iconColor: "#22C55E",
      items: [
        { label: "Videos" },
        { label: "Podcasts" },
        { label: "Webinars" },
        { label: "Media Kits" },
        { label: "Brand Assets" },
        { label: "Photo Gallery" },
        { label: "Infographics" },
        { label: "Reports Library" },
        { label: "Press Coverage" },
        { label: "Events Gallery" },
      ],
      bottomItems: [
        { label: "Subscribe Media" },
        { label: "Media Inquiries" },
      ],
    },
  ];

  const createRoute = (label: string) =>
    label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

  const createSubRoute = (parentLabel: string, label: string) =>
    `${createRoute(parentLabel)}/${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <nav className="w-full bg-[#001c38]">
      <div className="mx-auto flex h-15 max-w-[90%] items-center justify-between px-4">
        <div className="flex flex-nowrap items-center divide-x divide-white/20">
          {navItems.map((item, index) => {
            const href = createRoute(item.label);
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
                            href={createSubRoute(item.label, sub.label)}
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
                                href={createSubRoute(item.label, sub.label)}
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:text-[#FF9102]"
        >
          <i className="ri-search-line text-lg" />
        </button>
      </div>
    </nav>
  );
}