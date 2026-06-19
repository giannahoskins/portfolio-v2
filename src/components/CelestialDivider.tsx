export default function CelestialDivider() {
    return (
        <div className="flex items-center justify-center gap-3 py-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(200,180,120,0.3)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <span className="text-[10px] text-[rgba(200,180,120,0.5)]">✦</span>
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(200,180,120,0.4)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(200,180,120,0.3)]" />
        </div>
    )
}