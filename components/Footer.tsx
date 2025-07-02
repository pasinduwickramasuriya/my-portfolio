"use client";

interface SocialLink {
    name: string;
    url: string;
    iconClass: string;
    displayName?: string;
}

interface QuickLink {
    label: string;
    href: string;
}

interface ContactInfo {
    email: string;
    location: string;
}

interface FooterProps {
    brandTitle?: string;
    brandDescription?: string;
    socialLinks?: SocialLink[];
    quickLinks?: QuickLink[];
    contactInfo?: ContactInfo;
    privacyPolicyLink?: string;
    termsOfServiceLink?: string;
}

const defaultSocialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/pasinduwickramasuriya",
        iconClass: "fab fa-github",
        displayName: "GitHub",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pasindu-sadhanjana/",
        iconClass: "fab fa-linkedin",
        displayName: "LinkedIn",
    },

];

const defaultQuickLinks: QuickLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

const defaultContactInfo: ContactInfo = {
    email: "pasindusadanjana17@gmail.com",
    location: "Sri Lanka",
};

function Footer({
    brandTitle = "pasindu.dev",
    brandDescription = "Full-Stack Developer crafting seamless web and desktop applications.",
    socialLinks = defaultSocialLinks,
    quickLinks = defaultQuickLinks,
    contactInfo = defaultContactInfo,
    privacyPolicyLink = "#",
    termsOfServiceLink = "#",
}: FooterProps) {
    return (
        <footer
            role="contentinfo"
            className="relative  py-16 sm:py-20 border-t border-[#1a1a2e]"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <h2
                            className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                            tabIndex={0}
                        >
                            {brandTitle}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 hover:text-gray-300 transition-colors duration-300">
                            {brandDescription}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social: SocialLink, index: number) => (
                                <a
                                    key={social.name + index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-2 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10"
                                    aria-label={`Visit ${social.name} profile`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                                    <i
                                        className={`${social.iconClass} relative text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110`}
                                    ></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg sm:text-xl font-bold text-white">Quick Links</h2>
                        <nav aria-label="Quick Links">
                            <ul className="space-y-2">
                                {quickLinks.map((link: QuickLink, index: number) => (
                                    <li key={link.label + index}>
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg sm:text-xl font-bold text-white">Contact</h2>
                        <div className="flex flex-col gap-4">
                            <div
                                className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                                tabIndex={0}
                            >
                                <i
                                    className="fas fa-envelope text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-sm sm:text-base text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div
                                className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                                tabIndex={0}
                            >
                                <i
                                    className="fas fa-location-dot text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                                    aria-hidden="true"
                                ></i>
                                <span className="text-sm sm:text-base text-gray-400">{contactInfo.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 sm:mt-12">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="group p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <i className="fas fa-arrow-up text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"></i>
                    </button>
                </div>

                <div className="mt-12 sm:mt-20 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm sm:text-base text-gray-400">
                            © {new Date().getFullYear()} {brandTitle.replace(/<|\/|>/g, "")}.
                            All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={privacyPolicyLink}
                                className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href={termsOfServiceLink}
                                className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;