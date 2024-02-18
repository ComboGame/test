import localFont from "next/font/local";
import Image from "next/image";
import Link from 'next/link'
import Header from "@/app/auth/components/header";

const Gilroy = localFont({
    src: [
        {
            path: '../../fonts/Gilroy-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-UltraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../fonts/Gilroy-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-gilroy'
})


export const metadata = {
    title: "Авторизация — BoxCMS",
    description: "Будующий лидер в сфере монетизации Minecraft проектов.",
};

export default function SignUp() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} font-sans min-w-[361px]`}>
        <main className="">
            <Header/>
            <section className="xl:grid grid-cols-[50%,50%] min-h-screen">
                <div className="w-full pt-[160px] justify-center flex px-[25px] sm:px-0">
                    <div className="relative w-[460px]">
                        <h1 className="text-center font-semibold text-[36px] mb-[50px]">Регистрация</h1>
                        <div className="flex space-x-[10px] h-[50px] sm:h-[80px] w-full">
                            <Link href="#"
                                  className="flex select-none items-center justify-center w-full bg-[#5865F2] rounded-[10px]">
                                <Image
                                    src="/discord.svg"
                                    className="h-[25px] sm:h-[35px]"
                                    width={35}
                                    height={35}
                                    alt="plus"
                                />
                            </Link>
                            <Link href="#"
                                  className="flex select-none items-center justify-center w-full bg-[#0077FF] rounded-[10px]">
                                <Image
                                    src="/vkontact.svg"
                                    className="h-[25px] sm:h-[35px]"
                                    width={35}
                                    height={35}
                                    alt="plus"
                                />
                            </Link>
                        </div>
                        <p className="my-[25px] text-base text-white text-center mx-auto font-normal">или</p>
                        <form className="mb-[50px] mx-auto">
                            <div className="mb-5">
                                <input type="login" id="login"
                                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                                       placeholder="Логин" required/>
                            </div>
                            <div className="mb-5">
                                <input type="email" id="email"
                                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                                       placeholder="Электронная почта" required/>
                            </div>
                            <div className="relative mb-5">
                                <input type="password" id="password"
                                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                                       placeholder="Пароль" required/>
                                <button type="submit"
                                        className="text-white absolute end-[0px] bottom-[5px] px-4 py-2">
                                    <Image
                                        src="/passwd.svg"
                                        className="w-6 h-6"
                                        width={24}
                                        height={24}
                                        alt="plus"
                                    />
                                </button>
                            </div>
                            <div className="relative mb-5">
                                <input type="password-repeat" id="password-repeat"
                                       className="bg-inherit border border-[#262337] placeholder-[#A39DC0] text-[#A39DC0] text-[18px] rounded-[10px] focus:ring-[#262337] focus:border-[#262337] block w-full px-[25px] py-2.5"
                                       placeholder="Повторный пароль" required/>
                                <button type="submit"
                                        className="text-white absolute end-[0px] bottom-[5px] px-4 py-2">
                                    <Image
                                        src="/passwd2.svg"
                                        className="w-6 h-6"
                                        width={24}
                                        height={24}
                                        alt="plus"
                                    />
                                </button>
                            </div>
                            <button type="submit"
                                    className="text-[#28283B] select-none w-full bg-[#494965] font-bold sm:text-[20px] rounded-lg text-[18px] px-5 py-[15px] text-center">
                                Продолжить
                            </button>

                            {/*<button type="submit"*/}
                            {/*        className="text-[#28283B] select-none w-full bg-[#B8B8FF] hover:bg-[#CFCFFF] transition-all font-bold text-[20px] rounded-lg text-sm px-5 py-[15px] text-center">*/}
                            {/*    Продолжить*/}
                            {/*</button>*/}
                        </form>
                        <div className="justify-center flex font-medium text-[14px] sm:text-[18px]">
                            <p className="">Уже есть аккаунт?</p>
                            <Link className="underline hover:no-underline ml-2" href="#">
                                Войти
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-[150px]  bg-[#0D0C11] select-none justify-center hidden xl:flex">
                    <div className="max-w-[600px] flex">
                        <Image
                            src="/vremenno.png"
                            className="w-[600px] h-[600px] select-none"
                            width={600}
                            height={600}
                            alt="plus"
                        />
                    </div>
                </div>
            </section>
        </main>
        </body>
        </html>
    );
}
