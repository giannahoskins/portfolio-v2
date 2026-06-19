import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            {/* Arched photo */}
            <div className="flex items-center justify-center p-16 border-b md:border-b-0 md:border-r border-border">
                <div className="relative w-[220px] h-[300px] rounded-[110px_110px_0_0] overflow-hidden border border-[rgba(200,180,120,0.2)]">
                    <Image
                        src="/images/ren-faire.jpg"
                        alt="Gianna Hoskins"
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>

            {/* Bio text */}
            <div className="flex flex-col justify-center gap-5 p-12">
                <p className="text-[9px] tracking-[0.2em] uppercase text-gold opacity-60">About Me</p>
                <h2 className="font-serif text-4xl font-light text-cream leading-tight">
                    Design meets<br />
                    <em className="text-gold">intention.</em>
                </h2>
                <p className="text-sm text-cream-muted leading-relaxed font-light max-w-sm">
                    I'm a frontend developer and UX engineer based in Las Vegas. I build interfaces that live at the intersection of design craft and engineering — clean, accessible, and alive with detail.
                </p>
                <p className="text-sm text-cream-muted leading-relaxed font-light max-w-sm">
                    4+ years shipping production UX across 14,000+ apartment sites. Currently seeking my next role where design and code meet.
                </p>
            </div>
        </section>
    )
}