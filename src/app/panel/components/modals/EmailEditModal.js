'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import Link from 'next/link'


export default function EmailEditModal() {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return(
        <div tabIndex="-1"
             className={`${isVisible ? '' : 'sr-only opacity-0'} fixed top-0 left-0 right-0 z-50 flex w-full p-4 overflow-x-hidden backdrop-blur-[8px] backdrop-saturate-150 transition-all justify-center items-center overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full`}>
            <div className="relative w-full max-w-[400px] max-h-full">

                <div className="relative bg-[#0E0D14] rounded-[10px] border border-[#222031]">

                    <div className="flex items-center justify-between p-[25px]">
                        <h3 className="text-xl font-bold text-white">
                            Изменение почты
                        </h3>
                        <button type="button" onClick={handleClick}
                                className="text-[#D1CAFF] bg-[#1A1920] rounded-[5px] w-[30px] h-[30px] ml-auto inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    <form>
                        <div className="px-[25px] space-y-6">
                            <div className="bg-[#13121B] h-[75px] rounded-[5px] border border-[#5E5784] flex items-center">
                                <div className="flex items-center p-[25px]">
                                    <Image
                                        src="/email.svg"
                                        className="w-6 h-6 mr-[15px]"
                                        width={24}
                                        height={24}
                                        alt="navbar"
                                    />
                                    <div className="text-[#D1CAFF] font-medium text-[20px]">elueshka@gmail.com</div>
                                </div>
                            </div>
                            <p className="mt-[25px] text-white font-medium">Вы уверены, что хотите изменить текущий адрес электронной почты на другой?</p>
                        </div>

                        <div
                            className="flex items-center p-6 space-x-[10px] rounded-[5px]">
                            <button
                                    className="text-[#B8B8FF] bg-[#494965] w-full outline-none font-bold rounded-[5px] px-5 py-2.5 text-center">
                                Отмена
                            </button>
                            <button
                                    className="text-[#494965] bg-[#B8B8FF] w-full outline-none font-bold rounded-[5px] px-5 py-2.5 text-center">
                                Изменить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}