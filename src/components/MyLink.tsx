import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function MyLink({
    href,
    children
} : {
    href: string
    children: ReactNode
}) {
    return (
        <Link
            href={href} target="_blank" className="group relative flex items-center w-fit"
        >
            <p className="after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                {children}
            </p>
            <ArrowUpRight className="w-3 h-3 ml-1" />
        </Link>
    )
}
