"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLeft() {
    const pathname = usePathname()
    return (
        <div className="hidden lg:block">
            <div id="element"
                className="ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto py-8 px-6 [--scrollbar-size:theme(width.3)] lg:sticky lg:top-18 select-none">
                <div className="font-introdemo text-schalker-purple mb-3 font-extrabold">Основное</div>
                <div className="grid select-none" >
                    <div>
                        <Link href="/wiki" passHref
                            className={`${pathname === '/wiki' ? 'text-[#FF67B4]' : 'text-zinc-300'} hover:text-black relative grid grid-flow-col items-center justify-start text-sm  rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] gap-2`}>
                            Введение
                            {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-schalker-purple"></div> */}
                        </Link>
                        <Link href="/wiki/start" passHref
                            className={`${pathname === '/wiki/start' ? 'text-[#FF67B4]' : 'text-zinc-300'} hover:text-black relative grid grid-flow-col items-center justify-start text-sm  rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] gap-2`}>
                            Как начать играть
                            {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-schalker-purple"></div> */}
                        </Link>
                        <Link href="/wiki/dictionary" passHref
                            className={`${pathname === '/wiki/dictionary' ? 'text-[#FF67B4]' : 'text-zinc-300'} hover:text-black relative grid grid-flow-col items-center justify-start text-sm  rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] gap-2`}>
                            Словарь терминов
                            {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-schalker-purple"></div> */}
                        </Link>
                        <Link href="/wiki/commands" passHref
                            className={`${pathname === '/wiki/commands' ? 'text-[#FF67B4]' : 'text-zinc-300'} hover:text-black relative grid grid-flow-col items-center justify-start text-sm  rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] gap-2`}>
                            Команды
                            {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-schalker-purple"></div> */}
                        </Link>
                    </div>
                    <div className="grid mt-4 mb-3">
                        <div className="font-introdemo text-schalker-bblue mb-3 font-extrabold">Игровой
                            контент</div>
                        <div className="ml-4 mb-3">
                            <div className="grid select-none">
                                <Link href="/wiki/guilds" passHref
                                    className={`${pathname === '/wiki/guilds' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Гильдии
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-schalker-bblue"></div> */}
                                </Link>
                                <Link href="/wiki/datapacks" passHref
                                    className={`${pathname === '/wiki/datapacks' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Дата-паки
                                </Link>
                                <Link href="/wiki/mending" passHref
                                    className={`${pathname === '/wiki/mending' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Добыча починки
                                </Link>
                                <Link href="/wiki/debug-stick" passHref
                                    className={`${pathname === '/wiki/debug-stick' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Палочка отладки
                                </Link>
                                <Link href="/wiki/artprotection" passHref
                                    className={`${pathname === '/wiki/artprotection' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Защита артов
                                </Link>
                                <Link href="/wiki/invisibleframes" passHref
                                    className={`${pathname === '/wiki/invisibleframes' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Невидимые рамки
                                </Link>
                                <Link href="/wiki/invisiblelight" passHref
                                    className={`${pathname === '/wiki/invisiblelight' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Невидимый свет
                                </Link>
                                <Link href="/wiki/pouch" passHref
                                    className={`${pathname === '/wiki/pouch' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Мешочки
                                </Link>
                                <Link href="/wiki/fast-concrete" passHref
                                    className={`${pathname === '/wiki/fast-concrete' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Быстрый бетон
                                </Link>
                                <Link href="/wiki/ball" passHref
                                    className={`${pathname === '/wiki/ball' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Волейбольные мячи
                                </Link>
                                <Link href="/wiki/brewery" passHref
                                    className={`${pathname === '/wiki/brewery' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Алкоголь
                                </Link>
                                <Link href="/wiki/voicechat" passHref
                                    className={`${pathname === '/wiki/voicechat' ? 'text-[#67A4FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Голосовой чат
                                </Link>
                            </div>
                        </div>
                        <div className="font-introdemo text-[#ac81f8] mb-3 font-extrabold">Кастомизация</div>
                        <div className="ml-4 mb-3">
                            <div className="grid select-none">
                                <Link href="/wiki/chatstyles" passHref
                                    className={`${pathname === '/wiki/chatstyles' ? 'text-[#ac81f8]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Стили чата
                                    <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#ac81f8]"></div>
                                </Link>
                                <Link href="/wiki/particles" passHref
                                    className={`${pathname === '/wiki/particles' ? 'text-[#ac81f8]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Партиклы
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#ac81f8]"></div> */}
                                </Link>
                                <Link href="/wiki/balloons" passHref
                                    className={`${pathname === '/wiki/balloons' ? 'text-[#ac81f8]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Воздушные шары
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#ac81f8]"></div> */}
                                </Link>
                            </div>
                        </div>
                        <div className="font-introdemo text-[#64EC80] mb-3 font-extrabold">Профиль</div>
                        <div className="ml-4 mb-3 text-[#64EC80]">
                            <div className="grid select-none">
                                <Link href="/wiki/2fa" passHref
                                    className={`${pathname === '/wiki/2fa' ? 'text-[#64EC80]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Двухэтапная аутентификация
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#64EC80]"></div> */}
                                </Link>
                                <Link href="/wiki/account-change" passHref
                                    className={`${pathname === '/wiki/account-change' ? 'text-[#64EC80]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Смена аккаунта
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#64EC80]"></div> */}
                                </Link>
                            </div>
                        </div>
                        <div className="font-introdemo text-schalker-yyelw mb-3 font-extrabold">Поддержка
                        </div>
                        <div className="ml-4 mb-3">
                            <div className="grid select-none">
                                <Link href="/wiki/points" passHref
                                    className={`${pathname === '/wiki/points' ? 'text-[#FFCB67]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    SchalkerPoints
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#FFCB67]"></div> */}
                                </Link>
                            </div>
                        </div>
                        <div className="font-introdemo text-schalker-cyaan mb-3 font-extrabold">Прочее</div>
                        <div className="ml-4">
                            <div className="grid select-none">
                                <Link href="/wiki/privacy-policy" passHref
                                    className={`${pathname === '/wiki/privacy-policy' ? 'text-[#67D1FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Политика конфиденциальности
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#67D1FF]"></div> */}
                                </Link>
                                <Link href="/wiki/contacts" passHref
                                    className={`${pathname === '/wiki/contacts' ? 'text-[#67D1FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Контакты
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#67D1FF]"></div> */}
                                </Link>
                                <Link href="/wiki/collaboration" passHref
                                    className={`${pathname === '/wiki/collaboration' ? 'text-[#67D1FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Сотрудничество
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#67D1FF]"></div> */}
                                </Link>
                                <Link href="/wiki/mods" passHref
                                    className={`${pathname === '/wiki/mods' ? 'text-[#67D1FF]' : 'text-zinc-300'} relative justify-start text-sm rounded-lg px-3 py-2 transition hover:bg-[#E4CCE8] hover:text-black grid grid-flow-col items-center gap-2`}>
                                    Полезные моды
                                    {/* <div className="mt-[1px] h-1.5 w-1.5 rounded-full bg-[#67D1FF]"></div> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}