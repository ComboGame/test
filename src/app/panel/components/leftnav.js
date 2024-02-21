'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import {usePathname} from 'next/navigation'
import AccountLink from "@/app/panel/components/svg/AccountLink";
import BalanceLink from "@/app/panel/components/svg/BalanceLink";
import SiteLink from "@/app/panel/components/svg/SiteLink";
import NewSiteLink from "@/app/panel/components/svg/NewSiteLink";
import DevLink from "@/app/panel/components/svg/DevLink";

export default function PanelLeftNav() {
    const pathname = usePathname()
    const [isHighlighted2, setIsHighlighted2] = useState(false);
    const [isHighlighted3, setIsHighlighted3] = useState(false);


    const handleMouseEnter2 = () => {
        setIsHighlighted2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHighlighted2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHighlighted3(false);
    };
    const handleMouseLeave3 = () => {
        setIsHighlighted3(false);
    };
    return (
        <div id="panel"
             className="hidden xl:block h-[calc(100vh-8.5rem)] overflow-y-auto max-w-[250px] w-full [--scrollbar-size:theme(width.3)] lg:sticky lg:top-18 select-none">
            <div className="text-white text-[24px] font-bold mb-[15px]">Профиль</div>
            <div className="space-y-[15px] flex flex-col mb-[30px]">
                <AccountLink/>
                <BalanceLink/>
            </div>
            <div className="text-white text-[24px] font-bold mb-[15px]">Сайты</div>
            <div className="space-y-[15px] flex flex-col mb-[30px]">
                <SiteLink/>
                <NewSiteLink/>
            </div>
            <div className="text-white text-[24px] font-bold mb-[15px]">Разработчикам</div>
            <div className="space-y-[15px] flex flex-col mb-[30px]">
                <DevLink/>
            </div>
        </div>
    );
}