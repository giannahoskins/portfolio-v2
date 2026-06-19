import Image from "next/image"
import CelestialDivider from "@/components/CelestialDivider"
import Link from "next/link"

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="cosmic background"
                    fill
                    className="object-cover object-center opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                <div className="relative z-10 flex flex-col items-center gap-5 px-8">
                    <p className="text-xs tracking-[0.28em] uppercase text-gold opacity-70">UX Engineer & Frontend Developer</p>
                    <h1 className="font-serif font-light leading-none tracking-tight text-cream text-[clamp(60px,12vw,140px)]">
                        Gianna<br />
                        <em className="text-gold">Hoskins</em>
                    </h1>
                    <p className="text-base text-cream-muted max-w-sm leading-relaxed font-light">
                        Design · Engineering · Experience<br />
                        Bridging design and code to build things that feel as good as they look.
                    </p>
                    <a href="#work" className="mt-2 text-xs tracking-[0.2em] uppercase text-gold border border-[rgba(200,180,120,0.4)] px-8 py-3 rounded-full hover:border-gold transition duration-300">
                        View My Work
                    </a>
                </div>
            </section>

            <CelestialDivider />

            {/* About */}
            <section id="about" className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
                <div className="relative flex items-center justify-center bg-[#1a1030] min-h-[420px] md:min-h-[500px]">
                    <div className="relative w-[200px] h-[260px] md:w-[260px] md:h-[340px] rounded-[100px_100px_0_0] overflow-hidden border border-[rgba(200,180,120,0.2)]">
                        <Image
                            src="/images/ren-faire.jpg"
                            alt="Gianna Hoskins"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-6 px-10 md:px-16 py-16 bg-background">
                    <p className="text-xs tracking-[0.2em] uppercase text-gold opacity-60">About Me</p>
                    <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light text-cream leading-tight">
                        Design meets<br />
                        <em className="text-gold">intention.</em>
                    </h2>
                    <p className="text-base text-cream-muted leading-relaxed font-light max-w-sm">
                        I'm a frontend developer and UX engineer based in Las Vegas. I build interfaces that live at the intersection of design craft and engineering — clean, accessible, and alive with detail.
                    </p>
                    <p className="text-base text-cream-muted leading-relaxed font-light max-w-sm">
                        4+ years shipping production UX across 14,000+ apartment sites. Currently seeking my next role where design and code meet.
                    </p>
                </div>
            </section>

            <CelestialDivider />

            {/* Projects */}
            <section id="work" className="py-16 px-6 md:px-16">
                <h2 className="font-serif text-[clamp(40px,6vw,80px)] font-light text-cream text-center mb-12">
                    Things I've <em className="text-gold">made</em>
                </h2>

                <div className="max-w-4xl mx-auto flex flex-col gap-4">
                    {/* Featured — Steadfast */}
                    <Link href="https://steadfast-habit-tracker.netlify.app" target="_blank" className="relative rounded-lg overflow-hidden bg-[#16152a] min-h-[360px] flex flex-col justify-between p-8 group border border-[rgba(200,180,120,0.07)] hover:border-[rgba(200,180,120,0.2)] transition duration-300">
                        <Image
                            src="/images/steadfast.png"
                            alt="Steadfast Habit Tracker"
                            fill
                            className="object-cover object-top opacity-30 group-hover:opacity-40 transition duration-300"
                        />
                        
                        <div className="absolute top-5 right-5">
                            <span className="text-xs tracking-[0.15em] uppercase text-gold border border-[rgba(200,180,120,0.3)] rounded-full px-3 py-1">✦ Featured</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0d0b1a] via-[#0d0b1a]/80 to-transparent">
                            <h3 className="font-serif text-3xl md:text-4xl text-cream font-light">Steadfast Habit Tracker</h3>
                            <p className="text-xs tracking-[0.1em] uppercase text-gold opacity-60 mt-2">React · TypeScript · Anthropic API · Netlify</p>
                        </div>
                    </Link>

                    {/* Two column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/nearby-communities" className="relative rounded-lg overflow-hidden bg-[#0d1520] min-h-[300px] flex flex-col justify-end p-8 group border border-[rgba(200,180,120,0.07)] hover:border-[rgba(200,180,120,0.2)] transition duration-300">
                            <Image
                                src="/images/header-img.png"
                                alt="Nearby Communities UX"
                                fill
                                className="object-cover object-top opacity-30 group-hover:opacity-40 transition duration-300"
                            />
                            <div className="relative">
                                <h3 className="font-serif text-2xl md:text-3xl text-cream font-light">Nearby Communities UX</h3>
                                <p className="text-xs tracking-[0.1em] uppercase text-gold opacity-60 mt-2">UX Design · Figma · Frontend Dev</p>
                            </div>
                        </Link>

                        <Link href="/design-system" className="relative rounded-lg overflow-hidden bg-[#1a1208] min-h-[300px] flex flex-col justify-end p-8 group border border-[rgba(200,180,120,0.07)] hover:border-[rgba(200,180,120,0.2)] transition duration-300">
                            <Image
                                src="/images/century-hero.png"
                                alt="Design System"
                                fill
                                className="object-cover object-top opacity-30 group-hover:opacity-40 transition duration-300"
                            />
                            <div className="relative">
                                <h3 className="font-serif text-2xl md:text-3xl text-cream font-light">Design System</h3>
                                <p className="text-xs tracking-[0.1em] uppercase text-gold opacity-60 mt-2">HTML/CSS · Component Systems</p>
                            </div>
                        </Link>
                    </div>

                    {/* Wardrobe Whimsy */}
                    <Link href="https://giannahoskins.github.io/wardrobe-whimsy/" target="_blank" className="relative rounded-lg overflow-hidden bg-[#150d20] min-h-[240px] flex flex-col justify-end p-8 group border border-[rgba(200,180,120,0.07)] hover:border-[rgba(200,180,120,0.2)] transition duration-300">
                        <Image
                            src="/images/wardrobe-whimsy.png"
                            alt="Wardrobe Whimsy"
                            fill
                            className="object-cover object-top opacity-30 group-hover:opacity-40 transition duration-300"
                        />
                        <div className="relative">
                            <h3 className="font-serif text-2xl md:text-3xl text-cream font-light">Wardrobe Whimsy</h3>
                            <p className="text-xs tracking-[0.1em] uppercase text-gold opacity-60 mt-2">JavaScript · Canvas · Interactive UI</p>
                        </div>
                    </Link>
                </div>
            </section>

            <CelestialDivider />

            {/* Contact */}
            <section id="contact" className="py-24 text-center px-6">
                <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream">
                    Let's <em className="text-gold">connect</em>
                </h2>
                <p className="text-base text-cream-muted mt-4 mb-8 max-w-sm mx-auto">Open to full-time UX Engineer and Frontend Developer roles.</p>
                <a href="mailto:giannahoskins@gmail.com" className="text-sm tracking-[0.15em] uppercase text-gold border-b border-[rgba(200,180,120,0.3)] pb-1 hover:border-gold transition duration-300">
                    giannahoskins@gmail.com
                </a>
            </section>

            {/* Footer */}
            <footer className="border-t border-[rgba(200,180,120,0.08)] py-6 px-8 flex justify-between items-center">
                <span className="font-serif italic text-[rgba(200,180,120,0.3)] text-sm">crafted with intention ✦</span>
                <span className="text-xs text-[rgba(200,180,120,0.2)] tracking-widest">© 2026 Gianna Hoskins</span>
            </footer>
        </main>
    )
}