'use client'

import { motion } from "framer-motion"

export default function CelestialDivider() {
    return (
        <motion.div
            className="flex items-center justify-center gap-3 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="h-px bg-gradient-to-r from-transparent to-[rgba(200,180,120,0.3)]"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <span className="text-[10px] text-[rgba(200,180,120,0.5)]">✦</span>
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <motion.div
                className="h-px bg-gradient-to-l from-transparent to-[rgba(200,180,120,0.3)]"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </motion.div>
    )
}