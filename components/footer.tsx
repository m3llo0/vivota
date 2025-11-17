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
        <footer className="bg-zinc-950 text-base-content text-white">
            {/* Top section: Links */}
            <div className="footer sm:footer-horizontal px-20 py-10">
                {FooterItems.map((item) => (
                    <nav key={item.label}>
                        <h6 className="footer-title">{item.label}</h6>
                        {item.dropdown
                            ? item.dropdown.map((subItem) => (
                                <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="link link-hover"
                                >
                                    {subItem.label}
                                </Link>
                            ))
                            : item.href && (
                                <Link href={item.href} className="link link-hover">
                                    {item.label}
                                </Link>
                            )}
                    </nav>
                ))}
            </div>

            {/* Bottom section: copyright + social icons */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-20 py-10 text-white">
                <div className="text-center sm:text-left text-gray-400 text-sm">
                    <address className="not-italic mb-4">
                        <span className="block sm:inline">505B Bishan St 11,{" "}</span>
                        <span>#01-422</span>
                        <a href="tel:+6512345678" className="link link-hover block">
                            +65 8035 7523
                        </a>
                    </address>
                    <p>&copy; {new Date().getFullYear()} Vivota Pte. Ltd.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="grid grid-flow-col gap-4 mt-4 sm:mt-0">
                    {/*For social media links*/}
                </div>
            </div>
        </footer>
    )
}