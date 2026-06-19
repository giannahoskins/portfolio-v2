'use client'

import Link from "next/link"
import CelestialDivider from "@/components/CelestialDivider"
import { LightboxImage } from "@/components/Lightbox"

const blocks = [
    {
        title: "Hero",
        em: "Navigation",
        images: [
            { src: "/images/century-hero.png", alt: "Desktop hero section of The Century Oxford" },
            { src: "/images/mobile-century-hero.png", alt: "Mobile view of The Century Oxford hero" }
        ],
        insight: "The hero required careful attention to spacing, typography, and the stacked navigation structure — matching the original design's elegant, spaced-out aesthetic while ensuring the layout adapted cleanly to mobile. On mobile the desktop nav collapses to a hamburger menu and the hero image fills the viewport edge to edge."
    },
    {
        title: "Content",
        em: "Sections",
        images: [
            { src: "/images/century-hpt.png", alt: "Content sections with alternating backgrounds" },
            { src: "/images/century-amenities.png", alt: "Amenities section with dark background" }
        ],
        insight: "The content sections use alternating light and dark backgrounds to create visual rhythm and separation — a pattern that needed to be implemented consistently across multiple page types. Each section pairs large, spaced typography with property photography."
    },
    {
        title: "Floor Plan",
        em: "Section",
        images: [
            { src: "/images/century-ffp.png", alt: "Floor plan section with carousel layout" }
        ],
        insight: "The floor plan section required implementing a carousel-style swiper within the platform's existing floor plan component. The design called for a split layout pairing an interior lifestyle photo with a floor plan diagram, plus navigation arrows for browsing units."
    },
    {
        title: "Cross-Theme",
        em: "Consistency",
        images: [
            { src: "/images/century-full-page.png", alt: "Full page view showing consistent visual treatment" }
        ],
        insight: "One of the most important aspects of this implementation was ensuring the design held together end-to-end. The platform serves thousands of properties, each with its own theme, so all implementation decisions had to work within shared components without breaking other themes."
    }
]

