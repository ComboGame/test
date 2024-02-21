'use client'

import { useState } from 'react';
import {usePathname} from 'next/navigation'
import Link from "next/link";
export default function DevLink() {
    const pathname = usePathname()

    const [isHighlighted1, setIsHighlighted1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHighlighted1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHighlighted1(false);
    };

    return (
        <Link onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} href="/developers"
              className={`w-full h-[50px] ${pathname === '/developers' ? 'text-[#D1CAFF] bg-[#FFFFFF]/5' : 'hover:text-[#FFFFFF] hover:*:stroke-[#FFFFFF] text-[#FFFFFF]/75 hover:bg-[#FFFFFF]/5'} transition-all text-[20px] font-semibold rounded-[10px] flex items-center justify-start`}>
            <svg className={`ml-[15px] mr-[15px] ${pathname === '/developers' ? 'stroke-[#D1CAFF]' : (isHighlighted1 ? 'stroke-[#FFFFFF]' : 'stroke-[#FFFFFF]/75')}`}
                width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip138_610">
                        <rect id="API-интерфейс" width="25.000000" height="25.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#clip138_610)">
                    <path id="Форма 1"
                          d="M21.3447 2.62305L21.3447 2.59473C21.6416 2.29761 22.1083 2.29761 22.4053 2.59473C22.7023 2.8916 22.7023 3.3584 22.4053 3.65527L22.3771 3.65527L21.3447 2.62305ZM17.7083 13.021L19.2708 11.4585C20.0521 10.6772 21.3542 7.8125 19.2708 5.72925C17.1875 3.646 14.3229 4.948 13.5417 5.72925L11.9792 7.29175L17.7083 13.021ZM9.88669 10.4077L9.88669 10.4358L10.919 11.4683L10.9473 11.4683C11.2443 11.1714 11.2443 10.7046 10.9474 10.4077C10.6504 10.1106 10.1837 10.1106 9.88669 10.4077ZM7.29166 11.9792L5.72916 13.5417C4.94791 14.323 3.64582 17.1875 5.72916 19.271C7.81249 21.3542 10.6771 20.0522 11.4583 19.271L13.0208 17.7085L12.5093 17.197L12.5093 17.1689L11.477 16.1365L11.4487 16.1365L8.8638 13.5515L8.8638 13.5234L7.83148 12.491L7.80328 12.491L7.29166 11.9792ZM13.5322 14.0813L13.5322 14.0532C13.8292 13.7561 14.2959 13.7561 14.5929 14.0532C14.8898 14.3501 14.8898 14.8169 14.5928 15.1138L14.5645 15.1138L13.5322 14.0813ZM3.65534 22.4055L3.65534 22.3772L2.62294 21.345L2.59466 21.345C2.29768 21.6418 2.29769 22.1086 2.59468 22.4055C2.89167 22.7026 3.35836 22.7026 3.65534 22.4055Z"
                          fill="#000000" fill-opacity="0" fill-rule="evenodd"/>
                    <path id="Форма 1"
                          d="M17.7083 13.021L11.9792 7.29175L13.5417 5.72925C14.3229 4.948 17.1875 3.646 19.2708 5.72925C21.3542 7.8125 20.0521 10.6772 19.2708 11.4585L17.7083 13.021ZM19.2708 5.72925L21.875 3.125M7.29166 11.9792L13.0208 17.7085L11.4583 19.271C10.6771 20.0522 7.81249 21.3542 5.72916 19.271C3.64582 17.1875 4.94791 14.323 5.72916 13.5417L7.29166 11.9792ZM11.979 16.6667L14.0625 14.5835M3.125 21.8752L5.72916 19.271M8.3335 13.0212L10.417 10.938"
                          stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                </g>
            </svg>

            API
        </Link>
    );
}
