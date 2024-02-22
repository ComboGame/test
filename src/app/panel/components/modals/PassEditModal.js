'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import Link from 'next/link'


export default function PassEditModal() {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const [isPassword1Shown, setPassword1Shown] = useState(false);
    const [isPassword2Shown, setPassword2Shown] = useState(false);

    const [isSubmitDisabled, setSumbitDisabled] = useState(false);

    function changePassword1Shown() {
        setPassword1Shown(!isPassword1Shown)
    }

    function changePassword2Shown() {
        setPassword2Shown(!isPassword2Shown)
    }

    function handleRegistration(e) {
        e.preventDefault();
        setSumbitDisabled(true);
    }

    useEffect(() => {
        if (login.length <= 0 || email.length <= 0 || password1.length <= 0 || password2.length <= 0) {
            setSumbitDisabled(true)
        } else {
            setSumbitDisabled(false)
        }
    }, [login, email, password1, password2])

    return(
        <div tabIndex="-1"
             className={`${isVisible ? '' : 'sr-only opacity-0'} fixed top-0 left-0 right-0 z-50 flex w-full p-4 overflow-x-hidden backdrop-blur-[8px] backdrop-saturate-150 transition-all justify-center items-center overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full`}>
            <div className="relative w-full max-w-[400px] max-h-full">

                <div className="relative bg-[#0E0D14] rounded-[10px] border border-[#222031]">

                    <div className="flex items-center justify-between p-[25px]">
                        <h3 className="text-xl font-bold text-white">
                            Изменение пароля
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
                        <div className="px-[25px]">
                            <p className="text-white font-medium mb-[20px]">Мы рекомендуем менять пароли не реже, чем 1
                                раз в 3 месяца. Так безопаснее!
                                <br/><br/>
                                Чтобы изменить пароль от аккаунта, укажите ниже, в соответствующих полях, Ваши текущий и
                                новый пароли.
                            </p>
                            <div className="relative mb-[10px]">
                                <input type={isPassword1Shown ? "text" : "password"} id="password"
                                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                                       placeholder="Пароль"
                                       required
                                       value={password1}
                                       onChange={(e) => {
                                           setPassword1(e.target.value)
                                       }}
                                />
                                <button
                                    type="button"
                                    className="text-white absolute end-[0px] bottom-[5px] px-4 py-2"
                                    onClick={changePassword1Shown}
                                >
                                    <Image
                                        src={isPassword1Shown ? "/passwd2.svg" : "/passwd.svg"}
                                        className="w-6 h-6"
                                        width={24}
                                        height={24}
                                        alt="plus"
                                    />
                                </button>
                            </div>
                            <div className="relative mb-[0px]">
                                <input type={isPassword2Shown ? "text" : "password"} id="password-repeat"
                                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                                       placeholder="Повторный пароль"
                                       required
                                       value={password2}
                                       onChange={(e) => {
                                           setPassword2(e.target.value)
                                       }}
                                />
                                <button
                                    type="button"
                                    className="text-white absolute end-[0px] bottom-[5px] px-4 py-2"
                                    onClick={changePassword2Shown}
                                >
                                    <Image
                                        src={isPassword2Shown ? "/passwd2.svg" : "/passwd.svg"}
                                        className="w-6 h-6"
                                        width={24}
                                        height={24}
                                        alt="plus"
                                    />
                                </button>
                            </div>
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