export default function DesignSystem() {
    return (
        <main>
            <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
                <div className="flex flex-wrap gap-3 items-center mb-6">
                    <span className="text-xs tracking-[0.15em] uppercase text-gold border border-[rgba(200,180,120,0.3)] rounded-full px-3 py-1">Frontend Development</span>
                    <span className="text-[rgba(200,180,120,0.3)]">·</span>
                    <span className="text-xs tracking-[0.15em] uppercase text-gold border border-[rgba(200,180,120,0.3)] rounded-full px-3 py-1">Design Systems</span>
                    <span className="text-cream-muted text-xs">Apartments247 · 2023</span>
                </div>
                <h1 className="font-serif text-[clamp(40px,7vw,80px)] font-light text-cream leading-tight mb-6">
                    Design System<br />
                    <em className="text-gold">Implementation</em>
                </h1>
                <p className="text-base text-cream-muted leading-relaxed max-w-2xl font-light mb-12">
                    Translating predefined designs into production-ready frontend experiences — ensuring visual accuracy, responsiveness, and consistency across multiple pages within a shared component system.
                </p>
                <div className="flex gap-12 border-t border-[rgba(200,180,120,0.08)] pt-8">
                    <div>
                        <div className="font-serif text-3xl text-gold font-light">Multi-page</div>
                        <div className="text-xs tracking-[0.1em] uppercase text-cream-muted mt-1">Scope</div>
                    </div>
                    <div>
                        <div className="font-serif text-3xl text-gold font-light">Frontend</div>
                        <div className="text-xs tracking-[0.1em] uppercase text-cream-muted mt-1">My Role</div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-5xl mx-auto px-6 md:px-16 mb-8">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[rgba(200,180,120,0.08)]">
                    <LightboxImage src="/images/century-full-page.png" alt="Full page view of The Century Oxford" className="w-full h-full" />
                </div>
            </div>

            <CelestialDivider />

            <section className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60 mb-4">Overview</p>
                        <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream mb-6">
                            The <em className="text-gold">Challenge</em>
                        </h2>
                        <p className="text-base text-cream-muted leading-relaxed font-light mb-4">
                            This project involved implementing a fully designed apartment community website — The Century Oxford — within the Apartments247 platform and component system. The designs were provided; my role was to translate them into a pixel-accurate, responsive, production-ready frontend experience.
                        </p>
                        <p className="text-base text-cream-muted leading-relaxed font-light">
                            The challenge was faithfully executing someone else's vision while working within a predefined framework, making implementation decisions where the design did not perfectly map to the platform's capabilities.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="border border-[rgba(200,180,120,0.08)] rounded-lg p-6 bg-surface">
                            <p className="text-xs tracking-[0.15em] uppercase text-gold opacity-60 mb-3">My Role</p>
                            <p className="text-base text-cream font-light mb-2">Frontend Developer</p>
                            <p className="text-sm text-cream-muted font-light leading-relaxed mb-4">
                                Responsible for translating design files into production-ready experiences — ensuring visual accuracy, responsiveness, and consistency within the platform's component system.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["HTML/CSS", "JavaScript", "Responsive Design", "Component Systems"].map(pill => (
                                    <span key={pill} className="text-xs text-gold border border-[rgba(200,180,120,0.2)] rounded-full px-3 py-1">{pill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="border border-[rgba(200,180,120,0.08)] rounded-lg p-6 bg-surface">
                            <p className="text-xs tracking-[0.15em] uppercase text-gold opacity-60 mb-3">Constraints</p>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "Predefined designs — not created by me",
                                    "Existing framework and component system",
                                    "Work spans multiple page types",
                                    "Required to support dynamic content",
                                    "Limited flexibility in layout and styling"
                                ].map(item => (
                                    <li key={item} className="text-sm text-cream-muted font-light flex gap-2">
                                        <span className="text-gold opacity-40 shrink-0">✦</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CelestialDivider />

            <section className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60 mb-4">Implementation</p>
                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream mb-4">
                    The <em className="text-gold">Approach</em>
                </h2>
                <p className="text-base text-cream-muted font-light leading-relaxed max-w-2xl mb-16">
                    Implementing predefined designs faithfully requires a different skill set than designing from scratch — it demands precision, problem-solving within constraints, and the ability to make smart decisions when the design and platform do not perfectly align.
                </p>

                {blocks.map(block => (
                    <div key={block.title} className="mb-20">
                        <div className="flex items-baseline gap-4 mb-8">
                            <h3 className="font-serif text-2xl md:text-3xl font-light text-cream">
                                {block.title} <em className="text-gold">{block.em}</em>
                            </h3>
                        </div>
                        <div className={`grid gap-6 mb-6 ${block.images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                            {block.images.map(img => (
                                <div key={img.src} className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[rgba(200,180,120,0.08)]">
                                    <LightboxImage src={img.src} alt={img.alt} className="w-full h-full" />
                                </div>
                            ))}
                        </div>
                        <p className="text-base text-cream-muted font-light leading-relaxed max-w-3xl">{block.insight}</p>
                    </div>
                ))}
            </section>

            <CelestialDivider />

            <section className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60 mb-4">Final Outcome</p>
                <div className="border border-[rgba(200,180,120,0.08)] rounded-lg p-8 md:p-12 bg-surface">
                    <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream mb-6">
                        Design to production, <em className="text-gold">faithfully executed</em>
                    </h2>
                    <p className="text-base text-cream-muted font-light leading-relaxed mb-4 max-w-2xl">
                        The Century Oxford site was successfully implemented as a production-ready experience that closely matches the provided designs while working within the constraints of the Apartments247 platform.
                    </p>
                    <p className="text-base text-cream-muted font-light leading-relaxed mb-8 max-w-2xl">
                        This project demonstrates a different but equally important skillset from design work — the precision, technical judgment, and platform knowledge required to translate a creative vision into a live, functioning product.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Pixel-accurate implementation", "Fully responsive", "Dynamic content support", "Live in production"].map(pill => (
                            <span key={pill} className="text-xs text-gold border border-[rgba(200,180,120,0.2)] rounded-full px-4 py-2">{pill}</span>
                        ))}
                    </div>
                    
                    <a href="https://century-oxford.aptdemo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm tracking-[0.15em] uppercase text-gold border border-[rgba(200,180,120,0.3)] rounded-full px-6 py-3 hover:border-gold transition duration-200 inline-block"
                    >
                        View Live Site &#8594;
                    </a>
                </div>
            </section>

            <CelestialDivider />

            <div className="max-w-5xl mx-auto px-6 md:px-16 py-12 flex justify-between items-center">
                <Link href="/" className="text-sm text-cream-muted hover:text-gold transition duration-200">← All Projects</Link>
                <Link href="/nearby-communities" className="text-sm text-cream-muted hover:text-gold transition duration-200">Nearby Communities UX →</Link>
            </div>
        </main>
    )
}