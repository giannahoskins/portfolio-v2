'use client'

import { useState } from "react"
import Image from "next/image"

export function LightboxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className={`relative w-full h-full cursor-zoom-in ${className}`}
                onClick={() => setOpen(true)}
            >
                <Image src={src} alt={alt} fill className="object-contain object-top" />
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-8"
                    onClick={() => setOpen(false)}
                >
                    <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        className="absolute top-6 right-6 text-gold text-sm tracking-[0.15em] uppercase border border-[rgba(200,180,120,0.3)] rounded-full px-4 py-2 hover:border-gold transition duration-200"
                        onClick={(e) => {
                            e.stopPropagation()
                            setOpen(false)
                        }}
                    >
                        Close ✕
                    </button>
                </div>
            )}
        </>
    )
}