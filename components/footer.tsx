import Link from "next/link";

type FooterItem = {
    label: string;
    href?: string;
    dropdown?: { label: string; href: string }[];
};

const FooterItems: FooterItem[] = [
    {
        label: "About Us",
        dropdown: [
            { label: "The Vivota Oath", href: "/vivota-oath" },
            { label: "The Vivota System", href: "/vivota-system" },
            { label: "Our Space", href: "/our-space" },
            { label: "FAQs", href: "/faqs" },
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
        label: "Enrolment",
        dropdown: [
            { label: "Plans and Pricing", href: "/plans-and-pricing" },
            { label: "Class Schedule", href: "/class-schedule" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white">
            {/* Top section: Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-20 py-10">
                {FooterItems.map((item) => (
                    <nav key={item.label}>
                        <h6 className="font-bold text-base uppercase mb-3 opacity-90">
                            {item.label}
                        </h6>
                        <div className="flex flex-col gap-2">
                            {item.dropdown
                                ? item.dropdown.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        className="text-sm opacity-70 hover:opacity-100 hover:underline transition-opacity"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))
                                : item.href && (
                                    <a
                                        href={item.href}
                                        className="text-sm opacity-70 hover:opacity-100 hover:underline transition-opacity"
                                    >
                                        {item.label}
                                    </a>
                                )}
                        </div>
                    </nav>
                ))}
            </div>

            {/* Bottom section: copyright + social icons */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-20 py-10 border-t border-zinc-800">
                <div className="text-center sm:text-left text-gray-400 text-sm">
                    <address className="not-italic mb-4">
                        <span className="block sm:inline">505B Bishan St 11,{" "}</span>
                        <span>#01-422</span>
                        <a
                            href="tel:+6512345678"
                            className="block hover:underline hover:text-white transition-colors"
                        >
                            +65 8035 7523
                        </a>
                    </address>
                    <p>&copy; {new Date().getFullYear()} Vivota Pte. Ltd.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    {/* Social media icons */}
                    <a href="https://wa.me/6580357523" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Whatsapp">
                        <img src="/whatsapp.svg" className="w-4 sm:w-6" />
                    </a>
                    <a href="https://www.instagram.com/vivota.education" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                        <img src="/instagram.svg" className="w-4 sm:w-6" />
                    </a>
                    <a href="https://www.tiktok.com/@vivota.education" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                        <img src="/tiktok.svg" className="w-4 sm:w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}