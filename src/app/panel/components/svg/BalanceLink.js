'use client'

import { useState } from 'react';
import {usePathname} from 'next/navigation'
import Link from "next/link";
export default function BalanceLink() {
    const pathname = usePathname()

    const [isHighlighted1, setIsHighlighted1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHighlighted1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHighlighted1(false);
    };

    return (
        <Link onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} href="/balance"
              className={`w-full h-[50px] ${pathname === '/balance' ? 'text-[#D1CAFF] bg-[#FFFFFF]/5' : 'hover:text-[#FFFFFF] hover:*:stroke-[#FFFFFF] text-[#FFFFFF]/75 hover:bg-[#FFFFFF]/5'} transition-all text-[20px] font-semibold rounded-[10px] flex items-center justify-start`}>
            <svg className={`ml-[15px] mr-[15px] ${pathname === '/balance' ? 'stroke-[#D1CAFF]' : (isHighlighted1 ? 'stroke-[#FFFFFF]' : 'stroke-[#FFFFFF]/75')}`}
                width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip212_1">
                        <rect id="Кошелек" width="25.000000" height="25.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#clip212_1)">
                    <path id="Форма 4"
                          d="M4.60416 6.77051L20.3958 6.77051C21.5004 6.77051 22.3958 7.66602 22.3958 8.77051L22.3958 18.3123C22.3958 19.4167 21.5004 20.3123 20.3958 20.3123L4.60416 20.3123C3.49959 20.3123 2.60416 19.4167 2.60416 18.3123L2.60416 8.77051C2.60416 7.66602 3.49959 6.77051 4.60416 6.77051Z"
                          fill="#000000" fill-opacity="0" fill-rule="evenodd"/>
                    <path id="Форма 4"
                          d="M13.0208 10.4165L22.3958 10.4165L22.3958 16.1458L13.0208 16.1458L13.0208 10.4165Z"
                          fill="#000000" fill-opacity="0" fill-rule="evenodd"/>
                    <path id="Форма 4"
                          d="M20.3958 6.77051C21.5004 6.77051 22.3958 7.66602 22.3958 8.77051L22.3958 18.3123C22.3958 19.4167 21.5004 20.3123 20.3958 20.3123L4.60416 20.3123C3.49959 20.3123 2.60416 19.4167 2.60416 18.3123L2.60416 8.77051C2.60416 7.66602 3.49959 6.77051 4.60416 6.77051L20.3958 6.77051ZM22.3958 10.4165L22.3958 16.1458L13.0208 16.1458L13.0208 10.4165L22.3958 10.4165ZM22.3958 9.37476L22.3958 17.1873M16.6667 6.77051C16.6667 4.16626 14.8437 3.64551 14.0625 3.64551C12.3264 3.64551 8.38541 3.64551 6.51041 3.64551C4.63541 3.64551 4.16666 5.13794 4.16666 5.88428L4.16666 6.77051M17.5 12.9998C17.7761 12.9998 18 13.2236 18 13.4998C18 13.7759 17.7761 13.9998 17.5 13.9998C17.2239 13.9998 17 13.7759 17 13.4998C17 13.2236 17.2239 12.9998 17.5 12.9998Z"
                          stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round"/>
                </g>
            </svg>

            Кошелек
        </Link>
    );
}
