'use client'
import { useState, useEffect } from "react";
import DesktopNavbar from "@/components/desktop_navbar";
import MobileNavbar from "@/components/mobile_navbar";

const navbarItems = [
    {
        label: "About Us",
        dropdown: [
            { label: "The Vivota Oath", href: "/vivota-oath" },
            { label: "The Vivota Learning System", href: "/vivota-system" },
            { label: "Our Space", href: "/our-space" },
        ],
    },
    {
        label: "Subjects",
        dropdown: [
            { label: "JC Physics", href: "/physics" },
            { label: "JC Chemistry", href: "/chemistry" },
            { label: "JC Biology", href: "/biology" },
            { label: "JC Math", href: "/math" },
            { label: "JC General Paper", href: "/general-paper" },
        ],
    },
    {
        label: "Plans and Pricing",
        href: "/plans-and-pricing",
    },
    {
        label: "Class Schedule",
        href: "/class-schedule",
    },
    {
        label: "Contact Us",
        href: "/contact-us",
    }
];

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? (
        <MobileNavbar navbarItems={navbarItems} />
    ) : (
        <DesktopNavbar navbarItems={navbarItems} />
    );
}
