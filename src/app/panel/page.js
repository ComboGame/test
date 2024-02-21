import localFont from 'next/font/local'
import Image from "next/image";
import Link from 'next/link'

import Header from "@/app/components/header";
import PanelLeftNav from "@/app/panel/components/leftnav";
import AccountName from "@/app/panel/components/AccountName";
import PasswordEdit from "@/app/panel/components/PasswordEdit";
import EmailEdit from "@/app/panel/components/EmailEdit";
import EmailEditModal from "@/app/panel/components/modals/EmailEditModal";
import PassEditModal from "@/app/panel/components/modals/PassEditModal";
const Gilroy = localFont({
    src: [
        {
            path: '../fonts/Gilroy-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-UltraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-gilroy'
})

export const metadata = {
    title: "Панель управления — BoxCMS",
    description: "Новичек в сфере монетизации Minecraft проектов.",
};

export default function Panel() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} lg:overflow-hidden font-sans min-w-[361px]`}>
        <main className="container mx-auto max-w-screen-xl">
            <Header/>
            <section
                className="pt-20 container justify-center xl:justify-start xl:mx-auto max-w-screen-xl xl:mt-20 flex xl:space-x-[43px]">
                <PanelLeftNav/>
                <div className="w-full xl:mx-0 mx-6">
                    <div className="my-8 grid fixed z-20 top-[60px] left-0  w-full xl:hidden">
                        <button
                            className="grid grid-flow-col xl:mx-0 mx-6 items-center justify-center font-medium transition select-none px-7 py-4 gap-3 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-lg"
                            type="button" data-drawer-target="drawer-right" data-drawer-show="drawer-right"
                            data-drawer-placement="right" aria-controls="drawer-right">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="12" x2="14" y2="12"></line>
                                <line x1="4" y1="18" x2="18" y2="18"></line>
                            </svg>
                            Навигация
                        </button>
                    </div>
                    <div className="my-[80px] xl:mt-[0px] space-y-[30px]">
                        <div className="xl:w-full xl:mx-0 mx-6">
                            <div className="text-white text-[48px] font-bold mb-[20px]">Аккаунт</div>
                            <div
                                className="bg-[#301313] px-[25px] py-[20px] border border-[#DE6363] mb-[20px] transition-all lg:h-[85px] rounded-[10px] flex items-center justify-between">
                                <Image
                                    src="/alertemail.svg"
                                    className="w-6 h-6 mr-[25px]"
                                    width={24}
                                    height={24}
                                    alt="navbar"
                                />
                                <div className="font-medium text-[18px]">Ваша текущая почта поставлена на ожидание для
                                    её смены.
                                    Для изменения электронной почты на новую, перейдите по ссылке в письме, которое мы
                                    отправили на текущую почту:
                                    <span className="font-semibold text-[#DE6363]"> elueshka@gmail.com</span></div>
                            </div>
                            <div
                                className="bg-[#301313] px-[25px] py-[20px] border border-[#DE6363] mb-[20px] transition-all lg:h-[85px] rounded-[10px] flex items-center justify-between">
                                <Image
                                    src="/alertemail.svg"
                                    className="w-6 h-6 mr-[25px]"
                                    width={24}
                                    height={24}
                                    alt="navbar"
                                />
                                <div className="font-medium text-[18px]">Для подтверждения изменения пароля на вашем аккаунте, необходимо перейти по ссылке, которую мы отправили на вашу электронную почту:
                                    <span className="font-semibold text-[#DE6363]"> eluesuesos@gmail.com</span></div>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-[20px]">
                                <AccountName/>
                                <PasswordEdit/>
                                <EmailEdit/>
                            </div>
                            <div className="space-y-[20px] mt-[20px]">
                                <div
                                    className="bg-[#100F17] py-[20px] border border-[#FFFFFF]/10 transition-all sm:h-[70px] rounded-[10px] flex items-center justify-between">
                                    <div
                                        className="px-[20px] text-white text-[18px] sm:text-[24px] font-bold">Уведомления
                                        о покупках на почту
                                    </div>
                                    <label className="pr-[20px] inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div
                                            className="relative w-[40px] h-[20px] bg-[#FFFFFF]/10 outline-none peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:bg-[#ABFFA1]/10 peer-checked:after:border-[#ABFFA1]/10 after:content-[''] after:absolute after:top-[3px] after:start-[3px] peer-checked:after:start-[8px] after:bg-[#FFFFFF]/10 after:border-[#FFFFFF]/10 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-[#B8FC99]/10"></div>
                                    </label>
                                </div>
                                <div
                                    className="bg-[#100F17] py-[20px] border border-[#FFFFFF]/10 transition-all sm:h-[70px] rounded-[10px] flex items-center justify-between">
                                    <div
                                        className="px-[20px] text-white text-[18px] sm:text-[24px] font-bold">Подтверждение
                                        выплат через почту
                                    </div>
                                    <label className="pr-[20px] inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div
                                            className="relative w-[40px] h-[20px] bg-[#FFFFFF]/10 outline-none peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:bg-[#ABFFA1]/10 peer-checked:after:border-[#ABFFA1]/10 after:content-[''] after:absolute after:top-[3px] after:start-[3px] peer-checked:after:start-[8px] after:bg-[#FFFFFF]/10 after:border-[#FFFFFF]/10 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-[#B8FC99]/10"></div>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <EmailEditModal/>
            <PassEditModal/>
        </main>

        </body>
        </html>

    );
}