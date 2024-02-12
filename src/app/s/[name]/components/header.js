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
            className="font-semibold px-2 md:px-2 sm:px-4 lg:py-0 py-2.5 bg-schalker-black fixed w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    <Link className="flex items-center justify-center text-xl font-bold" href={`${pathname}`}>
                        <Image
                            src="/Logo.png"
                            className="mr-3"
                            width={30}
                            height={30}
                            alt="Главная"
                            priority={true}
                        />
                        BoxCMS
                    </Link>
                </div>
                <div className="flex lg:order-2">
                    <div className="flex items-center space-x-[10px]">
                        <Link target="_blank" href="https://vk.com/boxbuild"
                              className="w-8 h-8 bg-white hover:outline-none hover:ring-2 hover:ring-gray-700 flex items-center justify-center bg-opacity-10 rounded">
                            <Image
                                src="/vk.png"
                                className=""
                                width={18}
                                height={18}
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
                                alt="discord"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <button onClick={handleClick}
                            className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-admin-black focus:ring-gray-700"
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
                    className={`${isVisible ? '' : 'hidden '}items-center transition-opacity justify-between mx-auto w-full lg:static lg:top-12 lg:left-0 px-3 lg:flex lg:w-auto lg:order-1`}>
                    <ul className="flex flex-col font-normal text-sm p-4 mt-4 border rounded-lg lg:flex-row lg:space-x-6 lg:mt-0 lg:text-sm lg:font-semibold lg:border-0 bg-admin-black
                        lg:bg-schalker-black border-gray-700">
                        <li>
                            <Link href="/" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname === '/' ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar1.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/wiki" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/wiki') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar2.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Википедия
                            </Link>
                        </li>
                        <li>
                            <Link href="/map" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/map') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar3.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Карта
                            </Link>
                        </li>
                        <li>
                            <Link href="/rules" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/rules') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar4.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Правила проекта
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/shop') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar6.svg"
                                    className="lg:hidden w-6 mr-3"
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
