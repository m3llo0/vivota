'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface DropdownItem {
    label: string;
    href: string;
}

interface NavbarItem {
    label: string;
    href?: string;
    dropdown?: DropdownItem[];
}

interface Props {
    navbarItems: NavbarItem[];
}

export default function DesktopNavbar({ navbarItems }: Props) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const refs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (openDropdown) {
                const ref = refs.current[openDropdown];
                if (ref && !ref.contains(e.target as Node)) {
                    setOpenDropdown(null);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDropdown]);

    return (
        <div className="h-20 bg-white fixed top-0 left-0 w-full flex items-center z-50 shadow-md px-8">
            {/* Logo on the left */}
            <Link href="/" className="flex-shrink-0 lg:ml-4 xl:ml-32 2xl:ml-48">
                <img src="/logo.png" alt="Logo" className="w-24 h-auto cursor-pointer hover:brightness-110" />
            </Link>

            {/* Nav items always centered */}
            <div className="absolute left-1/2 top-0 h-full flex items-center gap-12 transform -translate-x-1/2 whitespace-nowrap">
                {navbarItems.map((item) => {
                    const hasDropdown = item.dropdown && item.dropdown.length > 0;
                    return (
                        <div
                            key={item.label}
                            className="relative"
                            ref={(el) => void (refs.current[item.label] = el)}
                        >
                            {hasDropdown ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                                        }
                                        className="text-base xl:text-lg font-semibold text-black/70 hover:text-black"
                                    >
                                        {item.label}
                                    </button>
                                    <div
                                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-48 font-semibold 
                                            text-black/70 bg-white rounded-lg shadow-lg divide-y divide-gray-200 p-2 
                                            transition-all duration-200 ease-out origin-top 
                                            ${openDropdown === item.label ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
                                    >
                                        {item.dropdown!.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="block px-3 py-2 hover:text-black"
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                                                }
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className="text-base xl:text-lg font-semibold text-black/70 hover:text-black"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Social media icons on the right */}
            <div className="ml-auto flex items-center gap-4 flex-shrink-0 lg:mr-4 xl:mr-32 2xl:mr-48">
                {/* Social media icons */}
                <a href="https://wa.me/6580357523" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Whatsapp">
                    <img src="/whatsappDark.svg" className="w-4 sm:w-6" />
                </a>
                <a href="https://www.instagram.com/vivota.education" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                    <img src="/instagramDark.svg" className="w-4 sm:w-6" />
                </a>
                <a href="https://www.tiktok.com/@vivota.education" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                    <img src="/tiktokDark.svg" className="w-4 sm:w-6" />
                </a>
            </div>

        </div>
    );
}
