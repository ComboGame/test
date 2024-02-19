"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

export default function AuthForm({ }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [passwordShown, setPasswordShown] = useState(false);
    function changePasswordShown(e) {
        e.preventDefault(); // Отменить перезагрузку страницы и дефолтную отправку формы от html
        setPasswordShown(!passwordShown) // Думаю всё и так понятно
    }

    useEffect(()=>{
        if(password.length <= 0){
            setSubmitDisabled(true)
        }else if(login.length <= 0){
            setSubmitDisabled(true)
        }else{
            setSubmitDisabled(false)
        }
    }, [password, login])

    const [submitDisabled, setSubmitDisabled] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        setSubmitDisabled(true);
    }

    return (
        <form className="mb-[50px] mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <input type="login" id="login"
                       value={login}
                       onChange={(event) => {
                           setLogin(event.target.value)
                       }}
                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                       placeholder="Логин или электронная почта"
                       maxLength={20}
                       required
                />
            </div>

            <div className="relative mb-5">
                <input type={passwordShown?"text":"password"} id="password"
                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                       placeholder="Пароль"
                       maxLength={50}
                       minLength={3}
                       value={password}
                       onChange={(event) => {
                           setPassword(event.target.value)
                       }}
                       required
                />
                <button
                    className="text-white absolute end-[0px] bottom-[5px] px-4 py-2"
                    onClick={changePasswordShown}
                >
                    <Image
                        src={passwordShown?"/passwd2.svg":"/passwd.svg"}
                        className="w-6 h-6"
                        width={24}
                        height={24}
                        alt="plus"
                    />
                </button>
            </div>
            <button type="submit"
                    className="text-[#28283B] duration-[.2s] select-none w-full disabled:bg-[#494965] hover:bg-[#CFCFFF] bg-[#B8B8FF] font-bold sm:text-[20px] rounded-lg text-[18px] px-5 py-[15px] text-center"
                    disabled={submitDisabled}
            >
                Войти
            </button>

            {/*<button type="submit"*/}
            {/*        className="text-[#28283B] select-none w-full bg-[#B8B8FF] hover:bg-[#CFCFFF] transition-all font-bold text-[20px] rounded-lg text-sm px-5 py-[15px] text-center">*/}
            {/*    Войти*/}
            {/*</button>*/}
        </form>
    )
}
