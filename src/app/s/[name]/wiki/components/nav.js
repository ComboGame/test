"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLeft() {
    const pathname = usePathname()
    return (
        <div className="hidden lg:block">
            <div id="element"
                 className="h-[calc(100vh-4.5rem)] overflow-y-auto py-8 [--scrollbar-size:theme(width.3)] lg:sticky lg:top-18 select-none">
                <div className="space-y-3">
                    <div className="font-sans text-white text-xl font-bold">Основное</div>
                    <div className="grid select-none">
                        <div className="*:relative *:grid *:grid-flow-col *:text-base *:font-semibold *:text-opacity-90 *:items-center *:justify-start *:rounded-lg *:px-3 *:py-2 *:transition *:gap-2">
                            <Link href="/wiki" passHref
                                  className={`${pathname === '/wiki' ? 'bg-[#1A1920] text-white' : 'text-white'} hover:text-[#B5ABF2]`}>
                                Введение
                            </Link>
                            <Link href="/wiki/start" passHref
                                  className={`${pathname === '/wiki/start' ? 'bg-[#1A1920] text-white' : 'text-white'} hover:text-[#B5ABF2]`}>
                                Как начать играть
                            </Link>
                            <Link href="/wiki/dictionary" passHref
                                  className={`${pathname === '/wiki/dictionary' ? 'bg-[#1A1920] text-white' : 'text-white'} hover:text-[#B5ABF2]`}>
                                Словарь терминов
                            </Link>
                            <Link href="/wiki/commands" passHref
                                  className={`${pathname === '/wiki/commands' ? 'bg-[#1A1920] text-white' : 'text-white'} hover:text-[#B5ABF2]`}>
                                Команды
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}