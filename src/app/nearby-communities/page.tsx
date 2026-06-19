'use client'

import Image from "next/image"
import Link from "next/link"
import CelestialDivider from "@/components/CelestialDivider"
import { LightboxImage } from "@/components/Lightbox"

export default function NearbyCommunities() {
    return (
        <main>
            {/* Hero */}
            <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
                <div className="flex gap-3 items-center mb-6">
                    <span className="text-xs tracking-[0.15em] uppercase text-gold border border-[rgba(200,180,120,0.3)] rounded-full px-3 py-1">UX Design</span>
                    <span className="text-[rgba(200,180,120,0.3)]">·</span>
                    <span className="text-xs tracking-[0.15em] uppercase text-gold border border-[rgba(200,180,120,0.3)] rounded-full px-3 py-1">Frontend</span>
                    <span className="text-cream-muted text-xs">Apartments247 · 2026</span>
                </div>
                <h1 className="font-serif text-[clamp(40px,7vw,80px)] font-light text-cream leading-tight mb-6">
                    Nearby Communities<br />
                    <em className="text-gold">UX Redesign</em>
                </h1>
                <p className="text-base text-cream-muted leading-relaxed max-w-2xl font-light mb-12">
                    Redesigning the page that helps apartment seekers discover sister properties — improving scannability, mobile experience, and map interactions across a platform serving 14,000+ property sites.
                </p>
                <div className="flex gap-12 border-t border-[rgba(200,180,120,0.08)] pt-8">
                    <div>
                        <div className="font-serif text-3xl text-gold font-light">14k+</div>
                        <div className="text-xs tracking-[0.1em] uppercase text-cream-muted mt-1">Sites Affected</div>
                    </div>
                    <div>
                        <div className="font-serif text-3xl text-gold font-light">Design + Build</div>
                        <div className="text-xs tracking-[0.1em] uppercase text-cream-muted mt-1">My Role</div>
                    </div>
                </div>
            </section>

            {/* Header Image */}
            <div className="w-full max-w-5xl mx-auto px-6 md:px-16 mb-8">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[rgba(200,180,120,0.08)]">
                    <LightboxImage src="/images/header-img.png" alt="Redesigned Nearby Communities page" className="w-full h-full" />
                </div>
            </div>

            <CelestialDivider />

            {/* Overview */}
            <section className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60 mb-4">Overview</p>
                        <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream mb-6">
                            The <em className="text-gold">Problem</em>
                        </h2>
                        <p className="text-base text-cream-muted leading-relaxed font-light mb-4">
                            The existing Nearby Communities page lacked clear structure, making it difficult for prospective renters to quickly browse and compare sister properties. Key information wasn't prioritized, the map had broken interactions, and the mobile experience was essentially unusable.
                        </p>
                        <p className="text-base text-cream-muted leading-relaxed font-light">
                            I was brought in to redesign the page within the existing platform and component system — leading both the Figma design work and the frontend implementation.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="border border-[rgba(200,180,120,0.08)] rounded-lg p-6 bg-surface">
                            <p className="text-xs tracking-[0.15em] uppercase text-gold opacity-60 mb-3">My Role</p>
                            <p className="text-base text-cream font-light mb-2">UX Designer + Frontend Developer</p>
                            <p className="text-sm text-cream-muted font-light leading-relaxed mb-4">
                                Led end-to-end — from identifying UX problems and designing solutions in Figma, through to implementing the production-ready frontend.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Figma", "UX Design", "Frontend Dev", "Component Systems"].map(pill => (
                                    <span key={pill} className="text-xs text-gold border border-[rgba(200,180,120,0.2)] rounded-full px-3 py-1">{pill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="border border-[rgba(200,180,120,0.08)] rounded-lg p-6 bg-surface">
                            <p className="text-xs tracking-[0.15em] uppercase text-gold opacity-60 mb-3">Constraints</p>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "Built within an existing platform and component system",
                                    "Limited flexibility in layout and functionality",
                                    "Worked within pre-existing design patterns",
                                    "Required to support dynamic content and multiple listings",
                                    "Required to support multiple themes consistently"
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

            {/* Design Decisions */}
            <section className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60 mb-4">Design Process</p>
                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream mb-4">
                    The <em className="text-gold">Decisions</em>
                </h2>
                <p className="text-base text-cream-muted font-light leading-relaxed max-w-2xl mb-16">
                    Working within the constraints of an established component system meant every design decision had to be deliberate. I focused on four key areas where the existing experience was creating the most friction for users.
                </p>

                {[
                    {
                        title: "Card",
                        em: "Scannability",
                        before: { src: "/images/old-card.png", alt: "Original community card with no visual hierarchy" },
                        after: { src: "/images/card-w-website.png", alt: "Redesigned community card with clear image and CTA" },
                        insight: "The original card listed information in a vertical stack with no visual hierarchy. I restructured the layout to lead with the property image and community name, grouped contact info with icons for quick recognition, and added a direct \"View Website\" CTA that was previously missing entirely."
                    },
                    {
                        title: "Map",
                        em: "Markers & Popups",
                        before: { src: "/images/old-icons.png", alt: "Original map with decorative star-shaped markers" },
                        after: { src: "/images/pop-up-w-website.png", alt: "Redesigned map popup with address and CTA" },
                        insight: "The original map used decorative star icons that were visually noisy and didn't follow standard mapping conventions. I replaced them with clean numbered markers and rebuilt the popup to include a dismiss button and \"View Website\" action."
                    },
                    {
                        title: "Popup",
                        em: "Interactions",
                        before: { src: "/images/no-way-to-close-out.png", alt: "Old map popup with no close button" },
                        after: { src: "/images/pop-up.png", alt: "New popup with close button and CTA" },
                        insight: "Once a map popup opened, users had no way to dismiss it. The redesigned popup includes an explicit close button and a styled \"View Website\" CTA, making the interaction feel intentional rather than broken."
                    },
                    {
                        title: "Mobile",
                        em: "Experience",
                        before: { src: "/images/no-separation-on-mobile.png", alt: "Original mobile layout with map and listings stacked" },
                        after: { src: "/images/mobile-list-view.png", alt: "Redesigned mobile list view with tab toggle" },
                        insight: "On mobile, the original layout stacked the map directly above the community cards with no visual separation. I introduced a tab-based Map / List toggle, allowing users to switch between views without losing context."
                    },
                    {
                        title: "Desktop",
                        em: "Layout",
                        before: { src: "/images/old-sisters-page.png", alt: "Original desktop layout with full-width map above cards" },
                        after: { src: "/images/new-sisters-page.png", alt: "Redesigned desktop layout showing map and list side by side" },
                        insight: "The original desktop layout placed the map full-width above a grid of cards, forcing users to scroll up and down to cross-reference the two. The redesigned layout shows map and list side by side, so clicking a marker immediately highlights the corresponding card."
                    }
                ].map(block => (
                    <div key={block.title} className="mb-20">
                        <div className="flex items-baseline gap-4 mb-8">
                            <h3 className="font-serif text-2xl md:text-3xl font-light text-cream">
                                {block.title} <em className="text-gold">{block.em}</em>
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <span className="text-xs tracking-[0.15em] uppercase text-cream-muted block mb-3">Before</span>
                                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[rgba(200,180,120,0.08)]">
                                    <LightboxImage src={block.before.src} alt={block.before.alt} className="w-full h-full" />
                                </div>
                            </div>
                            <div>
                                <span className="text-xs tracking-[0.15em] uppercase text-gold block mb-3">After</span>
                                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[rgba(200,180,120,0.08)]">
                                    <LightboxImage src={block.after.src} alt={block.after.alt} className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-cream-muted font-light leading-relaxed max-w-4xl">{block.insight}</p>
                    </div>
                ))}
            </section>

            <CelestialDivider />

            {/* Outcome */}
            <section className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60 mb-4">Final Outcome</p>
                <div className="border border-[rgba(200,180,120,0.08)] rounded-lg p-8 md:p-12 bg-surface">
                    <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream mb-6">
                        Clearer, faster, <em className="text-gold">more useful</em>
                    </h2>
                    <p className="text-base text-cream-muted font-light leading-relaxed mb-4 max-w-2xl">
                        The redesign introduced clearer information hierarchy, more intuitive map interactions, and a dramatically improved mobile experience — making it easier for prospective renters to browse, compare, and take action on nearby properties.
                    </p>
                    <p className="text-base text-cream-muted font-light leading-relaxed mb-8 max-w-2xl">
                        Every change was made within the constraints of an existing component system and designed to work across multiple property themes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Improved scannability", "Mobile map/list toggle", "Actionable map popups", "Consistent cross-theme", "Reduced friction"].map(pill => (
                            <span key={pill} className="text-xs text-gold border border-[rgba(200,180,120,0.2)] rounded-full px-4 py-2">{pill}</span>
                        ))}
                    </div>
                </div>
            </section>

            <CelestialDivider />

            {/* Project Nav */}
            <div className="max-w-5xl mx-auto px-6 md:px-16 py-12 flex justify-between items-center">
                <Link href="/" className="text-sm text-cream-muted hover:text-gold transition duration-200">← All Projects</Link>
                <Link href="/design-system" className="text-sm text-cream-muted hover:text-gold transition duration-200">Design System →</Link>
            </div>
        </main>
    )
}