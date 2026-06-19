"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", dropdown: false, items: [] },
    { label: "Newsroom", dropdown: true, items: [] },
    { label: "Research", dropdown: true, items: [] },
    { label: "Threat Intelligence", dropdown: true, items: [] },
    { label: "Global Cyber Threat Map", dropdown: false, items: [] },
    { label: "Advisory Room", dropdown: true, items: [] },
    { label: "Leadership Insights", dropdown: true, items: [] },
    { label: "Cyber Products", dropdown: true, items: [] },
    { label: "Media Center", dropdown: true, items: [] },
  ];

  const createRoute = (label: string) =>
    label === "Home"
      ? "/"
      : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <nav className="w-full bg-[#001c38]">
      <div className="mx-auto flex h-15 max-w-[90%] items-center justify-between px-6">
        <div className="flex items-center divide-x divide-white/20">
          {navItems.map((item) => {
            const href = createRoute(item.label);
            const isActive = pathname === href;

            return (
              <Link
                key={item.label}
                href={href}
                className={`group flex items-center gap-1 px-4 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#FF9102]"
                    : "text-white hover:text-[#FF9102]"
                }`}
              >
                <span>{item.label}</span>

                {item.dropdown && (
                  <i className="ri-arrow-down-s-line text-base transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:text-[#FF9102]"
        >
          <i className="ri-search-line text-lg" />
        </button>
      </div>
    </nav>
  );
}