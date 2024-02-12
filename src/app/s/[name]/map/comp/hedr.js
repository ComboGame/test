'use client'

import Image from 'next/image'
import {useState} from 'react';
import Link from 'next/link'
import {usePathname} from 'next/navigation'


export default function Header() {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };


    return (
        <nav
            className="font-semibold px-2 md:px-2 sm:px-4 xl:py-0 py-2.5 fixed w-full z-20 top-[10px] left-0">
            <div className="bg-black px-[10px] bg-opacity-50 border rounded-[10px] border-white border-opacity-10 backdrop-blur-[50px] container max-w-[200px] lg:max-w-[826px] flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    <Link className="flex items-center justify-center text-xl font-bold" href={`${pathname}`}>
                        <Image
                            src="/Logo.png"
                            className="mr-3"
                            width={30}
                            height={30}
                            quality={100}
                            alt="Главная"
                            priority={true}
                        />
                        BoxCMS
                    </Link>
                </div>
                <div className="flex xl:order-2">
                    <div className="lg:flex hidden items-center space-x-[10px]">
                        <Link target="_blank" href="https://vk.com/boxbuild"
                              className="w-8 h-8 bg-white hover:outline-none hover:ring-2 hover:ring-gray-700 flex items-center justify-center bg-opacity-10 rounded">
                            <Image
                                src="/vk.png"
                                className=""
                                width={18}
                                height={18}
                                quality={100}
                                alt="vk"
                                priority={true}
                            />
                        </Link>
                        <Link target="_blank" href="https://discord.gg/JhDkY6axrV"
                              className="w-8 h-8 bg-white hover:outline-none hover:ring-2 hover:ring-gray-700 flex items-center justify-center bg-opacity-10 rounded">
                            <Image
                                src="/ds.png"
                                className=""
                                width={18}
                                height={18}
                                quality={100}
                                alt="discord"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <button onClick={handleClick}
                            className="inline-flex items-center p-2 text-sm rounded-lg xl:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-admin-black focus:ring-gray-700"
                            aria-expanded="false">
                        <Image
                            src="/navbar.svg"
                            className="w-6 h-6"
                            width={24}
                            height={24}
                            alt="navbar"
                        />
                    </button>
                </div>

                <div
                    className={`${isVisible ? '' : 'hidden '}items-center transition-opacity justify-between mx-auto w-full xl:static xl:top-12 xl:left-0 xl:flex xl:w-auto xl:order-1`}>
                    <ul className="flex flex-col font-normal text-sm p-2 mt-4 border rounded-lg xl:flex-row xl:space-x-6 xl:mt-0 xl:text-sm xl:font-semibold xl:border-0 bg-admin-black
                        xl:bg-schalker-black border-gray-700">
                        <li>
                            <Link href="/" passHref
                                  className={`rounded-lg xl:py-2 px-2 py-4 ${pathname === '/' ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center xl:block`}>
                                <Image
                                    src="/navbar1.svg"
                                    className="xl:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/wiki" passHref
                                  className={`rounded-lg xl:py-2 px-2 py-4 ${pathname.startsWith('/wiki') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center xl:block`}>
                                <Image
                                    src="/navbar2.svg"
                                    className="xl:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Википедия
                            </Link>
                        </li>
                        <li>
                            <Link href="/map" passHref
                                  className={`rounded-lg xl:py-2 px-2 py-4 ${pathname.startsWith('/map') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center xl:block`}>
                                <Image
                                    src="/navbar3.svg"
                                    className="xl:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Карта
                            </Link>
                        </li>
                        <li>
                            <Link href="/rules" passHref
                                  className={`rounded-lg xl:py-2 px-2 py-4 ${pathname.startsWith('/rules') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center xl:block`}>
                                <Image
                                    src="/navbar4.svg"
                                    className="xl:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Правила проекта
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" passHref
                                  className={`rounded-lg xl:py-2 px-2 py-4 ${pathname.startsWith('/shop') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center xl:block`}>
                                <Image
                                    src="/navbar6.svg"
                                    className="xl:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Магазин
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
