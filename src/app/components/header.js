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
            className="font-semibold bg-[#0A0A0F]/99 backdrop-blur-[100px] px-2 md:px-2 sm:px-4 lg:py-0 py-2.5 fixed w-full z-20 top-0 left-0">
            <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    <Link className="flex items-center justify-center text-lg font-bold" href={`${pathname}`}>
                        <Image
                            src="/Logo.png"
                            className="mr-[15px]"
                            width={30}
                            height={30}
                            quality={100}
                            alt="Главная"
                            priority={true}
                        />
                        BOX<span className="text-[#B8B8FF]">CMS</span>
                    </Link>
                </div>
                <div className="flex lg:order-2">
                    <div className="flex items-center">
                        <Link target="_blank" href="https://vk.com/boxbuild"
                              className="flex items-center space-x-[15px] text-base">
                            <Image
                                src="/user.svg"
                                className=""
                                width={18}
                                height={18}
                                quality={100}
                                alt="vk"
                                priority={true}
                            />
                            <p>Личный кабинет</p>
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
                    <ul className="flex flex-col font-normal text-opacity-20 text-sm p-4 mt-4 border rounded-lg lg:flex-row lg:space-x-[10px] lg:mt-0 lg:text-sm lg:font-semibold lg:border-0 bg-admin-black
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
                            <Link href="/about" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/about') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar2.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/contact') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar3.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Контакты
                            </Link>
                        </li>
                        <li>
                            <Link href="/guides" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/guides') ? 'text-[#6E55FF]' : 'text-white hover:text-[#6E55FF]'} duration-100 transition-all flex items-center lg:block`}>
                                <Image
                                    src="/navbar4.svg"
                                    className="lg:hidden w-6 mr-3"
                                    width={24}
                                    height={24}
                                    alt="navbar1"
                                />
                                Гайды
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
