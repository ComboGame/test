import localFont from "next/font/local";
import Image from "next/image";
import Link from 'next/link'
import Header from "@/app/auth/components/header";
import ForgotPasswordTwoForm from "@/app/auth/forgot-password-two/components/ForgotPasswordTwoForm";

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
    title: "Регистрация — BoxCMS",
    description: "Будующий лидер в сфере монетизации Minecraft проектов.",
};

export default function ForgotPasswordTwo() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} font-sans min-w-[361px]`}>
        <main className="">
            <Header/>
            <section className="xl:grid grid-cols-[50%,50%] min-h-screen">
                <div className="w-full pt-[160px] justify-center flex px-[25px] sm:px-0">
                    <div className="relative w-[460px]">
                        <h1 className="text-center font-semibold text-[36px] mb-[25px]">Восстановление пароля</h1>
                        <div className="mt-[25px] rounded-[10px] bg-[#13121B] border border-[#5E5784] p-[25px]">
                            <p className=" text-[18px] leading-tight text-white text-left mx-auto font-normal">
                                На электронную почту <span
                                className="font-semibold text-[#B8B8FF]">elueshka@gmail.com</span> было отправлено письмо с кодом для подтверждения учетной записи.
                                <br/><br/>Аккаунт: _elue
                            </p>
                        </div>
                        <ForgotPasswordTwoForm/>

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
