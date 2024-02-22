'use client'

import { useState } from 'react';
import Link from "next/link";
export default function PasswordEdit() {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleMouseEnter = () => {
        setIsHighlighted(true);
    };

    const handleMouseLeave = () => {
        setIsHighlighted(false);
    };

    return (
        <Link href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             class={`${isHighlighted ? 'border-[#D1CAFF]/50' : 'border-[#FFFFFF]/10'} bg-[#100F17] p-[20px] border transition-all h-[95px] rounded-[10px] flex items-center justify-between`}>
            <div class="flex flex-col justify-center text-left">
                <div className="text-white text-[24px] font-bold">Пароль</div>
                <div className="text-white text-[18px] font-medium">Точки для виду</div>
            </div>
            <div class={`${isHighlighted ? '' : 'bg-opacity-0'} bg-[#1A1920] rounded-[5px] w-[30px] h-[30px] transition-all flex items-center justify-center`}>
                <svg class={`${isHighlighted ? 'stroke-[#D1CAFF]' : 'stroke-white'} transition-all`}
                    width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="clip208_583">
                            <rect id="Редактировать файл 2" width="20.000000" height="20.000000" fill="white"
                                  fill-opacity="0"/>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#clip208_583)">
                        <path id="path"
                              d="M7.4165 15.532L16.3451 6.60352L12.7737 3.03198L3.84509 11.9604L3.84509 15.532L7.4165 15.532Z"
                              fill="#000000" fill-opacity="0" fill-rule="nonzero"/>
                        <path id="path"
                              d="M16.3451 6.60352L12.7737 3.03198L3.84509 11.9604L3.84509 15.532L7.4165 15.532L16.3451 6.60352Z"
                              stroke-opacity="1.000000" stroke-width="1.500000"
                              stroke-linejoin="round"/>
                    </g>
                </svg>
            </div>
        </Link>
    )
        ;
}
