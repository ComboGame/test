'use client'

import { useState } from 'react';
import {usePathname} from 'next/navigation'
import Link from "next/link";
export default function AccountLink() {
    const pathname = usePathname()

    const [isHighlighted1, setIsHighlighted1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHighlighted1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHighlighted1(false);
    };

    return (
        <Link onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} href="/panel"
              className={`w-full h-[50px] ${pathname === '/panel' ? 'text-[#D1CAFF] bg-[#FFFFFF]/5' : 'hover:text-[#FFFFFF] hover:*:stroke-[#FFFFFF] text-[#FFFFFF]/75 hover:bg-[#FFFFFF]/5'} transition-all text-[20px] font-semibold rounded-[10px] flex items-center justify-start`}>
            <svg className={`ml-[15px] mr-[15px] ${pathname === '/panel' ? 'fill-[#D1CAFF] stroke-[#D1CAFF]' : (isHighlighted1 ? 'stroke-[#FFFFFF] fill-[#FFFFFF]' : 'fill-[#FFFFFF]/75 stroke-[#FFFFFF]/75')}`}
                 width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip138_576">
                        <rect id="Пользователь" width="25.000000" height="25.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#clip138_576)">
                    <path id="Форма 5"
                          d="M12.5 2.0835C10.1989 2.0835 8.33337 3.94897 8.33337 6.25024C8.33337 8.55127 10.1989 10.4167 12.5 10.4167C14.8012 10.4167 16.6667 8.55127 16.6667 6.25024C16.6667 3.94897 14.8012 2.0835 12.5 2.0835ZM13.1944 12.5L11.8056 12.5C7.01142 12.5 3.125 16.3865 3.125 21.1807C3.125 22.1394 3.90228 22.9167 4.86111 22.9167L20.1389 22.9167C21.0977 22.9167 21.875 22.1394 21.875 21.1807C21.875 16.3865 17.9886 12.5 13.1944 12.5Z"
                          fill="#D1CAFF" fill-opacity="1.000000" fill-rule="evenodd"/>
                </g>
            </svg>
            Аккаунт
        </Link>
    );
}
