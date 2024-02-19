"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";

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
        <form className="my-[50px] mx-auto" onSubmit={handleRegistration}>
            <div className="mb-[10px]">
                <input type="text" id="verifycode"
                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] outline-none text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                       placeholder="Код подтверждения"
                       required
                       maxLength={50}
                       value={email}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}
                />
            </div>
            <div className="mb-[50px] justify-start flex font-medium text-[14px] sm:text-[16px]">
                <p className="">Не пришел код?</p>
                <Link className="underline hover:no-underline ml-2" href="#">
                    Отправить письмо повторно
                </Link>
            </div>
            <button
                type="submit"
                className="text-[#28283B] select-none w-full duration-[.2s] bg-[#B8B8FF] active:bg-[#CFCFFF] disabled:bg-[#494965] font-bold sm:text-[20px] rounded-lg text-[18px] px-5 py-[15px] text-center"
                disabled={isSubmitDisabled}
            >
                Завершить
            </button>
        </form>
    )
}
