"use client";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function RegistrationForm({}) {
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


    return (
        <form className="mb-[50px] mx-auto" onSubmit={handleRegistration}>
            <div className="mb-5">
                <input type="login" id="login"
                       className="bg-[#2F1119] border border-[#FF5C89] placeholder-[#A39DC0] outline-none text-[#FF5C89] text-[18px] rounded-[10px] block w-full px-[25px] py-2.5"
                       placeholder="Логин"
                       required
                       value={login}
                       maxLength={20}
                       onChange={(e) => {
                           setLogin(e.target.value)
                       }}
                />
                <p className="mt-[6px] text-sm text-[#FF7DA0]">Ошибка! Такой логин уже занят!</p>
            </div>
            <div className="mb-5">
                <input type="email" id="email"
                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                       placeholder="Электронная почта"
                       required
                       maxLength={50}
                       value={email}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}
                />
            </div>
            <div className="relative mb-5">
                <input type={isPassword1Shown ? "text" : "password"} id="password"
                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                       placeholder="Пароль"
                       required
                       value={password1}
                       onChange={(e)=>{
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
            <div className="relative mb-5">
                <input type={isPassword2Shown ? "text" : "password"} id="password-repeat"
                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                       placeholder="Повторный пароль"
                       required
                       value={password2}
                       onChange={(e)=>{
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
            <button
                type="submit"
                className="text-[#28283B] select-none w-full duration-[.2s] bg-[#B8B8FF] active:bg-[#CFCFFF] disabled:bg-[#494965] font-bold sm:text-[20px] rounded-lg text-[18px] px-5 py-[15px] text-center"
                disabled={isSubmitDisabled}
            >
                Продолжить
            </button>

            {/*<button type="submit"*/}
            {/*        className="text-[#28283B] select-none w-full bg-[#B8B8FF] hover:bg-[#CFCFFF] transition-all font-bold text-[20px] rounded-lg text-sm px-5 py-[15px] text-center">*/}
            {/*    Продолжить*/}
            {/*</button>*/}
        </form>
    )
}
