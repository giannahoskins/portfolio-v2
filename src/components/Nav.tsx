import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex justify-center items-center gap-8 px-8 py-5 border-b border-border relative">
            <span className="absolute left-8 font-serif italic text-gold text-lg">gh</span>
            <Link href="/#work" className="text-[10px] tracking-[0.18em] uppercase text-cream-muted hover:text-gold transition duration-200">Work</Link>
            <Link href="/pdf/GiannaHoskinsResume.pdf" target="_blank" className="text-[10px] tracking-[0.18em] uppercase text-cream-muted hover:text-gold transition duration-200">Experience</Link>
            <Link href="/#about" className="text-[10px] tracking-[0.18em] uppercase text-cream-muted hover:text-gold transition duration-200">About</Link>
            <Link href="/#contact" className="text-[10px] tracking-[0.18em] uppercase text-cream-muted hover:text-gold transition duration-200">Contact</Link>
        </nav>
    )
}