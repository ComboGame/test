'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import {usePathname} from 'next/navigation'


export default function Header() {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        const handleResize = () => {
            if (isVisible && window.innerWidth <= 1024) {
                setIsVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isVisible]);


    return (
        <nav
            className={`${isVisible ? 'bg-none min-h-[100%]' : 'bg-[#0E0D14]/75 border-b border-[#14121C]/50'}  font-semibold  backdrop-blur-[8px] backdrop-saturate-150 px-[25px] xl:px-[25px] sm:px-4 overflow-y-hidden py-2.5 lg:py-4  fixed w-full z-50 top-0 left-0`}>
            <div className="container max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center p-2">
                    <Link className="flex items-center justify-center text-lg font-bold" href={`${pathname}`}>
                        <Image
                            src="/Logo.svg"
                            className="sm:mr-[15px]"
                            width={30}
                            height={30}
                            quality={100}
                            alt="Главная"
                            priority={true}
                        />
                        <p className="hidden sm:block">BOX<span className="text-[#B8B8FF]">CMS</span></p>
                    </Link>
                </div>
                <div className="flex lg:order-2">
                    <div className="flex items-center">
                        <Link href="/auth/signup"
                              className="lg:flex items-center space-x-[15px] text-base hidden">
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
                            className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden text-gray-400"
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
                    <ul className={`${isVisible ? 'bg-[#121019] border-[#1A1724] ' : 'bg-auto '}flex flex-col font-normal text-opacity-20 text-sm px-4 mt-4 border rounded-lg lg:flex-row lg:space-x-[10px] lg:mt-0 lg:text-sm lg:font-semibold lg:border-0`}>
                        <li>
                            <Link href="/auth/signup"
                                  className="flex items-center mt-[15px]  justify-center bg-[#1C1925] py-[13px] rounded-[5px] space-x-[15px] text-base lg:hidden">
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
                        </li>
                        <li>
                            <Link href="/" passHref
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname === '/' ? 'text-[#dddddd]' : 'text-white hover:text-[#dddddd]'} duration-100 transition-all flex items-center lg:block`}>
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
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/about') ? 'text-[#dddddd]' : 'text-white hover:text-[#dddddd]'} duration-100 transition-all flex items-center lg:block`}>
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
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/contact') ? 'text-[#dddddd]' : 'text-white hover:text-[#dddddd]'} duration-100 transition-all flex items-center lg:block`}>
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
                                  className={`rounded-lg lg:py-2.5 px-5 py-4 ${pathname.startsWith('/guides') ? 'text-[#dddddd]' : 'text-white hover:text-[#dddddd]'} duration-100 transition-all flex items-center lg:block`}>
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
