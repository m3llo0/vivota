'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {

    const navbarItems = [
        {
            label: "About Us",
            dropdown: [
                { label: "The Vivota Oath", href: "/vivota-oath" },
                { label: "Our Content Experts", href: "#" },
                { label: "The Vivota System", href: "/vivota-system" },
                { label: "Student Testimonials", href: "#" },
            ],
        },
        {
            label: "Subjects",
            dropdown: [
                { label: "JC Physics", href: "#" },
                { label: "JC Chemistry", href: "#" },
                { label: "JC Biology", href: "#" },
                { label: "JC Math", href: "#" },
                { label: "JC General Paper", href: "#" },
            ],
        },
        {
            label: "Plans and Pricing",
            href: "/plans-and-pricing",
        },
        {
            label: "Class Schedule",
            dropdown: [
                { label: "JC Physics", href: "#" },
                { label: "JC Chemistry", href: "#" },
                { label: "JC Biology", href: "#" },
                { label: "JC Math", href: "#" },
                { label: "JC General Paper", href: "#" },
            ],
        },
    ];

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

            <Link href="/" className="justify-start">
                <img src="/logo.png" alt="Logo" className="w-24 h-auto ml-32 cursor-pointer" />
            </Link>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-12">
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
                                        className="relative text-sm md:text-base font-semibold text-black/70 hover:text-black"
                                    >
                                        {item.label}
                                    </button>
                                    <div
                                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-48 font-semibold 
                                            text-black/70 bg-white rounded-lg shadow-lg divide-y divide-gray-200 p-2 
                                            transition-all duration-200 ease-out origin-top 
                                            ${openDropdown === item.label ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
                                    >
                                        {item.dropdown.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="block px-3 py-2 hover:text-black"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>

                                </>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className="text-sm md:text-base font-semibold text-black/70 hover:text-black"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
