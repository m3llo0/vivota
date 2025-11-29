'use client'
import { useState, useRef, useEffect } from "react";
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

export default function MobileNavbar({ navbarItems }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={menuRef} className="h-20 bg-white fixed top-0 left-0 w-full flex items-center justify-between z-50 shadow-md px-4">
            <Link
                href="/"
                onClick={() => setIsOpen(false)}
            >
                <img src="/logo.png" alt="Logo" className="w-24 h-auto ml-2 md:ml-4 cursor-pointer" />
            </Link>

            <button
                className="text-yellow-500 lg:hidden mr-2 md:mr-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            <div className={`absolute top-20 left-0 w-full bg-white shadow-md 
            transition-all duration-300 
            overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <ul className="flex flex-col gap-2 p-4 ml-2 md:ml-4 mb-2">
                    {navbarItems.map((item) => {
                        const hasDropdown = item.dropdown && item.dropdown.length > 0;
                        return (
                            <li key={item.label} className="flex flex-col">
                                {hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenDropdown(
                                                    openDropdown === item.label ? null : item.label
                                                )
                                            }
                                            className="text-black/70 font-semibold text-left"
                                        >
                                            {item.label}
                                        </button>
                                        <ul
                                            className={`pl-4 mt-1 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-out
                                                ${openDropdown === item.label ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                            {item.dropdown!.map((link) => (
                                                <li key={link.label}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-black hover:text-gray-700 block"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className="text-black/70 font-semibold block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Social icons at bottom of mobile menu */}
                <div className="flex justify-center gap-6 py-4 border-t border-gray-200">
                    {/* Social media icons */}
                    <a href="https://wa.me/6580357523" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Whatsapp">
                        <img src="/whatsappDark.svg" className="w-5" />
                    </a>
                    <a href="https://www.instagram.com/vivota.education" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                        <img src="/instagramDark.svg" className="w-5" />
                    </a>
                    <a href="https://www.tiktok.com/@vivota.education" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                        <img src="/tiktokDark.svg" className="w-5" />
                    </a>
                </div>

            </div>
        </div>
    );
}
