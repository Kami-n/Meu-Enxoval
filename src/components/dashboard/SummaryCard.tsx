import type { LucideIcon } from 'lucide-react'

interface SummaryCardProps {
    title: string
    value: number
    description: string
    icon: LucideIcon
    color: string
}

function SummaryCard({
    title,
    value,
    description,
    icon: Icon,
    color,
                     }:SummaryCardProps) {
    return(
        <div className="rounded-2x1 border border-[#E8E5DC] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{title}</p>
                <div className={`rounded-x1 p-3 ${color}`}>
                    <Icon size={22} />
                </div>
            </div>

            <h3 className="mt-4 text-3x1 font-semibold text-[#536B56]">
                {value}
            </h3>
            <p className="mt-1 text-xs text-gray-400">
                {description}
            </p>
        </div>
    )
}

export default SummaryCard