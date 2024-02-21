'use client'

import { useState } from 'react';
import {usePathname} from 'next/navigation'
import Link from "next/link";
export default function SiteLink() {
    const pathname = usePathname()

    const [isHighlighted1, setIsHighlighted1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHighlighted1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHighlighted1(false);
    };

    return (
        <Link onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} href="/sitename"
              className={`w-full h-[50px] ${pathname === '/sitename' ? 'text-[#D1CAFF] bg-[#FFFFFF]/5' : 'hover:text-[#FFFFFF] hover:*:stroke-[#FFFFFF] text-[#FFFFFF]/75 hover:bg-[#FFFFFF]/5'} transition-all text-[20px] font-semibold rounded-[10px] flex items-center justify-start`}>
            <svg className={`ml-[15px] mr-[15px] ${pathname === '/sitename' ? 'stroke-[#D1CAFF]' : (isHighlighted1 ? 'stroke-[#FFFFFF]' : 'stroke-[#FFFFFF]/75')}`}
                width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip212_8">
                        <rect id="Сервер данных" width="25.000000" height="25.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#clip212_8)">
                    <path id="Форма 3"
                          d="M21.3542 2.0835L3.64584 2.0835C2.7829 2.0835 2.08334 2.78296 2.08334 3.646L2.08334 21.3542C2.08334 22.2173 2.7829 22.9167 3.64584 22.9167L21.3542 22.9167C22.2171 22.9167 22.9167 22.2173 22.9167 21.3542L22.9167 3.646C22.9167 2.78296 22.2171 2.0835 21.3542 2.0835ZM2.10334 17.397L2.08334 17.417C1.66334 17.417 1.33334 17.0869 1.33334 16.667C1.33334 16.2471 1.66334 15.917 2.08334 15.917L2.10334 15.937L2.10334 17.397ZM22.8967 15.937L22.9167 15.917C23.3367 15.917 23.6667 16.2471 23.6667 16.667C23.6667 17.0869 23.3367 17.417 22.9167 17.417L22.8967 17.397L22.8967 15.937ZM5.22834 20.522L5.20834 20.542C4.78834 20.542 4.45834 20.2119 4.45834 19.792C4.45834 19.3721 4.78834 19.042 5.20834 19.042L5.22834 19.062L5.22834 20.522ZM5.70918 19.062L5.72918 19.042C6.14918 19.042 6.47918 19.3721 6.47918 19.792C6.47918 20.2119 6.14918 20.542 5.72918 20.542L5.70918 20.522L5.70918 19.062ZM13.5617 20.522L13.5417 20.542C13.1217 20.542 12.7917 20.2119 12.7917 19.792C12.7917 19.3721 13.1217 19.042 13.5417 19.042L13.5617 19.062L13.5617 20.522ZM19.7717 19.062L19.7917 19.042C20.2117 19.042 20.5417 19.3721 20.5417 19.792C20.5417 20.2119 20.2117 20.542 19.7917 20.542L19.7717 20.522L19.7717 19.062ZM22.1867 14.0828L22.1667 14.0627C22.1667 13.6428 22.4967 13.3127 22.9167 13.3127C23.3367 13.3127 23.6667 13.6428 23.6667 14.0627L23.6467 14.0828L22.1867 14.0828ZM23.6467 19.251L23.6667 19.271C23.6667 19.6909 23.3367 20.021 22.9167 20.021C22.4967 20.021 22.1667 19.6909 22.1667 19.271L22.1867 19.251L23.6467 19.251ZM1.35334 14.0828L1.33334 14.0627C1.33334 13.6428 1.66334 13.3127 2.08334 13.3127C2.50334 13.3127 2.83334 13.6428 2.83334 14.0627L2.81334 14.0828L1.35334 14.0828ZM2.81334 19.251L2.83334 19.271C2.83334 19.6909 2.50334 20.021 2.08334 20.021C1.66334 20.021 1.33334 19.6909 1.33334 19.271L1.35334 19.251L2.81334 19.251Z"
                          fill="#000000" fill-opacity="0" fill-rule="nonzero"/>
                    <path id="Форма 3"
                          d="M3.64584 2.0835C2.7829 2.0835 2.08334 2.78296 2.08334 3.646L2.08334 21.3542C2.08334 22.2173 2.7829 22.9167 3.64584 22.9167L21.3542 22.9167C22.2171 22.9167 22.9167 22.2173 22.9167 21.3542L22.9167 3.646C22.9167 2.78296 22.2171 2.0835 21.3542 2.0835L3.64584 2.0835ZM2.08334 16.667L22.9167 16.667M5.20834 19.792L5.72918 19.792M13.5417 19.792L19.7917 19.792M22.9167 14.0627L22.9167 19.271M2.08334 14.0627L2.08334 19.271"
                          stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                </g>
            </svg>
            #NewAltera
        </Link>
    );
}