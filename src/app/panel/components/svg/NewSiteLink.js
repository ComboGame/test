'use client'

import { useState } from 'react';
import {usePathname} from 'next/navigation'
import Link from "next/link";
export default function NewSiteLink() {
    const pathname = usePathname()

    const [isHighlighted1, setIsHighlighted1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHighlighted1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHighlighted1(false);
    };

    return (
        <Link onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} href="/newsite"
              className={`w-full h-[50px] ${pathname === '/newsite' ? 'text-[#D1CAFF] bg-[#FFFFFF]/5' : 'hover:text-[#FFFFFF] hover:*:stroke-[#FFFFFF] text-[#FFFFFF]/75 hover:bg-[#FFFFFF]/5'} transition-all text-[20px] font-semibold rounded-[10px] flex items-center justify-start`}>
            <svg className={`ml-[15px] mr-[15px] ${pathname === '/newsite' ? 'stroke-[#D1CAFF]' : (isHighlighted1 ? 'stroke-[#FFFFFF]' : 'stroke-[#FFFFFF]/75')}`}
                width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip138_596">
                        <rect id="Плюс" width="25.000000" height="25.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#clip138_596)">
                    <path id="Форма 2" d="M12.5122 19.7917L12.5313 5.2085M5.2085 12.5002L19.792 12.5002"
                          stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                </g>
            </svg>
            Создать сайт
        </Link>
    );
}
