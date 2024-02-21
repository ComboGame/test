import Image from "next/image";
import Link from 'next/link'
import Header from "@/app/auth/components/header";
import AuthForm from "@/app/auth/signin/components/AuthForm";
import {Gilroy} from "@/fonts/fonts";

export const metadata = {
    title: "Авторизация — BoxCMS",
    description: "Будующий лидер в сфере монетизации Minecraft проектов.",
};

export default function SignIn() {

    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} font-sans min-w-[361px]`}>
        <main className="">
            <Header/>
            <section className="xl:grid grid-cols-[50%,50%] min-h-screen">
                <div className="w-full pt-[160px] justify-center flex px-[25px] sm:px-0">
                    <div className="relative w-[460px]">
                        <h1 className="text-center font-semibold text-[36px] mb-[50px]">Войти</h1>
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
                        <AuthForm/>
                        <div className="justify-center flex font-medium text-[14px] sm:text-[18px]">
                            <p className="">Ещё нет аккаунта?</p>
                            <Link className="underline hover:no-underline ml-2" href="/auth/signup">
                                Зарегистрироваться
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
